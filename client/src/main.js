import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as d3 from 'd3';
import Lenis from 'lenis';
import { initThreeBackground } from './three-bg.js';
import { initTicker }          from './ticker.js';
import { initSoundEngine }     from './sound.js';
import { initCommandPalette }  from './command-palette.js';
import { initInteractions }    from './interactions.js';

gsap.registerPlugin(ScrollTrigger);

// ── State ──────────────────────────────────────────────────────────────────
let scanActive = false, topoInitialized = false, cachedTopology = null;
const API_BASE = window.location.protocol === 'file:' ? 'http://localhost:3000' : '';

// ── Reduce Motion ──────────────────────────────────────────────────────────
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReduced) gsap.globalTimeline.timeScale(10);

document.addEventListener('DOMContentLoaded', () => {

  // ── Lenis Smooth Scroll ──────────────────────────────────────────────────
  const lenis = new Lenis({
    duration: 1.4,
    easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(time => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  // ── Three.js 3D Background ──────────────────────────────────────────────
  try { initThreeBackground(); } catch(e) { console.warn('Three.js init failed:', e); }

  // ── Ticker + Sound + Palette + Interactions ─────────────────────────────
  initSoundEngine();
  initTicker();
  initCommandPalette();
  initInteractions();

  // ── Hero GLSL Shader Canvas ─────────────────────────────────────────────
  initHeroShader();

  // ── Custom Cursor ───────────────────────────────────────────────────────
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');
  if (cursor && ring) {
    const xTo   = gsap.quickTo(cursor, 'x', { duration:0.1,  ease:'power3' });
    const yTo   = gsap.quickTo(cursor, 'y', { duration:0.1,  ease:'power3' });
    const xRing = gsap.quickTo(ring,   'x', { duration:0.22, ease:'power3' });
    const yRing = gsap.quickTo(ring,   'y', { duration:0.22, ease:'power3' });
    window.addEventListener('mousemove', e => { xTo(e.clientX); yTo(e.clientY); xRing(e.clientX); yRing(e.clientY); });
  }

  window.setCursorHover = (hover, danger=false) => {
    if (!cursor || !ring) return;
    gsap.to(ring, { width:hover?54:36, height:hover?54:36, borderColor:danger?'#FF4560':'#00E5C3', duration:0.2 });
    gsap.to(cursor, { backgroundColor:danger?'#FF4560':'#00E5C3', scale:hover?0.4:1, duration:0.2 });
  };

  document.querySelectorAll('button, a, .feature-card').forEach(el => {
    el.addEventListener('mouseenter', () => window.setCursorHover(true, el.classList.contains('hover-danger')));
    el.addEventListener('mouseleave', () => window.setCursorHover(false));
  });

  // ── Scroll Progress ─────────────────────────────────────────────────────
  gsap.to('#scroll-progress', {
    width:'100%', ease:'none',
    scrollTrigger:{ trigger:document.body, start:'top top', end:'bottom bottom', scrub:0.1 }
  });

  // ── Magnetic Buttons ────────────────────────────────────────────────────
  document.querySelectorAll('.btn-magnetic').forEach(btn => {
    const inner = btn.querySelector('span');
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width/2;
      const y = e.clientY - rect.top  - rect.height/2;
      gsap.to(btn,   { x: x*0.32, y: y*0.32, duration:0.4, ease:'power2.out' });
      if (inner) gsap.to(inner, { x: x*0.12, y: y*0.12, duration:0.4, ease:'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn,   { x:0, y:0, duration:0.6, ease:'elastic.out(1,0.4)' });
      if (inner) gsap.to(inner, { x:0, y:0, duration:0.6, ease:'elastic.out(1,0.4)' });
    });
    btn.addEventListener('mousedown', () => gsap.to(btn, { scale:0.96, duration:0.1 }));
    btn.addEventListener('mouseup',   () => gsap.to(btn, { scale:1,    duration:0.4, ease:'elastic.out(1,0.4)' }));
  });

  // ── Kinetic Typography — Manual Char Split ──────────────────────────────
  function splitChars(selector) {
    const el = document.querySelector(selector);
    if (!el) return [];
    const chars = [];
    el.querySelectorAll('div').forEach(line => {
      const txt = line.textContent;
      line.innerHTML = '';
      txt.split('').forEach(ch => {
        const s = document.createElement('span');
        s.textContent = ch === ' ' ? '\u00A0' : ch;
        s.style.display = 'inline-block'; s.style.willChange = 'transform, opacity';
        line.appendChild(s); chars.push(s);
      });
    });
    return chars;
  }

  // ── Boot Sequence ────────────────────────────────────────────────────────
  document.body.style.overflow = 'hidden';

  const heroChars = splitChars('.hero-title');

  const intro = gsap.timeline({
    onComplete: () => {
      document.body.style.overflow = '';
      lenis.start();
      prefetchTopology();
      window.SoundEngine?.shieldChime();
    }
  });

  intro.fromTo('#scanline', { scaleX:0 }, { scaleX:1, duration:0.7, ease:'power2.inOut', transformOrigin:'left' });
  intro.fromTo('.boot-line', { opacity:0, x:-20 }, { opacity:1, x:0, stagger:0.25, duration:0.4 }, '-=0.15');
  intro.fromTo('.logo-char', { y:-80, rotateX:90, opacity:0 }, { y:0, rotateX:0, opacity:1, stagger:0.045, duration:0.45, ease:'back.out(1.4)' }, '-=0.1');
  intro.to('.boot-logo', { textShadow:'0 0 120px #00E5C3, 0 0 240px rgba(0,229,195,0.3)', duration:0.25, yoyo:true, repeat:1 });

  const prx = { val:0 };
  const bar = document.getElementById('boot-bar'), ctr = document.getElementById('boot-counter');
  intro.to(prx, { val:100, duration:1.4, ease:'power1.inOut', onUpdate:() => {
    if (bar) bar.style.width = prx.val + '%';
    if (ctr) ctr.textContent = Math.floor(prx.val) + '%';
  }});
  intro.fromTo('#boot-status', { opacity:0 }, { opacity:1, duration:0.4 });
  intro.to('#overlay-top',    { y:'-100%', duration:0.65, ease:'power3.inOut', delay:0.3 });
  intro.to('#overlay-bottom', { y:'100%',  duration:0.65, ease:'power3.inOut' }, '<');
  intro.to('#scanline, #boot-content', { opacity:0, duration:0.3 }, '<');
  intro.set('#overlay', { display:'none' });

  // Hero entrance — brand title (CLOUDGUARD letters) drop in with 3D rotation
  intro.to('#overlay-top, #overlay-bottom',    {}, '>') // marker
  // Animate each brand letter
  intro.fromTo('.bl',
    { y:-80, rotateX:95, opacity:0, scale:0.8 },
    { y:0, rotateX:0, opacity:1, scale:1,
      stagger:{ each:0.045, from:'start' },
      duration:0.55, ease:'back.out(1.5)' },
    '-=0.15'
  );
  // Brand accent letters get an extra glow flash
  intro.fromTo('.bl.accent',
    { textShadow:'0 0 0px rgba(0,229,195,0)' },
    { textShadow:'0 0 40px rgba(0,229,195,0.8)', duration:0.4, yoyo:true, repeat:1 },
    '-=0.2'
  );
  // Scan bar sweeps in beneath brand name
  intro.fromTo('#brand-scan', { width:'0%' }, { width:'100%', duration:0.9, ease:'power2.inOut' }, '-=0.1');
  // Tagline fades up
  intro.to('#brand-tagline', { opacity:1, y:0, duration:0.5, ease:'power2.out' }, '-=0.3');

  // Subtitle title entrance
  if (heroChars.length) {
    intro.fromTo(heroChars,
      { y:60, rotateX:60, opacity:0 },
      { y:0, rotateX:0, opacity:1, stagger:{ amount:0.5, from:'random' }, duration:0.45, ease:'back.out(1.2)' },
      '-=0.2'
    );
    // Chars scatter on scroll-out
    gsap.to(heroChars, {
      y: () => gsap.utils.random(-200, 200),
      x: () => gsap.utils.random(-200, 200),
      rotate: () => gsap.utils.random(-180, 180),
      opacity: 0,
      stagger: { amount:0.4, from:'random' },
      scrollTrigger: { trigger:'.hero-title', start:'bottom 25%', scrub:1.5 }
    });
  }
  intro.fromTo('.hero-sub',  { y:30, opacity:0 }, { y:0, opacity:1, duration:0.5 }, '-=0.3');
  intro.fromTo('.cta-row',   { y:20, opacity:0 }, { y:0, opacity:1, duration:0.4 }, '-=0.2');
  intro.fromTo('.threat-meter-section', { y:20, opacity:0 }, { y:0, opacity:1, duration:0.4 }, '-=0.2');
  intro.fromTo('.stat-strip', { y:20, opacity:0 }, { y:0, opacity:1, duration:0.4 }, '-=0.1');

  // Brand letters gently float after intro
  document.querySelectorAll('.bl').forEach((el, i) => {
    gsap.to(el, {
      y: i % 2 === 0 ? -6 : -4,
      duration: 2.2 + Math.random() * 1.5,
      yoyo: true, repeat: -1, ease: 'sine.inOut',
      delay: Math.random() * 2
    });
  });

  // Feature card mouse shimmer effect
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width * 100).toFixed(1);
      const y = ((e.clientY - r.top)  / r.height * 100).toFixed(1);
      card.style.setProperty('--mx', x + '%');
      card.style.setProperty('--my', y + '%');
    });
  });

  // Stat counters
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    const p = { val:0 };
    intro.to(p, { val:target, duration:1.5, ease:'power2.out',
      onUpdate: () => { el.textContent = Math.floor(p.val) + (target > 1000 ? '+' : ''); }
    }, '-=0.4');
  });

  // Floating cards parallax
  const floats = [
    { id:'#fn1', yAmp:18, dur:3.8, phase:0   },
    { id:'#fn2', yAmp:14, dur:4.4, phase:1.2 },
    { id:'#fn3', yAmp:20, dur:3.2, phase:0.7 },
    { id:'#fn4', yAmp:12, dur:5.0, phase:2.0 },
  ];
  intro.fromTo(floats.map(f => f.id).filter(id => document.querySelector(id)),
    { opacity:0, scale:0.85 }, { opacity:1, scale:1, stagger:0.1, duration:0.5, ease:'back.out(1.5)' }, '-=1'
  );
  floats.forEach(f => {
    if (!document.querySelector(f.id)) return;
    gsap.to(f.id, { y:`+=${f.yAmp}`, duration:f.dur, ease:'sine.inOut', yoyo:true, repeat:-1, delay:f.phase });
  });
  window.addEventListener('mousemove', e => {
    const mx = (e.clientX / window.innerWidth  - 0.5);
    const my = (e.clientY / window.innerHeight - 0.5);
    floats.forEach((f, i) => {
      if (!document.querySelector(f.id)) return;
      const d = (i+1) * 15;
      gsap.to(f.id, { x:mx*d, duration:1, ease:'power2.out', overwrite:'auto' });
    });
  });

  // ── Threat Meter Animation ──────────────────────────────────────────────
  function updateThreatMeter(cisScore = 74) {
    const outerCirc = 2 * Math.PI * 54;  // r=54 → ~339.3
    const midCirc   = 2 * Math.PI * 44;  // r=44 → ~276.5
    const innerCirc = 2 * Math.PI * 34;  // r=34 → ~213.6

    const outerOffset = outerCirc * (1 - cisScore / 100);
    const midOffset   = midCirc   * (1 - 0.957); // 136/142 rules passed
    const innerOffset = innerCirc * (1 - 2/8);   // 2 critical / 8 total

    const color = cisScore > 70 ? '#00E5C3' : cisScore > 40 ? '#FFD166' : '#FF4560';

    gsap.to('#meter-outer', { attr:{ strokeDashoffset: outerOffset }, stroke: color, duration:1.6, ease:'power3.out' });
    gsap.to('#meter-mid',   { attr:{ strokeDashoffset: midOffset   },                duration:1.4, ease:'power3.out', delay:0.15 });
    gsap.to('#meter-inner', { attr:{ strokeDashoffset: innerOffset },                duration:1.2, ease:'power3.out', delay:0.3  });

    const proxy = { val: 0 };
    gsap.to(proxy, { val:cisScore, duration:1.8, ease:'power2.out',
      onUpdate: () => { const el = document.getElementById('meter-score'); if (el) el.textContent = Math.floor(proxy.val) + '/100'; }
    });
  }

  ScrollTrigger.create({
    trigger:'#hero', start:'top center', once:true,
    onEnter: () => setTimeout(() => updateThreatMeter(74), 1800)
  });

  // ── Feature Cards ───────────────────────────────────────────────────────
  gsap.fromTo('.feature-card', { y:60, opacity:0 }, {
    y:0, opacity:1, stagger:0.15, ease:'power2.out',
    scrollTrigger:{ trigger:'#features', start:'top 75%', end:'bottom 45%', scrub:1 }
  });

  document.querySelectorAll('.feature-card').forEach(card => {
    const paths = card.querySelectorAll('.draw-path');
    paths.forEach(p => { try { const l=p.getTotalLength(); p.style.strokeDasharray=l; p.style.strokeDashoffset=l; } catch(_){} });
    card.addEventListener('mouseenter', () => {
      gsap.to(paths, { strokeDashoffset:0, duration:0.8, ease:'power2.out' });
      gsap.to(card, { y:-6, duration:0.3, ease:'power2.out' });
    });
    card.addEventListener('mouseleave', () => {
      paths.forEach(p => { try { p.style.strokeDashoffset = p.getTotalLength(); } catch(_){} });
      gsap.to(card, { y:0, duration:0.4, ease:'power2.out' });
    });
  });

  // ── D3 Topology (fetched from API, falls back to local) ─────────────────
  async function prefetchTopology() {
    try {
      const r = await fetch('/api/topology');
      if (r.ok) cachedTopology = await r.json();
    } catch(e) { console.warn('Topology prefetch failed') }
  }

  ScrollTrigger.create({
    trigger:'#topology', start:'top 65%', once:true,
    onEnter: () => {
      if (topoInitialized) return; topoInitialized = true;
      gsap.fromTo('#topo-container', { opacity:0, scale:0.96, y:20 }, { opacity:1, scale:1, y:0, duration:0.9, ease:'power2.out' });
      renderD3Graph(cachedTopology || getFallbackTopology());
    }
  });

  function getFallbackTopology() {
    return {
      nodes:[
        { id:'igw-prod-01',   group:'igw',    type:'Internet Gateway', region:'us-east-1',  status:'DANGER',  rules:'Exposes VPC to internet', violations:2 },
        { id:'vpc-main',      group:'vpc',    type:'VPC',              region:'us-east-1',  status:'WARNING', rules:'3 public subnets exposed', violations:1 },
        { id:'subnet-pub-1a', group:'subnet', type:'Public Subnet',    region:'us-east-1a', status:'WARNING', rules:'Auto-assign public IP on', violations:1 },
        { id:'subnet-pub-1b', group:'subnet', type:'Public Subnet',    region:'us-east-1b', status:'HEALTHY', rules:'Clean', violations:0 },
        { id:'subnet-priv',   group:'subnet', type:'Private Subnet',   region:'us-east-1b', status:'HEALTHY', rules:'Clean', violations:0 },
        { id:'alb-ext',       group:'alb',    type:'Load Balancer',    region:'us-east-1',  status:'HEALTHY', rules:'HTTPS redirect enabled', violations:0 },
        { id:'ec2-web-1',     group:'ec2',    type:'EC2 Instance',     region:'us-east-1a', status:'DANGER',  rules:'Port 22 exposed to 0.0.0.0/0', violations:2 },
        { id:'ec2-web-2',     group:'ec2',    type:'EC2 Instance',     region:'us-east-1b', status:'HEALTHY', rules:'Clean', violations:0 },
        { id:'rds-primary',   group:'ec2',    type:'RDS Primary',      region:'us-east-1b', status:'HEALTHY', rules:'Encrypted at rest', violations:0 },
        { id:'nat-gw',        group:'alb',    type:'NAT Gateway',      region:'us-east-1a', status:'HEALTHY', rules:'Single AZ — HA risk', violations:0 },
      ],
      edges:[
        { source:'igw-prod-01', target:'vpc-main',      type:'critical' },
        { source:'vpc-main',    target:'subnet-pub-1a', type:'warning'  },
        { source:'vpc-main',    target:'subnet-pub-1b', type:'normal'   },
        { source:'vpc-main',    target:'subnet-priv',   type:'normal'   },
        { source:'subnet-pub-1a',target:'alb-ext',      type:'normal'   },
        { source:'alb-ext',     target:'ec2-web-1',     type:'critical' },
        { source:'alb-ext',     target:'ec2-web-2',     type:'normal'   },
        { source:'ec2-web-1',   target:'rds-primary',   type:'warning'  },
        { source:'ec2-web-2',   target:'rds-primary',   type:'normal'   },
        { source:'subnet-priv', target:'nat-gw',        type:'normal'   },
        { source:'nat-gw',      target:'igw-prod-01',   type:'normal'   },
      ]
    };
  }

  function renderD3Graph(data) {
    const container = document.getElementById('d3-graph');
    if (!container) return;
    const W = container.clientWidth || 860, H = container.clientHeight || 560;
    const maxViol = Math.max(...data.nodes.map(n => n.violations || 0), 1);

    const nodes = data.nodes.map(n => ({ ...n, radius: nodeRadius(n.group) }));
    const edges = data.edges.map(e => ({ ...e }));

    const svg = d3.select('#d3-graph').append('svg').attr('width','100%').attr('height','100%');

    // Arrow markers
    const defs = svg.append('defs');
    ['normal','warning','critical'].forEach(t => {
      defs.append('marker').attr('id',`arr-${t}`).attr('viewBox','0 -4 8 8')
        .attr('refX',20).attr('refY',0).attr('markerWidth',6).attr('markerHeight',6).attr('orient','auto')
        .append('path').attr('d','M0,-4L8,0L0,4').attr('fill', edgeColor(t));
    });

    // Filters: glow
    const filter = defs.append('filter').attr('id','glow').attr('x','-50%').attr('y','-50%').attr('width','200%').attr('height','200%');
    filter.append('feGaussianBlur').attr('in','SourceGraphic').attr('stdDeviation','4').attr('result','blur');
    filter.append('feMerge').selectAll('feMergeNode').data(['blur','SourceGraphic']).enter().append('feMergeNode').attr('in', d=>d);

    const g = svg.append('g');
    svg.call(d3.zoom().scaleExtent([0.25,3]).on('zoom', ev => g.attr('transform', ev.transform)));

    const sim = d3.forceSimulation(nodes)
      .force('link',    d3.forceLink(edges).id(d=>d.id).distance(d => d.type==='critical' ? 140 : 115))
      .force('charge',  d3.forceManyBody().strength(-420))
      .force('center',  d3.forceCenter(W/2, H/2))
      .force('collide', d3.forceCollide().radius(d => d.radius + 16))
      .force('radial',  d3.forceRadial(d => d.group==='vpc' ? 0 : 200, W/2, H/2).strength(0.05))
      .alphaDecay(0.018);

    // Edges
    const linkSel = g.append('g').selectAll('line').data(edges).enter().append('line')
      .attr('stroke', d => edgeColor(d.type))
      .attr('stroke-width', d => d.type==='critical' ? 2.5 : 1.4)
      .attr('stroke-opacity', 0.75)
      .attr('stroke-dasharray', d => d.type==='critical' ? '8 4' : 'none')
      .attr('marker-end', d => `url(#arr-${d.type})`);

    // Animate critical edge dashes
    linkSel.filter(d => d.type === 'critical').each(function() {
      gsap.to(this, { attr:{ strokeDashoffset: -24 }, duration:0.7, ease:'none', repeat:-1 });
    });

    // Node groups
    const drag = d3.drag()
      .on('start', (ev,d) => { if (!ev.active) sim.alphaTarget(0.3).restart(); d.fx=d.x; d.fy=d.y; })
      .on('drag',  (ev,d) => { d.fx=ev.x; d.fy=ev.y; })
      .on('end',   (ev,d) => { if (!ev.active) sim.alphaTarget(0); d.fx=null; d.fy=null; });

    const nodeSel = g.append('g').selectAll('g').data(nodes).enter().append('g')
      .attr('class', d => `topo-node topo-node-${d.group}`)
      .style('opacity', 0).style('cursor','pointer').style('will-change','transform')
      .call(drag);

    // VPC circle
    nodeSel.filter(d => d.group==='vpc').append('circle')
      .attr('r', d => d.radius)
      .attr('fill','rgba(0,229,195,0.06)').attr('stroke','#00E5C3')
      .attr('stroke-width',2).attr('stroke-dasharray','6 4');

    // IGW — danger ring
    const igw = nodeSel.filter(d => d.group==='igw');
    igw.append('circle').attr('r', d=>d.radius).attr('fill','rgba(255,69,96,0.15)').attr('stroke','#FF4560').attr('stroke-width',2)
      .style('filter','url(#glow)');
    igw.append('circle').attr('class','igw-pulse').attr('fill','none').attr('stroke','#FF4560').attr('stroke-width',1.5)
      .call(function pulse(sel) {
        sel.attr('r',12).attr('stroke-opacity',0.9)
          .transition().duration(1300).ease(d3.easeLinear)
          .attr('r',28).attr('stroke-opacity',0).on('end', function(){ d3.select(this).call(pulse); });
      });

    // Subnet rects
    nodeSel.filter(d => d.group==='subnet').append('rect')
      .attr('x', d=>-d.radius).attr('y', d=>-d.radius)
      .attr('width', d=>d.radius*2).attr('height', d=>d.radius*2).attr('rx',5)
      .attr('fill', d => d.status==='WARNING'?'rgba(255,209,102,0.1)':'rgba(0,229,195,0.08)')
      .attr('stroke', d=>d.status==='WARNING'?'#FFD166':'#00E5C3').attr('stroke-width',1.5);

    // ALB/NAT diamonds
    nodeSel.filter(d => d.group==='alb').append('rect')
      .attr('x', d=>-d.radius*0.9).attr('y', d=>-d.radius*0.9)
      .attr('width', d=>d.radius*1.8).attr('height', d=>d.radius*1.8).attr('rx',3)
      .attr('fill','rgba(15,244,255,0.1)').attr('stroke','#0FF4FF').attr('stroke-width',1.5)
      .attr('transform','rotate(45)');

    // EC2/RDS circles — depth glow by violations
    nodeSel.filter(d => d.group==='ec2').append('circle')
      .attr('r', d=>d.radius)
      .attr('fill', d=>d.status==='DANGER'?'rgba(255,69,96,0.2)':'rgba(255,255,255,0.08)')
      .attr('stroke', d=>d.status==='DANGER'?'#FF4560':'rgba(255,255,255,0.35)')
      .attr('stroke-width',1.5)
      .style('filter', d => {
        const v = (d.violations||0)/maxViol;
        return `drop-shadow(0 0 ${4 + v*18}px ${d.status==='DANGER'?'#FF4560':'#00E5C3'})`;
      });

    // Status dots
    nodeSel.append('circle').attr('cx', d=>d.radius-3).attr('cy', d=>-d.radius+3).attr('r',4)
      .attr('fill', d=>d.status==='DANGER'?'#FF4560':d.status==='WARNING'?'#FFD166':'#00E5C3');

    // Labels
    nodeSel.append('text').text(d=>d.id)
      .attr('x', d=>d.radius+6).attr('y',4)
      .attr('fill','rgba(255,255,255,0.5)').attr('font-family','JetBrains Mono, monospace').attr('font-size','9px');

    // Tooltip + Detail Panel
    const tooltip = document.getElementById('d3-tooltip');
    const detailPanel = document.getElementById('detail-panel');

    nodeSel.on('mouseover', (ev,d) => {
      if (tooltip) {
        tooltip.querySelector('.topo-tt-id').textContent   = d.id;
        tooltip.querySelector('.topo-tt-type').textContent  = d.type;
        tooltip.querySelector('.topo-tt-region').textContent = d.region;
        const st = tooltip.querySelector('.topo-tt-status');
        st.textContent = d.status;
        st.className   = `topo-tt-status font-bold ${d.status==='DANGER'?'text-red':d.status==='WARNING'?'text-gold':'text-teal'}`;
        const ru = tooltip.querySelector('.topo-tt-rules');
        if (ru) ru.textContent = d.rules || '';
        gsap.to(tooltip, { opacity:1, duration:0.15 });
      }
      window.setCursorHover(true, d.status==='DANGER');
    })
    .on('mousemove', ev => {
      if (!tooltip) return;
      const r = container.getBoundingClientRect();
      gsap.set(tooltip, { left: ev.pageX - r.left + 14, top: ev.pageY - r.top - 10 });
    })
    .on('mouseout', () => {
      if (tooltip) gsap.to(tooltip, { opacity:0, duration:0.15 });
      window.setCursorHover(false);
    })
    .on('click', (ev, d) => {
      // Open detail panel
      if (!detailPanel) return;
      detailPanel.querySelector('.detail-id').textContent    = d.id;
      detailPanel.querySelector('.detail-type').textContent  = d.type;
      detailPanel.querySelector('.detail-region').textContent = d.region;
      detailPanel.querySelector('.detail-rules').textContent  = d.rules || '—';
      detailPanel.querySelector('.detail-group').textContent  = d.group;
      const st = detailPanel.querySelector('.detail-status');
      st.textContent = d.status;
      st.className   = `detail-status font-bold ${d.status==='DANGER'?'text-red':d.status==='WARNING'?'text-gold':'text-teal'}`;
      gsap.fromTo(detailPanel, { x:80, opacity:0 }, { x:0, opacity:1, duration:0.4, ease:'power3.out' });
      window.SoundEngine?.click();
    });

    document.getElementById('detail-close')?.addEventListener('click', () => {
      gsap.to(detailPanel, { x:80, opacity:0, duration:0.3, ease:'power3.in' });
    });

    sim.on('tick', () => {
      linkSel.attr('x1',d=>d.source.x).attr('y1',d=>d.source.y)
             .attr('x2',d=>d.target.x).attr('y2',d=>d.target.y);
      nodeSel.attr('transform', d=>`translate(${d.x},${d.y})`);
    });

    sim.on('end', () => nodeSel.transition().duration(400).delay((_,i)=>i*35).style('opacity',1));
    setTimeout(() => gsap.to('.topo-node', { opacity:1, stagger:0.04, duration:0.35 }), 1400);
  }

  function nodeRadius(g) { return { vpc:36, subnet:22, igw:12, alb:14, ec2:10 }[g] || 10; }
  function edgeColor(t)  { return t==='critical'?'#FF4560':t==='warning'?'#FFD166':'rgba(0,229,195,0.4)'; }

  // ── Audit Filters ────────────────────────────────────────────────────────
  document.querySelectorAll('.audit-filter').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.audit-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      document.querySelectorAll('.audit-row').forEach(r => {
        r.style.display = (f==='ALL' || r.dataset.severity===f) ? '' : 'none';
      });
      window.SoundEngine?.click();
    });
  });

  // ── Audit Table ─────────────────────────────────────────────────────────
  function renderAuditRow(f, animate=false) {
    const tbody = document.getElementById('audit-table-body');
    if (!tbody) return;
    const placeholder = document.getElementById('audit-placeholder');
    if (placeholder) placeholder.remove();

    const sevColors = { CRITICAL:'text-red', HIGH:'text-gold', MEDIUM:'text-gold', LOW:'text-cyan', PASS:'text-teal' };
    const barW      = { CRITICAL:'w-full', HIGH:'w-4/5', MEDIUM:'w-3/5', LOW:'w-1/3', PASS:'w-full opacity-25' };
    const barBg     = { CRITICAL:'bg-red',  HIGH:'bg-gold', MEDIUM:'bg-gold', LOW:'bg-cyan', PASS:'bg-teal' };

    const tr = document.createElement('tr');
    tr.className = 'audit-row border-b border-white/5 hover:bg-white/3 transition-colors group cursor-none';
    tr.dataset.severity = f.severity;
    tr.innerHTML = `
      <td class="py-4 px-4"><div class="w-16 h-1.5 bg-void rounded overflow-hidden"><div class="sev-bar h-full ${barBg[f.severity]} ${barW[f.severity]} origin-left"></div></div></td>
      <td class="py-4 px-4 font-mono text-white/70 group-hover:text-white transition-colors text-sm">${f.ruleId}</td>
      <td class="py-4 px-4 text-white/60 text-sm">${f.title}</td>
      <td class="py-4 px-4 font-mono text-teal/80 text-sm copy-resource" title="Click to copy">${f.resource}</td>
      <td class="py-4 px-4 text-right font-mono text-sm ${sevColors[f.severity]} ${f.severity==='CRITICAL'?'animate-pulse':''}">${f.severity}</td>`;

    tr.querySelector('.copy-resource')?.addEventListener('click', e => {
      navigator.clipboard.writeText(e.target.textContent).catch(()=>{});
      gsap.fromTo(e.target, { color:'#00E5C3' }, { color:'', duration:0.8 });
      window.SoundEngine?.click();
    });
    tr.addEventListener('mouseenter', () => window.setCursorHover(true, f.severity==='CRITICAL'));
    tr.addEventListener('mouseleave', () => window.setCursorHover(false));

    tbody.appendChild(tr);
    if (animate) {
      gsap.fromTo(tr, { x:-40, opacity:0 }, { x:0, opacity:1, duration:0.45, ease:'power2.out' });
      gsap.fromTo(tr.querySelector('.sev-bar'), { scaleX:0 }, { scaleX:1, duration:0.5, ease:'power3.out', transformOrigin:'left' });
      if (f.severity === 'CRITICAL') window.SoundEngine?.scanBeep();
    }
  }

  // ── Ending Section ───────────────────────────────────────────────────────
  (() => {
    const tl = gsap.timeline({ paused:true });
    tl.fromTo('.pulse-ring', { scale:0, opacity:0.25 }, { scale:3, opacity:0, duration:2.5, stagger:0.4, repeat:-1, ease:'power1.out' });

    const sp = document.getElementById('shield-path');
    if (sp) {
      try { const l=sp.getTotalLength(); sp.style.strokeDasharray=l; sp.style.strokeDashoffset=l; } catch(_){}
      tl.to(sp, { strokeDashoffset:0, duration:1.8, ease:'power2.inOut' }, 0.2);
    }
    tl.fromTo('#shield-check', { opacity:0, scale:0 }, { opacity:1, scale:1, duration:0.5, ease:'back.out(2)', transformOrigin:'center' }, '-=0.3');
    tl.fromTo('.end-line-1', { y:40, opacity:0 }, { y:0, opacity:1, duration:0.6 }, '-=0.2');
    tl.fromTo('.end-line-2', { y:40, opacity:0 }, { y:0, opacity:1, duration:0.6 }, '-=0.35');
    tl.fromTo('#end-scanline', { scaleX:0 }, { scaleX:1, duration:1.2, ease:'power2.inOut', transformOrigin:'left' }, '-=0.4');
    tl.fromTo('.end-sub', { opacity:0 }, { opacity:1, duration:0.5 }, '-=0.7');
    tl.to('#end-btn', { boxShadow:'0 0 60px rgba(0,229,195,0.6)', duration:1.2, yoyo:true, repeat:-1, ease:'sine.inOut' });

    ScrollTrigger.create({
      trigger:'#ending', start:'top 62%', once:true,
      onEnter: () => { tl.play(); window.SoundEngine?.shieldChime(); }
    });
  })();

  // ── Scan Button (real API) ───────────────────────────────────────────────
  const runScanBtn  = document.getElementById('run-scan-btn');
  const scanBox     = document.getElementById('scan-progress-container');
  const scanBarEl   = document.getElementById('scan-bar');
  const scanPctEl   = document.getElementById('scan-pct');
  const scanPhaseEl = document.getElementById('scan-phase');
  const scanMsgEl   = document.getElementById('scan-msg');

  // Initialise scan box with GSAP (no CSS transform conflicts)
  if (scanBox) gsap.set(scanBox, { xPercent:-50, y:120, opacity:0, pointerEvents:'none' });

  const showScanBox = () =>
    gsap.to(scanBox, { y:0, opacity:1, pointerEvents:'auto', duration:0.55, ease:'back.out(1.5)' });
  const hideScanBox = (d=2.5) =>
    gsap.to(scanBox, { y:120, opacity:0, pointerEvents:'none', duration:0.4, delay:d });

  function updateScan(progress, isDanger=false) {
    if (scanBarEl) gsap.to(scanBarEl, { width:progress+'%', duration:0.4, backgroundColor:isDanger?'#FF4560':'#00E5C3' });
    if (scanPctEl) scanPctEl.textContent = progress + '%';
  }

  runScanBtn?.addEventListener('click', async () => {
    if (scanActive) return; scanActive = true;
    gsap.to(runScanBtn, { opacity:0.5, scale:0.97, duration:0.2 });
    runScanBtn.disabled = true;

    showScanBox();
    if (scanPhaseEl) { scanPhaseEl.textContent = '// STARTING'; scanPhaseEl.style.color = '#00E5C3'; }
    if (scanMsgEl)   scanMsgEl.textContent   = 'Connecting to CloudGuard API...';
    updateScan(0);
    window.SoundEngine?.bootHum();

    try {
      const res = await fetch(`${API_BASE}/api/scan`, {
        method:'POST', headers:{'Content-Type':'application/json'},
        body: JSON.stringify({ provider:'aws', region:'us-east-1' })
      });
      if (!res.ok) throw new Error(`API ${res.status}`);
      const { jobId } = await res.json();

      await new Promise((resolve, reject) => {
        const es = new EventSource(`${API_BASE}/api/scan/${jobId}/status`);
        let rid = null;

        es.onmessage = async ev => {
          const { phase, progress, message, reportId } = JSON.parse(ev.data);
          const isDanger = message?.includes('CRITICAL') || message?.includes('WARNING');
          updateScan(progress, isDanger);
          if (scanPhaseEl) { scanPhaseEl.textContent = '// '+phase.toUpperCase(); scanPhaseEl.style.color = isDanger?'#FF4560':'#00E5C3'; }
          if (scanMsgEl)   scanMsgEl.textContent = message;
          if (reportId) rid = reportId;
          if (isDanger) window.SoundEngine?.criticalAlert();

          if (phase === 'complete') {
            es.close();
            if (rid) try { await loadReport(rid); } catch(e) { console.warn(e); }
            hideScanBox(2);
            updateThreatMeter(74);
            window.SoundEngine?.shieldChime();
            resolve();
          }
        };
        es.onerror = () => { es.close(); if (scanPhaseEl) scanPhaseEl.textContent='// ERROR'; hideScanBox(3); reject(); };
      });
    } catch(err) {
      if (scanPhaseEl) { scanPhaseEl.textContent='// ERROR'; scanPhaseEl.style.color='#FF4560'; }
      if (scanMsgEl)   scanMsgEl.textContent = err.message;
      hideScanBox(3);
    } finally {
      scanActive = false;
      gsap.to(runScanBtn, { opacity:1, scale:1, duration:0.3 });
      runScanBtn.disabled = false;
    }
  });

  async function loadReport(reportId) {
    const res = await fetch(`${API_BASE}/api/report/${reportId}`);
    if (!res.ok) throw new Error('Report fetch failed');
    const { findings, cisScore } = await res.json();
    const tbody = document.getElementById('audit-table-body');
    if (tbody) tbody.innerHTML = '';
    findings.forEach((f,i) => setTimeout(() => renderAuditRow(f, true), i * 95));
    const scoreEl = document.getElementById('cis-score');
    if (scoreEl && cisScore) {
      const p={val:0};
      gsap.to(p, { val:cisScore, duration:1.2, ease:'power2.out', onUpdate(){ scoreEl.textContent = Math.floor(p.val)+'/100'; }});
    }
    setTimeout(() => document.getElementById('audit')?.scrollIntoView({behavior:'smooth', block:'start'}), findings.length*95 + 400);
  }

  document.getElementById('demo-report-btn')?.addEventListener('click', async () => {
    try {
      const res = await fetch(`${API_BASE}/api/report/demo`);
      if (!res.ok) throw new Error('unavailable');
      const { findings, cisScore } = await res.json();
      const tbody = document.getElementById('audit-table-body');
      if (tbody) tbody.innerHTML = '';
      findings.forEach((f,i) => setTimeout(() => renderAuditRow(f, true), i*80));
      const scoreEl = document.getElementById('cis-score');
      if (scoreEl && cisScore) {
        const p={val:0};
        gsap.to(p, { val:cisScore, duration:1.2, ease:'power2.out', onUpdate(){ scoreEl.textContent=Math.floor(p.val)+'/100';}});
      }
      updateThreatMeter(cisScore || 74);
      setTimeout(() => document.getElementById('audit')?.scrollIntoView({behavior:'smooth', block:'start'}), findings.length*80+400);
    } catch(e) { console.warn('Demo report:', e.message); }
  });

  // ── Feature Card Click Handlers ──────────────────────────────────────────
  document.querySelectorAll('.feature-card[data-action]').forEach(card => {
    card.addEventListener('click', () => {
      const action = card.dataset.action;
      window.SoundEngine?.click();
      if (action === 'topology') {
        document.getElementById('topology')?.scrollIntoView({behavior:'smooth', block:'start'});
      } else if (action === 'scan') {
        document.getElementById('run-scan-btn')?.click();
      } else if (action === 'audit') {
        const tbody = document.getElementById('audit-table-body');
        // Load demo data if table is empty
        if (tbody && !tbody.querySelector('.audit-row')) {
          document.getElementById('demo-report-btn')?.click();
        } else {
          document.getElementById('audit')?.scrollIntoView({behavior:'smooth', block:'start'});
        }
      }
    });
  });

  // Load demo audit data automatically after boot (so table is never empty)
  // This runs silently — user sees data when they scroll down
  setTimeout(async () => {
    try {
      const res = await fetch('/api/report/demo');
      if (!res.ok) return;
      const { findings, cisScore } = await res.json();
      const tbody = document.getElementById('audit-table-body');
      if (tbody && !tbody.querySelector('.audit-row')) {
        findings.forEach((f,i) => setTimeout(() => renderAuditRow(f, false), i*30));
        const scoreEl = document.getElementById('cis-score');
        if (scoreEl && cisScore) scoreEl.textContent = cisScore + '/100';
      }
    } catch(e) {}
  }, 5500);

  // ── Deploy CloudGuard Modal ──────────────────────────────────────────────
  const deployModal  = document.getElementById('deploy-modal');
  const deployBox    = document.getElementById('deploy-box');
  const deployTerm   = document.getElementById('deploy-terminal');
  const deployStatus = document.getElementById('deploy-status');
  const deployStText = document.getElementById('deploy-status-text');
  const deployUrl    = document.getElementById('deploy-url');
  const deployCopy   = document.getElementById('deploy-copy-btn');

  const DEPLOY_STEPS = [
    { t:0,    cls:'dim',    msg:'cloudguard-deploy v4.2.1 — production build' },
    { t:400,  cls:'dim',    msg:'────────────────────────────────────────────' },
    { t:700,  cls:'normal', msg:'$ git status' },
    { t:1100, cls:'ok',     msg:'  On branch main — nothing to commit, working tree clean ✓' },
    { t:1500, cls:'normal', msg:'$ npm run build --prefix ./client' },
    { t:2200, cls:'ok',     msg:'  vite v5.4.21 building for production...' },
    { t:2800, cls:'ok',     msg:'  ✓ 590 modules transformed.' },
    { t:3200, cls:'ok',     msg:'  dist/assets/index.js   756.90 kB │ gzip: 215.50 kB' },
    { t:3600, cls:'ok',     msg:'  ✓ built in 3.99s' },
    { t:4100, cls:'normal', msg:'$ node server/app.js --env production' },
    { t:4600, cls:'ok',     msg:'  ✓ Express server listening on port 3000' },
    { t:5000, cls:'ok',     msg:'  ✓ Static assets served from /client/dist' },
    { t:5400, cls:'normal', msg:'$ npx localtunnel --port 3000 --subdomain cloudguard-v4' },
    { t:6200, cls:'ok',     msg:'  ✓ Tunnel established — keepalive active' },
    { t:6800, cls:'ok',     msg:'  ✓ bypass-tunnel-reminder header applied' },
    { t:7200, cls:'warn',   msg:'  ⚠ CIS Score: 74/100 — 2 critical findings need remediation' },
    { t:7800, cls:'dim',    msg:'────────────────────────────────────────────' },
    { t:8200, cls:'ok',     msg:'  ✓ CloudGuard deployed successfully!' },
    { t:8700, cls:'ok',     msg:'  ✓ Public URL → https://cloudguard-v4.loca.lt', final:true },
  ];

  function openDeployModal() {
    if (!deployModal) return;
    deployModal.style.display = 'flex';
    gsap.fromTo(deployModal, { opacity:0 }, { opacity:1, duration:0.2 });
    gsap.fromTo(deployBox, { y:30, scale:0.97 }, { y:0, scale:1, duration:0.3, ease:'power3.out' });
    if (deployTerm) deployTerm.innerHTML = '';
    if (deployUrl)  deployUrl.style.display  = 'none';
    if (deployCopy) deployCopy.style.display = 'none';
    if (deployStatus) deployStatus.classList.remove('live');
    if (deployStText) deployStText.textContent = 'Initializing...';
    window.SoundEngine?.bootHum();

    DEPLOY_STEPS.forEach(step => {
      setTimeout(() => {
        if (!deployTerm) return;
        const line = document.createElement('div');
        line.className = `deploy-line ${step.cls}`;
        line.textContent = step.msg;
        deployTerm.appendChild(line);
        deployTerm.scrollTop = deployTerm.scrollHeight;
        if (deployStText) deployStText.textContent = step.msg.replace(/[$>✓⚠]/g,'').trim();

        if (step.final) {
          if (deployStatus) deployStatus.classList.add('live');
          if (deployStText) deployStText.textContent = 'Live & Running';
          if (deployUrl)  { deployUrl.style.display  = 'block'; deployUrl.textContent = window.location.origin || 'https://cloudguard-v4.loca.lt'; }
          if (deployCopy) deployCopy.style.display = 'inline-block';
          window.SoundEngine?.shieldChime();
          gsap.fromTo(deployBox, { boxShadow:'0 0 0 rgba(0,229,195,0)' }, { boxShadow:'0 0 80px rgba(0,229,195,0.25)', duration:0.8, yoyo:true, repeat:1 });
        }
      }, step.t);
    });
  }

  document.getElementById('end-btn')?.addEventListener('click', openDeployModal);
  document.getElementById('deploy-close')?.addEventListener('click', () => {
    gsap.to(deployModal, { opacity:0, duration:0.18, onComplete: () => { deployModal.style.display='none'; }});
  });
  deployCopy?.addEventListener('click', () => {
    navigator.clipboard.writeText(deployUrl?.textContent || '').catch(()=>{});
    const orig = deployCopy.textContent;
    deployCopy.textContent = 'COPIED ✓';
    setTimeout(() => { deployCopy.textContent = orig; }, 2000);
    window.SoundEngine?.click();
  });
  deployModal?.addEventListener('click', e => {
    if (e.target === deployModal) gsap.to(deployModal, { opacity:0, duration:0.18, onComplete:()=>{ deployModal.style.display='none'; }});
  });

}); // end DOMContentLoaded

// ── WebGL Hero Shader ──────────────────────────────────────────────────────
function initHeroShader() {
  const canvas = document.getElementById('shader-canvas');
  if (!canvas) return;
  const gl = canvas.getContext('webgl');
  if (!gl) return;

  const resize = () => {
    canvas.width  = canvas.parentElement?.offsetWidth  || window.innerWidth;
    canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight;
    gl.viewport(0, 0, canvas.width, canvas.height);
  };
  resize();
  window.addEventListener('resize', resize);

  const vert = `attribute vec2 a_pos; void main(){ gl_Position=vec4(a_pos,0,1); }`;
  const frag = `
    precision mediump float;
    uniform float uTime;
    uniform vec2  uRes;
    uniform vec2  uMouse;
    float hexGrid(vec2 uv){
      vec2 r=vec2(1.0,1.732),h=r*0.5;
      vec2 a=mod(uv,r)-h, b=mod(uv-h,r)-h;
      return min(length(a),length(b));
    }
    void main(){
      vec2 uv=gl_FragCoord.xy/uRes;
      vec2 mu=uMouse/uRes;
      float hex=smoothstep(0.0,0.08,hexGrid(uv*18.0));
      float plasma=sin(uv.x*8.0+uTime)*cos(uv.y*6.0+uTime*0.7)*0.5+0.5;
      float dist=distance(uv,mu);
      float ripple=sin(dist*42.0-uTime*3.2)*exp(-dist*6.0);
      vec3 teal=vec3(0.0,0.898,0.765);
      vec3 dark=vec3(0.008,0.039,0.059);
      vec3 col=mix(dark,teal,(plasma+ripple*0.6)*(1.0-hex)*0.14);
      gl_FragColor=vec4(col,1.0);
    }`;

  const compileShader = (type, src) => {
    const s = gl.createShader(type); gl.shaderSource(s,src); gl.compileShader(s); return s;
  };
  const prog = gl.createProgram();
  gl.attachShader(prog, compileShader(gl.VERTEX_SHADER, vert));
  gl.attachShader(prog, compileShader(gl.FRAGMENT_SHADER, frag));
  gl.linkProgram(prog); gl.useProgram(prog);

  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog,'a_pos');
  gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

  const uTime  = gl.getUniformLocation(prog,'uTime');
  const uRes   = gl.getUniformLocation(prog,'uRes');
  const uMouse = gl.getUniformLocation(prog,'uMouse');
  let mx=0, my=0;
  document.addEventListener('mousemove', e => { mx=e.clientX; my=canvas.height-e.clientY; });

  const t0 = performance.now();
  const loop = () => {
    gl.uniform1f(uTime, (performance.now()-t0)/1000);
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.uniform2f(uMouse, mx, my);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    requestAnimationFrame(loop);
  };
  loop();
}
