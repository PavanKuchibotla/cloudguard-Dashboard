import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';
import rateLimit from 'express-rate-limit';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.use(cors());
app.use(express.json());

// Skip localtunnel gate page for all visitors automatically
app.use((req, res, next) => {
  res.setHeader('bypass-tunnel-reminder', 'true');
  next();
});

// ── Rate Limiting ──────────────────────────────────────────────────────────
const scanLimiter = rateLimit({
  windowMs: 60_000,
  max: 6,
  message: { error: 'Too many scan requests. Please wait 60 seconds.' },
  standardHeaders: true,
  legacyHeaders: false,
});

const apiLimiter = rateLimit({ windowMs: 60_000, max: 60 });
app.use('/api/', apiLimiter);

// ── Static Frontend ────────────────────────────────────────────────────────
const distPath = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(distPath));

// ── Data ───────────────────────────────────────────────────────────────────
const TOPOLOGY_DATA = {
  nodes: [
    { id: 'igw-prod-01',   group: 'igw',    type: 'Internet Gateway', region: 'us-east-1',  status: 'DANGER',  rules: 'Exposes VPC to internet', violations: 2 },
    { id: 'vpc-main',      group: 'vpc',    type: 'VPC',              region: 'us-east-1',  status: 'WARNING', rules: '3 public subnets exposed', violations: 1 },
    { id: 'subnet-pub-1a', group: 'subnet', type: 'Public Subnet',    region: 'us-east-1a', status: 'WARNING', rules: 'Auto-assign public IP on', violations: 1 },
    { id: 'subnet-pub-1b', group: 'subnet', type: 'Public Subnet',    region: 'us-east-1b', status: 'HEALTHY', rules: 'Clean', violations: 0 },
    { id: 'subnet-priv',   group: 'subnet', type: 'Private Subnet',   region: 'us-east-1b', status: 'HEALTHY', rules: 'Clean', violations: 0 },
    { id: 'alb-ext',       group: 'alb',    type: 'Load Balancer',    region: 'us-east-1',  status: 'HEALTHY', rules: 'HTTPS redirect enabled', violations: 0 },
    { id: 'ec2-web-1',     group: 'ec2',    type: 'EC2 Instance',     region: 'us-east-1a', status: 'DANGER',  rules: 'sg-0x3f2a1: port 22 open to 0.0.0.0/0', violations: 2 },
    { id: 'ec2-web-2',     group: 'ec2',    type: 'EC2 Instance',     region: 'us-east-1b', status: 'HEALTHY', rules: 'Clean', violations: 0 },
    { id: 'rds-primary',   group: 'ec2',    type: 'RDS (Primary)',    region: 'us-east-1b', status: 'HEALTHY', rules: 'Encrypted at rest', violations: 0 },
    { id: 'nat-gw',        group: 'alb',    type: 'NAT Gateway',      region: 'us-east-1a', status: 'HEALTHY', rules: 'Single AZ — HA risk', violations: 0 },
  ],
  edges: [
    { source: 'igw-prod-01',   target: 'vpc-main',      type: 'critical' },
    { source: 'vpc-main',      target: 'subnet-pub-1a', type: 'warning'  },
    { source: 'vpc-main',      target: 'subnet-pub-1b', type: 'normal'   },
    { source: 'vpc-main',      target: 'subnet-priv',   type: 'normal'   },
    { source: 'subnet-pub-1a', target: 'alb-ext',       type: 'normal'   },
    { source: 'alb-ext',       target: 'ec2-web-1',     type: 'critical' },
    { source: 'alb-ext',       target: 'ec2-web-2',     type: 'normal'   },
    { source: 'ec2-web-1',     target: 'rds-primary',   type: 'warning'  },
    { source: 'ec2-web-2',     target: 'rds-primary',   type: 'normal'   },
    { source: 'subnet-priv',   target: 'nat-gw',        type: 'normal'   },
    { source: 'nat-gw',        target: 'igw-prod-01',   type: 'normal'   },
  ]
};

const MOCK_FINDINGS = [
  { ruleId:'CIS-5.2', severity:'CRITICAL', title:'SSH (port 22) open to 0.0.0.0/0',        resource:'sg-0x3f2a1',      region:'us-east-1', remediation:'Restrict inbound port 22 to known bastion IPs or use AWS SSM' },
  { ruleId:'CIS-5.3', severity:'CRITICAL', title:'RDP (port 3389) open to internet',        resource:'nacl-prod-02',    region:'us-east-1', remediation:'Remove 0.0.0.0/0 from RDP ingress; use VPN or SSM' },
  { ruleId:'CIS-4.1', severity:'HIGH',     title:'HTTP listener without HTTPS redirect',    resource:'alb-ext-prod',    region:'us-east-1', remediation:'Add redirect rule on port 80 → force TLS 1.2+ on 443' },
  { ruleId:'CIS-2.3', severity:'HIGH',     title:'VPC Flow Logs not enabled',               resource:'vpc-main',        region:'us-east-1', remediation:'Enable VPC Flow Logs and deliver to CloudWatch or S3' },
  { ruleId:'CIS-2.7', severity:'MEDIUM',   title:'CloudTrail log validation disabled',      resource:'trail-prod',      region:'us-east-1', remediation:'Enable log file validation to detect tampering' },
  { ruleId:'CIS-1.4', severity:'MEDIUM',   title:'IAM root access keys exist',              resource:'iam-root',        region:'global',    remediation:'Delete root account access keys; use IAM roles' },
  { ruleId:'CIS-2.1', severity:'PASS',     title:'S3 bucket block public access enabled',  resource:'s3-logs-prod',    region:'us-east-1', remediation: null },
  { ruleId:'CIS-3.1', severity:'PASS',     title:'GuardDuty enabled in all regions',       resource:'guardduty-detector', region:'us-east-1', remediation: null },
];

const LIVE_EVENTS = [
  { severity:'CRITICAL', resource:'sg-0x3f2a1',      msg:'Port :22 EXPOSED to 0.0.0.0/0 — immediate action required' },
  { severity:'CRITICAL', resource:'nacl-prod-02',    msg:'RDP :3389 open to public internet' },
  { severity:'WARN',     resource:'vpc-main',        msg:'VPC Flow Logs are DISABLED' },
  { severity:'WARN',     resource:'trail-prod',      msg:'CloudTrail log validation is OFF' },
  { severity:'OK',       resource:'s3-logs-prod',    msg:'Public access block ACTIVE' },
  { severity:'OK',       resource:'guardduty',       msg:'Threat detection running in 4 regions' },
  { severity:'CRITICAL', resource:'iam-root',        msg:'Root account access keys detected!' },
  { severity:'OK',       resource:'ec2-web-2',       msg:'Security groups clean' },
];

const SCAN_PHASES = [
  { progress: 8,  phase:'booting',   msg:'// AWS SDK initialized — region: us-east-1 [OK]' },
  { progress: 20, phase:'crawling',  msg:'// Enumerating VPCs... found 1 VPC, 3 subnets' },
  { progress: 34, phase:'crawling',  msg:'// Discovered 2 EC2 instances, 1 RDS, 1 ALB, 1 NAT' },
  { progress: 48, phase:'analyzing', msg:'// Loading 142 CIS Benchmark rules...' },
  { progress: 60, phase:'analyzing', msg:'// Evaluating 47 security group ingress rules' },
  { progress: 72, phase:'auditing',  msg:'// [CRITICAL] CIS-5.2 — SSH open to 0.0.0.0/0 on sg-0x3f2a1' },
  { progress: 80, phase:'auditing',  msg:'// [CRITICAL] CIS-5.3 — RDP exposed on nacl-prod-02' },
  { progress: 88, phase:'auditing',  msg:'// [HIGH] CIS-4.1 — No HTTPS redirect on ALB listener' },
  { progress: 95, phase:'auditing',  msg:'// Checking IAM, CloudTrail, VPC Flow Logs...' },
  { progress:100, phase:'complete',  msg:'// Scan complete — 6 findings, CIS score: 74/100' },
];

const scans = new Map();

// ── API ────────────────────────────────────────────────────────────────────

app.get('/api/health', (_, res) => res.json({ status:'ok', uptime: process.uptime() }));
app.get('/api/topology', (_, res) => res.json(TOPOLOGY_DATA));

// Report endpoints — 'demo', 'latest', or a specific reportId all return mock data
const REPORT_PAYLOAD = {
  cisScore: 74,
  scannedAt: new Date().toISOString(),
  provider: 'aws',
  region: 'us-east-1',
  resourceCount: 10,
  findings: MOCK_FINDINGS,
  topology: TOPOLOGY_DATA
};

app.get('/api/report/demo',   (_, res) => res.json({ scanId: 'demo',   ...REPORT_PAYLOAD }));
app.get('/api/report/latest', (_, res) => res.json({ scanId: 'latest', ...REPORT_PAYLOAD }));
app.get('/api/report/:id',    (req, res) => res.json({ scanId: req.params.id, ...REPORT_PAYLOAD }));

// POST /api/scan — rate-limited
app.post('/api/scan', scanLimiter, (req, res) => {
  const { provider='aws', region='us-east-1' } = req.body || {};
  const jobId = 'scan_' + uuidv4().replace(/-/g,'').slice(0, 12);
  scans.set(jobId, { status:'queued', provider, region, progress:0, phase:'queued', message:'Job queued...', reportId:'rpt_'+jobId });
  runMockScan(jobId);
  res.json({ jobId, status:'queued' });
});

// GET /api/scan/:id/status — SSE
app.get('/api/scan/:id/status', (req, res) => {
  const scan = scans.get(req.params.id);
  if (!scan) return res.status(404).json({ error:'Scan not found' });

  res.setHeader('Content-Type',  'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection',    'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();

  const send = d => { res.write(`data: ${JSON.stringify(d)}\n\n`); if (res.flush) res.flush(); };
  send({ phase: scan.phase, progress: scan.progress, message: scan.message });

  const iv = setInterval(() => {
    const s = scans.get(req.params.id);
    if (!s) { clearInterval(iv); return res.end(); }
    if (s.status === 'in_progress') { send({ phase:s.phase, progress:s.progress, message:s.message }); }
    else if (s.status === 'completed') { send({ phase:'complete', progress:100, message:s.message, reportId:s.reportId }); clearInterval(iv); res.end(); }
    else if (s.status === 'failed')    { send({ phase:'failed',   progress:0,   message:'Scan failed.' }); clearInterval(iv); res.end(); }
  }, 700);

  req.on('close', () => clearInterval(iv));
});

// GET /api/events/live — SSE for threat ticker
app.get('/api/events/live', (req, res) => {
  res.setHeader('Content-Type',  'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection',    'keep-alive');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('X-Accel-Buffering', 'no');
  res.flushHeaders();

  const send = d => res.write(`event: finding\ndata: ${JSON.stringify(d)}\n\n`);

  // Send random events
  const iv = setInterval(() => {
    send(LIVE_EVENTS[Math.floor(Math.random() * LIVE_EVENTS.length)]);
  }, 4500);

  req.on('close', () => clearInterval(iv));
});

// Catch-all → serve index.html
app.get('*', (_, res) => res.sendFile(path.join(distPath, 'index.html')));

// ── Scan runner ────────────────────────────────────────────────────────────
function runMockScan(jobId) {
  const scan = scans.get(jobId);
  scan.status = 'in_progress';
  let i = 0;
  const step = () => {
    if (i >= SCAN_PHASES.length) {
      Object.assign(scan, { status:'completed', progress:100, phase:'complete', message:'// Scan complete — report generated' });
      return;
    }
    const p = SCAN_PHASES[i++];
    scan.progress = p.progress; scan.phase = p.phase; scan.message = p.msg;
    setTimeout(step, 850 + Math.random() * 900);
  };
  setTimeout(step, 700);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✓ CloudGuard running at http://localhost:${PORT}`);
  console.log(`  Frontend: ${distPath}`);
  console.log(`  API:      /api/* (rate-limited)`);
  console.log(`  SSE:      /api/scan/:id/status  |  /api/events/live`);
});
