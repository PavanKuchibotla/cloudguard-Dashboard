import gsap from 'gsap';

export function initSoundEngine() {
  let ctx = null;
  let enabled = false;
  const btn = document.getElementById('sound-toggle');

  function ac() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function bootHum() {
    if (!enabled) return;
    const c = ac();
    const osc = c.createOscillator(), gain = c.createGain(), filt = c.createBiquadFilter();
    filt.type = 'lowpass'; filt.frequency.value = 400;
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(55, c.currentTime);
    osc.frequency.exponentialRampToValueAtTime(110, c.currentTime + 3);
    gain.gain.setValueAtTime(0, c.currentTime);
    gain.gain.linearRampToValueAtTime(0.022, c.currentTime + 0.5);
    gain.gain.linearRampToValueAtTime(0, c.currentTime + 3.8);
    osc.connect(filt); filt.connect(gain); gain.connect(c.destination);
    osc.start(); osc.stop(c.currentTime + 4);
  }

  function shieldChime() {
    if (!enabled) return;
    const c = ac();
    [440, 554, 659, 880].forEach((freq, i) => {
      const o = c.createOscillator(), g = c.createGain();
      o.frequency.value = freq; o.type = 'sine';
      const t = c.currentTime + i * 0.13;
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.055, t + 0.05);
      g.gain.exponentialRampToValueAtTime(0.001, t + 0.85);
      o.connect(g); g.connect(c.destination);
      o.start(t); o.stop(t + 0.85);
    });
  }

  function criticalAlert() {
    if (!enabled) return;
    const c = ac();
    const o = c.createOscillator(), g = c.createGain();
    o.type = 'square'; o.frequency.value = 220;
    g.gain.setValueAtTime(0.035, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.28);
    o.connect(g); g.connect(c.destination);
    o.start(); o.stop(c.currentTime + 0.28);
  }

  function clickSound() {
    if (!enabled) return;
    const c = ac();
    const buf = c.createBuffer(1, 512, c.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < 512; i++) data[i] = (Math.random()*2-1) * Math.exp(-i/80);
    const src = c.createBufferSource(), g = c.createGain();
    src.buffer = buf; g.gain.value = 0.04;
    src.connect(g); g.connect(c.destination); src.start();
  }

  function scanBeep() {
    if (!enabled) return;
    const c = ac();
    const o = c.createOscillator(), g = c.createGain();
    o.type = 'sine'; o.frequency.setValueAtTime(880, c.currentTime);
    o.frequency.linearRampToValueAtTime(440, c.currentTime + 0.15);
    g.gain.setValueAtTime(0.04, c.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, c.currentTime + 0.15);
    o.connect(g); g.connect(c.destination);
    o.start(); o.stop(c.currentTime + 0.15);
  }

  if (btn) {
    btn.addEventListener('click', () => {
      enabled = !enabled;
      if (enabled) { bootHum(); }
      btn.textContent = enabled ? '♪ ON' : '♪ OFF';
      btn.style.color = enabled ? '#00E5C3' : '';
      clickSound();
    });
  }

  // Expose global API
  window.SoundEngine = { bootHum, shieldChime, criticalAlert, click: clickSound, scanBeep, isEnabled: () => enabled };
}
