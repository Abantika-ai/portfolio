import { useEffect, useRef } from 'react';
import { useTheme } from '../theme/ThemeContext.jsx';

/* ============================================================
   BACKGROUND CANVAS — "Drift Chamber" field simulation
   ------------------------------------------------------------
   Site-wide ambient background (fixed to the viewport, behind
   all content, pointer-events disabled so it never blocks real
   clicks). Visual metaphor: ionization electrons drifting upward
   through liquid xenon under an applied electric field — the
   mechanism behind the S2 light signal LZ uses to reconstruct
   where a particle interacted. Moving the cursor anywhere on the
   page perturbs the local field (a "recoil"); clicking anywhere
   fires an interaction flash, like the S1/S2 double flash of a
   real scatter event.

   Night = the real operating condition (underground, dark).
   Day = same physics, re-lit for a bright surface: no visible
   starfield (there's no starfield at noon), deeper particle
   colors for contrast against a light background.

   Tunable parameters — change these, nothing else, to re-theme
   or re-tune the motion:
   ------------------------------------------------------------ */
const PARTICLE_COUNT = 90; // drifting "electrons"
const STAR_COUNT = 140; // dim background starfield density
const DRIFT_SPEED = 0.35; // px/frame upward drift velocity
const JITTER_AMPLITUDE = 3.6; // px, lateral diffusion sway
const JITTER_FREQUENCY = 0.02; // speed of the sine jitter
const PARTICLE_RADIUS = [1, 2.2]; // min/max dot radius
const RECOIL_RADIUS = 140; // px, cursor influence radius
const RECOIL_FORCE = 2.4; // px/frame max push from cursor
const FRICTION = 0.92; // velocity decay after a push
const FLASH_DURATION = 700; // ms, click "event" burst lifetime

const THEMES = {
  dark: {
    showStars: true,
    electron: (o) => `rgba(127, 231, 220, ${o})`, // xenon cyan
    star: (o) => `rgba(180, 190, 210, ${o})`,
    flash: (o) => `rgba(183, 155, 255, ${o})`, // dark-matter violet
  },
  light: {
    showStars: false,
    electron: (o) => `rgba(12, 133, 121, ${o * 0.8})`, // deep teal, readable on white
    star: () => 'rgba(0, 0, 0, 0)',
    flash: (o) => `rgba(109, 61, 240, ${o * 0.75})`, // deep violet
  },
};

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const COLORS = THEMES[theme] ?? THEMES.dark;

    let width = 0;
    let height = 0;
    let rafId = null;
    let resizeTimer = null;

    const mouse = { x: -9999, y: -9999, active: false };
    const flashes = [];
    const rand = (min, max) => min + Math.random() * (max - min);

    const electrons = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: 0,
      y: 0,
      baseX: 0,
      vx: 0,
      vy: 0,
      phase: rand(0, Math.PI * 2),
      speed: DRIFT_SPEED * rand(0.6, 1.4),
      radius: rand(PARTICLE_RADIUS[0], PARTICLE_RADIUS[1]),
      opacity: rand(0.35, 0.9),
    }));

    const stars = Array.from({ length: STAR_COUNT }, () => ({
      x: 0,
      y: 0,
      radius: rand(0.4, 1.3),
      opacity: rand(0.15, 0.5),
      twinklePhase: rand(0, Math.PI * 2),
    }));

    function layout() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      electrons.forEach((e) => {
        e.baseX = rand(0, width);
        e.x = e.baseX;
        e.y = rand(0, height);
      });
      stars.forEach((s) => {
        s.x = rand(0, width);
        s.y = rand(0, height);
      });
    }

    function renderFrame(time) {
      ctx.clearRect(0, 0, width, height);

      const parallaxX = mouse.active ? (mouse.x - width / 2) * -0.01 : 0;
      const parallaxY = mouse.active ? (mouse.y - height / 2) * -0.01 : 0;

      if (COLORS.showStars) {
        stars.forEach((s) => {
          const twinkle = prefersReduced ? 1 : 0.6 + 0.4 * Math.sin(time * 0.0015 + s.twinklePhase);
          ctx.beginPath();
          ctx.fillStyle = COLORS.star(s.opacity * twinkle);
          ctx.arc(s.x + parallaxX, s.y + parallaxY, s.radius, 0, Math.PI * 2);
          ctx.fill();
        });
      }

      electrons.forEach((e) => {
        if (!prefersReduced) {
          e.y -= e.speed;
          e.x = e.baseX + Math.sin(time * JITTER_FREQUENCY + e.phase) * JITTER_AMPLITUDE;

          if (mouse.active) {
            const dx = e.x - mouse.x;
            const dy = e.y - mouse.y;
            const dist = Math.hypot(dx, dy);
            if (dist < RECOIL_RADIUS && dist > 0.001) {
              const force = (1 - dist / RECOIL_RADIUS) * RECOIL_FORCE;
              e.vx += (dx / dist) * force;
              e.vy += (dy / dist) * force;
            }
          }
          e.vx *= FRICTION;
          e.vy *= FRICTION;
          e.x += e.vx;
          e.y += e.vy;

          if (e.y < -10) {
            e.y = height + rand(0, 40);
            e.baseX = rand(0, width);
            e.x = e.baseX;
          }
        }

        ctx.beginPath();
        ctx.fillStyle = COLORS.electron(e.opacity);
        ctx.arc(e.x, e.y, e.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      for (let i = flashes.length - 1; i >= 0; i--) {
        const f = flashes[i];
        const t = (time - f.start) / FLASH_DURATION;
        if (t >= 1) {
          flashes.splice(i, 1);
          continue;
        }
        const radius = 6 + t * 70;
        const opacity = (1 - t) * 0.8;
        const gradient = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, radius);
        gradient.addColorStop(0, COLORS.flash(opacity));
        gradient.addColorStop(1, COLORS.flash(0));
        ctx.beginPath();
        ctx.fillStyle = gradient;
        ctx.arc(f.x, f.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function loop(time) {
      renderFrame(time);
      rafId = requestAnimationFrame(loop);
    }

    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        layout();
        if (prefersReduced) renderFrame(performance.now());
      }, 120);
    }

    // Listeners live on window (not the canvas) because the canvas has
    // pointer-events:none — it must never intercept clicks meant for
    // real page content sitting above it.
    function onMouseMove(e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }

    function onMouseLeave() {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    }

    function onClick(e) {
      flashes.push({ x: e.clientX, y: e.clientY, start: performance.now() });
      if (prefersReduced) renderFrame(performance.now());
    }

    layout();
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseout', onMouseLeave);
    window.addEventListener('click', onClick);
    window.addEventListener('resize', onResize);

    if (prefersReduced) {
      renderFrame(performance.now());
    } else {
      rafId = requestAnimationFrame(loop);
    }

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      clearTimeout(resizeTimer);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseout', onMouseLeave);
      window.removeEventListener('click', onClick);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="site-canvas" aria-hidden="true" />;
}
