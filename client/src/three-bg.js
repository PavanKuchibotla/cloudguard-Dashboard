import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initThreeBackground() {
  const canvas = document.getElementById('three-canvas');
  if (!canvas) return;

  const W = window.innerWidth, H = window.innerHeight;
  const scene    = new THREE.Scene();
  const camera   = new THREE.PerspectiveCamera(55, W / H, 0.1, 1000);
  camera.position.set(0, 0, 20); // pulled further back so nodes look smaller

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setSize(W, H);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.toneMapping = THREE.ReinhardToneMapping;
  renderer.toneMappingExposure = 0.75;

  scene.add(new THREE.AmbientLight(0x001a2e, 0.5));
  const pt = new THREE.PointLight(0x00E5C3, 1, 40);
  pt.position.set(2, 2, 8); scene.add(pt);

  // Nodes — spread wide in x/y, pushed back in z so they don't dominate
  const NODE_DEFS = [
    { p: [-6, 4, -4],   color: 0x00E5C3, r: 0.28, glow: 0.4, },
    { p: [ 7, 2, -6],   color: 0xFF4560, r: 0.20, glow: 0.7, },
    { p: [-8,-2, -3],   color: 0x00E5C3, r: 0.22, glow: 0.35 },
    { p: [-5,-5, -5],   color: 0xFFD166, r: 0.22, glow: 0.45 },
    { p: [ 4,-4, -4],   color: 0x00E5C3, r: 0.22, glow: 0.35 },
    { p: [ 2, 5, -2],   color: 0x0FF4FF, r: 0.18, glow: 0.4  },
    { p: [ 9,-2, -7],   color: 0xFF4560, r: 0.16, glow: 0.65 },
    { p: [ 6, 4, -8],   color: 0x00E5C3, r: 0.16, glow: 0.3  },
    { p: [-2,-7, -4],   color: 0x00E5C3, r: 0.18, glow: 0.3  },
    { p: [-7, 1, -6],   color: 0x0FF4FF, r: 0.18, glow: 0.4  },
    // atmospheric extras — further out
    { p: [ 3,-8, -6],   color: 0x00E5C3, r: 0.10, glow: 0.2  },
    { p: [-9, 5, -8],   color: 0x0FF4FF, r: 0.08, glow: 0.2  },
    { p: [11, 0, -10],  color: 0x00E5C3, r: 0.08, glow: 0.2  },
    { p: [-3, 8, -5],   color: 0xFFD166, r: 0.10, glow: 0.25 },
    { p: [ 0,-9, -7],   color: 0x00E5C3, r: 0.08, glow: 0.2  },
    { p: [-8,-4, -9],   color: 0x0FF4FF, r: 0.08, glow: 0.2  },
  ];

  const EDGE_DEFS = [
    [0,1,'critical'],[0,2,'normal'],[0,3,'warning'],[0,4,'normal'],
    [2,5,'normal'],[5,6,'critical'],[5,7,'normal'],[6,8,'warning'],
    [4,9,'normal'],[9,1,'normal'],[3,7,'normal'],[7,8,'normal'],
    [10,4,'normal'],[11,2,'normal'],[13,5,'normal'],
  ];

  const meshes = NODE_DEFS.map(n => {
    const geo = new THREE.SphereGeometry(n.r, 24, 24);
    const mat = new THREE.MeshStandardMaterial({
      color: n.color, emissive: n.color,
      emissiveIntensity: n.glow,  // much lower
      roughness: 0.2, metalness: 0.1
    });
    const m = new THREE.Mesh(geo, mat);
    m.position.set(...n.p);
    scene.add(m);
    return m;
  });

  // Slimmer, more translucent tubes
  EDGE_DEFS.forEach(([i, j, type]) => {
    const a = meshes[i].position, b = meshes[j].position;
    const mid = new THREE.Vector3(
      (a.x+b.x)/2 + (Math.random()-0.5)*2,
      (a.y+b.y)/2 + (Math.random()-0.5)*2,
      (a.z+b.z)/2 + (Math.random()-0.5)*1
    );
    const curve   = new THREE.QuadraticBezierCurve3(a, mid, b);
    const tubeGeo = new THREE.TubeGeometry(curve, 18, 0.016, 4, false);
    const c = type==='critical'?0xFF4560:type==='warning'?0xFFD166:0x00E5C3;
    const mat = new THREE.MeshStandardMaterial({
      color:c, emissive:c,
      emissiveIntensity: type==='critical'?0.4:0.15,
      transparent:true, opacity: type==='critical'?0.45:0.2
    });
    scene.add(new THREE.Mesh(tubeGeo, mat));
  });

  // Subtle starfield
  const sv = [];
  for(let i=0;i<800;i++) sv.push((Math.random()-.5)*140,(Math.random()-.5)*140,(Math.random()-.5)*60-10);
  const sg = new THREE.BufferGeometry();
  sg.setAttribute('position', new THREE.Float32BufferAttribute(sv, 3));
  scene.add(new THREE.Points(sg, new THREE.PointsMaterial({ color:0x8ecfff, size:0.028, transparent:true, opacity:0.3 })));

  // Subtle bloom — much less intense
  let composer;
  try {
    composer = new EffectComposer(renderer);
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(new UnrealBloomPass(
      new THREE.Vector2(W, H),
      0.35,  // strength (was 1.3)
      0.5,   // radius
      0.28   // threshold (was 0.1)
    ));
  } catch(e) { composer = null; }

  // Gentle node pulse
  meshes.forEach((m, i) => {
    gsap.to(m.scale, {
      x:1.08, y:1.08, z:1.08,
      duration: 2.5 + Math.random()*2,
      yoyo:true, repeat:-1, ease:'sine.inOut', delay: Math.random()*3
    });
  });

  let scrollProg = 0;
  ScrollTrigger.create({
    trigger: document.body, start:'top top', end:'bottom bottom',
    onUpdate: s => { scrollProg = s.progress; }
  });

  const clock = new THREE.Clock();
  const animate = () => {
    requestAnimationFrame(animate);
    const t = clock.getElapsedTime();

    // Very slow scene rotation
    scene.rotation.y = t * 0.018;
    scene.rotation.x = Math.sin(t * 0.008) * 0.04;

    // Subtle point light pulse
    pt.intensity = 0.8 + Math.sin(t * 0.9) * 0.2;

    // Gentle scroll orbit
    const angle = scrollProg * Math.PI * 1.4;
    camera.position.x = Math.sin(angle) * 4;
    camera.position.z = Math.cos(angle) * 4 + 16;
    camera.position.y = Math.sin(scrollProg * Math.PI) * 2;
    camera.lookAt(scene.position);

    if (composer) composer.render(); else renderer.render(scene, camera);
  };
  animate();

  window.addEventListener('resize', () => {
    const nw = window.innerWidth, nh = window.innerHeight;
    camera.aspect = nw / nh;
    camera.updateProjectionMatrix();
    renderer.setSize(nw, nh);
    if (composer) composer.setSize(nw, nh);
  });
}
