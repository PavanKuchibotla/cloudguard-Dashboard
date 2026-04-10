import gsap from 'gsap';

const COMMANDS = [
  { icon:'▶', label:'Scan us-east-1',       desc:'Run security audit on US East', key:'scan-east',  action: () => document.getElementById('run-scan-btn')?.click()                              },
  { icon:'▶', label:'Scan eu-west-1',       desc:'Run security audit on EU West', key:'scan-eu',    action: () => document.getElementById('run-scan-btn')?.click()                              },
  { icon:'📋', label:'View Demo Report',     desc:'Load latest audit findings',    key:'demo',       action: () => document.getElementById('demo-report-btn')?.click()                           },
  { icon:'🔴', label:'Filter CRITICAL',      desc:'Show only critical findings',   key:'filt-crit',  action: () => filterAudit('CRITICAL')                                                        },
  { icon:'🟡', label:'Filter HIGH',          desc:'Show high severity findings',   key:'filt-high',  action: () => filterAudit('HIGH')                                                            },
  { icon:'🟢', label:'Show All Findings',    desc:'Clear active filters',          key:'filt-all',   action: () => filterAudit('ALL')                                                             },
  { icon:'🗺', label:'Jump to Topology',     desc:'Scroll to network map',         key:'topo',       action: () => document.getElementById('topology')?.scrollIntoView({behavior:'smooth'})      },
  { icon:'📊', label:'Jump to Audit Table',  desc:'Scroll to CIS findings table',  key:'audit',      action: () => document.getElementById('audit')?.scrollIntoView({behavior:'smooth'})         },
  { icon:'🏠', label:'Back to Top',          desc:'Return to hero section',        key:'top',        action: () => window.scrollTo({top:0,behavior:'smooth'})                                     },
  { icon:'🔊', label:'Toggle Sound',         desc:'Enable / disable audio',        key:'sound',      action: () => document.getElementById('sound-toggle')?.click()                              },
  { icon:'🌑', label:'Scroll to Ending',     desc:'Jump to ending scene',          key:'end',        action: () => document.getElementById('ending')?.scrollIntoView({behavior:'smooth'})        },
  { icon:'⬇', label:'Export PDF',           desc:'Print current report as PDF',   key:'export',     action: () => window.print()                                                                 },
];

function filterAudit(severity) {
  document.getElementById('audit')?.scrollIntoView({behavior:'smooth'});
  setTimeout(() => {
    document.querySelectorAll('.audit-row').forEach(r => {
      r.style.display = (severity === 'ALL' || r.dataset.severity === severity) ? '' : 'none';
    });
    // Sync filter buttons
    document.querySelectorAll('.audit-filter').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === severity);
    });
  }, 500);
}

export function initCommandPalette() {
  const palette  = document.getElementById('cmd-palette');
  const cmdBox   = document.getElementById('cmd-box');
  const input    = document.getElementById('cmd-input');
  const results  = document.getElementById('cmd-results');
  if (!palette || !input || !results) return;

  let isOpen = false, selIdx = 0, filtered = [...COMMANDS];

  const open = () => {
    if (isOpen) return; isOpen = true;
    palette.style.display = 'flex';
    gsap.fromTo(palette, { opacity:0 }, { opacity:1, duration:0.15 });
    gsap.fromTo(cmdBox, { y:-14, scale:0.96 }, { y:0, scale:1, duration:0.22, ease:'power3.out' });
    input.value = '';
    render(COMMANDS);
    setTimeout(() => input.focus(), 30);
    window.SoundEngine?.click();
  };

  const close = () => {
    if (!isOpen) return;
    gsap.to(palette, { opacity:0, duration:0.12, onComplete: () => {
      palette.style.display = 'none'; isOpen = false;
    }});
  };

  function render(cmds) {
    results.innerHTML = ''; selIdx = 0; filtered = cmds;
    cmds.forEach((cmd, i) => {
      const el = document.createElement('div');
      el.className = `cmd-item${i === 0 ? ' cmd-selected' : ''}`;
      el.innerHTML = `<span class="cmd-icon">${cmd.icon}</span><div class="cmd-text"><div class="cmd-label">${cmd.label}</div><div class="cmd-desc">${cmd.desc}</div></div><span class="cmd-key">${cmd.key}</span>`;
      el.addEventListener('mouseenter', () => select(i));
      el.addEventListener('click', () => { cmd.action(); close(); });
      results.appendChild(el);
    });
  }

  function select(i) {
    document.querySelectorAll('.cmd-item').forEach(el => el.classList.remove('cmd-selected'));
    const items = document.querySelectorAll('.cmd-item');
    if (items[i]) { items[i].classList.add('cmd-selected'); selIdx = i; }
  }

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    render(q ? COMMANDS.filter(c => c.label.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q)) : COMMANDS);
  });

  window.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); isOpen ? close() : open(); return; }
    if (e.key === 'Escape' && isOpen) { close(); return; }
    if (!isOpen) return;
    if (e.key === 'ArrowDown') { e.preventDefault(); select(Math.min(selIdx+1, filtered.length-1)); }
    if (e.key === 'ArrowUp')   { e.preventDefault(); select(Math.max(selIdx-1, 0)); }
    if (e.key === 'Enter') { filtered[selIdx]?.action(); close(); }
  });

  palette.addEventListener('click', e => { if (e.target === palette) close(); });
  document.getElementById('cmd-trigger')?.addEventListener('click', open);

  // Expose for external control
  window.cmdPalette = { open, close };
}
