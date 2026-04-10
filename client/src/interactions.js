// ── interactions.js ─────────────────────────────────────────────────────
// Rich interactivity layer: ripples, particles, toasts, active-nav, etc.

// ── Toast system ─────────────────────────────────────────────────────────
let toastContainer = null;

function ensureToastContainer() {
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    document.body.appendChild(toastContainer);
  }
  return toastContainer;
}

export function showToast(message, type = 'ok', duration = 3000) {
  const container = ensureToastContainer();
  const icons = { ok: '✓', warn: '⚠', danger: '✕', info: '→' };
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span class="toast-icon">${icons[type] || '→'}</span>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('hide');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ── Ripple Effect ────────────────────────────────────────────────────────
export function addRipple(element, e, danger = false) {
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height) * 1.2;
  const x = (e.clientX - rect.left) - size / 2;
  const y = (e.clientY - rect.top)  - size / 2;

  const ripple = document.createElement('span');
  ripple.className = 'ripple' + (danger ? ' ripple-danger' : '');
  ripple.style.cssText = `width:${size}px;height:${size}px;left:${x}px;top:${y}px`;
  element.appendChild(ripple);
  setTimeout(() => ripple.remove(), 700);
}

// ── Particle Burst ───────────────────────────────────────────────────────
export function particleBurst(x, y, color = '#00E5C3', count = 10) {
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = 3 + Math.random() * 5;
    const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.8;
    const dist  = 40 + Math.random() * 60;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;
    p.style.cssText = `
      width:${size}px; height:${size}px;
      left:${x - size/2}px; top:${y - size/2}px;
      background:${color};
      box-shadow: 0 0 ${size * 2}px ${color};
      --dx:${dx}px; --dy:${dy}px;
      animation-duration:${0.5 + Math.random() * 0.5}s;
    `;
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 1100);
  }
}

// ── Active navigation tracking ────────────────────────────────────────────
function initActiveNav() {
  const sections = ['hero', 'features', 'topology', 'audit', 'ending'];
  const links = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        links.forEach(a => {
          const href = a.getAttribute('href')?.replace('#', '');
          a.classList.toggle('active', href === id);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

// ── Ripple buttons ────────────────────────────────────────────────────────
function initRippleButtons() {
  const targets = document.querySelectorAll(
    '.btn-primary, .btn-ghost, .btn-end, .audit-filter, .nav-btn'
  );
  targets.forEach(el => {
    el.classList.add('ripple-host');
    el.addEventListener('click', e => {
      const danger = el.classList.contains('btn-danger') || el.id === 'run-scan-btn';
      addRipple(el, e, danger);
    });
  });
}

// ── Feature card interactivity ────────────────────────────────────────────
function initFeatureCards() {
  document.querySelectorAll('.feature-card').forEach(card => {
    card.classList.add('ripple-host');
    card.addEventListener('click', e => {
      addRipple(card, e);
      particleBurst(e.clientX, e.clientY, '#00E5C3', 8);
      card.classList.add('card-active');
      setTimeout(() => card.classList.remove('card-active'), 500);
    });
  });
}

// ── Scan button enhanced feedback ─────────────────────────────────────────
function initScanFeedback() {
  const btn = document.getElementById('run-scan-btn');
  if (!btn) return;

  const origClick = btn.onclick;
  btn.addEventListener('click', e => {
    particleBurst(e.clientX, e.clientY, '#00E5C3', 14);
    btn.classList.add('scanning');
    setTimeout(() => btn.classList.remove('scanning'), 200);
    showToast('// Initiating security scan · aws · us-east-1', 'ok', 4000);
  });

  // Watch for scan bar to fill and give completion toast
  const scanBar = document.getElementById('scan-bar');
  if (scanBar) {
    const observer = new MutationObserver(() => {
      const width = parseFloat(scanBar.style.width || '0');
      if (width >= 100) {
        showToast('// Scan complete · 2 critical findings', 'warn', 5000);
      }
    });
    observer.observe(scanBar, { attributes: true, attributeFilter: ['style'] });
  }
}

// ── Demo report feedback ──────────────────────────────────────────────────
function initDemoReport() {
  const btn = document.getElementById('demo-report-btn');
  if (!btn) return;
  btn.addEventListener('click', e => {
    particleBurst(e.clientX, e.clientY, '#0FF4FF', 10);
    showToast('// Loading demo audit report...', 'ok', 2500);
    setTimeout(() => {
      showToast('// 8 findings loaded · CIS Score: 74/100', 'warn', 4000);
    }, 2000);
  });
}

// ── Audit row interactivity ───────────────────────────────────────────────
function initAuditRows() {
  const observer = new MutationObserver(() => {
    document.querySelectorAll('.audit-row:not([data-interactive])').forEach(row => {
      row.setAttribute('data-interactive', '1');
      row.addEventListener('click', e => {
        // Flash highlight
        row.classList.add('highlight');
        setTimeout(() => row.classList.remove('highlight'), 800);
        // Copy resource on row click
        const resource = row.querySelector('.copy-resource');
        if (resource) {
          navigator.clipboard.writeText(resource.textContent).catch(() => {});
          showToast(`// Copied: ${resource.textContent.trim()}`, 'ok', 2000);
        }
        addRipple(row, e);
      });
    });
  });
  const tbody = document.getElementById('audit-table-body');
  if (tbody) observer.observe(tbody, { childList: true });
}

// ── Scroll reveal for sections ────────────────────────────────────────────
function initScrollRevealBadges() {
  const badges = document.querySelectorAll('.section-badge');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  badges.forEach(b => {
    b.style.opacity = '0';
    b.style.transform = 'translateY(8px)';
    b.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    io.observe(b);
  });
}

// ── Topology enter toast ──────────────────────────────────────────────────
function initTopoToast() {
  const topo = document.getElementById('topology');
  if (!topo) return;
  let shown = false;
  const io = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && !shown) {
      shown = true;
      setTimeout(() => showToast('// Topology graph loaded · 10 nodes · 11 edges', 'ok', 3000), 1200);
    }
  }, { threshold: 0.35 });
  io.observe(topo);
}

// ── Keyboard shortcuts feedback ───────────────────────────────────────────
function initKeyboardFeedback() {
  document.addEventListener('keydown', e => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      showToast('// Command palette opened', 'ok', 1500);
    }
  });
}

// ── Float node click ─────────────────────────────────────────────────────
function initFloatNodes() {
  ['fn1','fn2','fn3','fn4'].forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    el.style.pointerEvents = 'auto';
    el.style.cursor = 'none';
    el.addEventListener('click', e => {
      const text = el.querySelector('.float-node-body')?.textContent;
      const isDanger = id === 'fn1';
      particleBurst(e.clientX, e.clientY, isDanger ? '#FF4560' : '#00E5C3', 8);
      showToast(`// ${text?.trim()}`, isDanger ? 'danger' : 'ok', 3000);
    });
  });
}

// ── Copy resource feedback in audit ──────────────────────────────────────
function initCopyFeedback() {
  document.addEventListener('click', e => {
    if (e.target.classList.contains('copy-resource')) {
      particleBurst(e.clientX, e.clientY, '#00E5C3', 6);
    }
  });
}

// ── Main init ─────────────────────────────────────────────────────────────
export function initInteractions() {
  initRippleButtons();
  initFeatureCards();
  initScanFeedback();
  initDemoReport();
  initAuditRows();
  initScrollRevealBadges();
  initTopoToast();
  initKeyboardFeedback();
  initFloatNodes();
  initCopyFeedback();
  initActiveNav();
}
