import gsap from 'gsap';

const EVENTS = [
  { sev:'CRITICAL', msg:'sg-0x3f2a1 → Port :22 EXPOSED to 0.0.0.0/0'       },
  { sev:'CRITICAL', msg:'nacl-prod-02 → RDP :3389 open to internet'          },
  { sev:'CRITICAL', msg:'iam-root → Root access keys exist!'                 },
  { sev:'WARN',     msg:'vpc-main → VPC Flow Logs DISABLED'                  },
  { sev:'WARN',     msg:'trail-prod → CloudTrail log validation off'         },
  { sev:'WARN',     msg:'alb-ext-prod → HTTP without HTTPS redirect'         },
  { sev:'WARN',     msg:'nat-gw → Single AZ deployment detected'             },
  { sev:'OK',       msg:'vpc-main → 3 subnets scanned cleanly ✓'            },
  { sev:'OK',       msg:'s3-logs-prod → Public access BLOCKED ✓'            },
  { sev:'OK',       msg:'guardduty-detector → All regions active ✓'         },
  { sev:'OK',       msg:'ec2-web-2 → Security groups clean ✓'               },
  { sev:'OK',       msg:'rds-primary → Encrypted at rest ✓'                 },
];

export function initTicker() {
  const inner = document.getElementById('ticker-inner');
  if (!inner) return;

  function buildItem(ev) {
    const el = document.createElement('span');
    el.className = `ticker-item ticker-${ev.sev.toLowerCase()}`;
    const icon = ev.sev === 'CRITICAL' ? '🔴' : ev.sev === 'WARN' ? '🟡' : '🟢';
    el.innerHTML = `${icon} <strong>[${ev.sev}]</strong>&nbsp;${ev.msg}&ensp;<span class="ticker-sep">◆</span>&ensp;`;
    return el;
  }

  // Fill 3× for seamless loop
  [...EVENTS, ...EVENTS, ...EVENTS].forEach(ev => inner.appendChild(buildItem(ev)));

  // Clone for infinite loop
  const clone = inner.cloneNode(true);
  clone.id = 'ticker-inner-clone';
  inner.parentElement.appendChild(clone);

  // Wait one frame for layout
  requestAnimationFrame(() => {
    const tw = inner.scrollWidth;
    gsap.set(clone, { x: tw });

    gsap.to(inner, { x: -tw, duration: 38, ease:'none', repeat:-1 });
    gsap.to(clone, { x: 0, duration: 38, ease:'none', repeat:-1 });
  });

  // Flash on critical events (simulated live feed)
  setInterval(() => {
    const ev = EVENTS[Math.floor(Math.random() * EVENTS.length)];
    inner.appendChild(buildItem(ev));

    if (ev.sev === 'CRITICAL') {
      gsap.fromTo('.ticker-wrap',
        { boxShadow: '0 0 0px transparent' },
        { boxShadow: '0 0 28px rgba(255,69,96,0.5)', duration: 0.3, yoyo:true, repeat:1 }
      );
      window.SoundEngine?.criticalAlert();
    }
  }, 5000);

  // Pause on hover
  const wrap = document.querySelector('.ticker-wrap');
  if (wrap) {
    wrap.addEventListener('mouseenter', () => gsap.globalTimeline.timeScale(0));
    wrap.addEventListener('mouseleave', () => gsap.globalTimeline.timeScale(1));
  }
}
