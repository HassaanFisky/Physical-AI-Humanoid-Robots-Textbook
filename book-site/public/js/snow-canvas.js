/**
 * High-performance Snow Animation System
 * Features:
 * - 60fps target using requestAnimationFrame
 * - Typed Arrays for memory efficiency (no garbage collection during loop)
 * - Parallax depth simulation (Size/Speed correlation)
 * - Sinusoidal wind drift
 * - Graceful start/stop
 */
(function () {
  if (typeof window === "undefined") return;
  if (window.SnowSystem) return;

  const CONFIG = {
    particleCount: 200, // Balanced for mobile/desktop
    baseSpeed: 0.8,
    windForce: 0.5,
    color: "255, 255, 255",
  };

  // State
  let canvas, ctx;
  let width, height;
  let animationFrameId;
  let isActive = false;

  // Particle Data: [x, y, radius, speed, driftAngle]
  const PARTICLE_SIZE = 5;
  const particles = new Float32Array(CONFIG.particleCount * PARTICLE_SIZE);

  function initParticles() {
    for (let i = 0; i < CONFIG.particleCount; i++) {
      resetParticle(i, true);
    }
  }

  function resetParticle(i, randomY = false) {
    const idx = i * PARTICLE_SIZE;
    const depth = Math.random(); // 0 (far) to 1 (near)

    particles[idx] = Math.random() * width; // x
    particles[idx + 1] = randomY ? Math.random() * height : -10; // y
    particles[idx + 2] = 1 + depth * 3; // radius: 1px to 4px
    particles[idx + 3] = 0.5 + depth * 1.5; // speed: 0.5 to 2.0
    particles[idx + 4] = Math.random() * Math.PI * 2; // driftAngle
  }

  function resize() {
    if (!canvas) return;

    // Handle DPI for crisp rendering
    const dpr = window.devicePixelRatio || 1;
    // We only change the internal buffer size, not the CSS size (which is 100%)
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";

    ctx.scale(dpr, dpr);
  }

  function loop() {
    if (!isActive) {
      ctx.clearRect(0, 0, width, height);
      return;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = `rgba(${CONFIG.color}, 0.8)`;
    ctx.beginPath();

    for (let i = 0; i < CONFIG.particleCount; i++) {
      const idx = i * PARTICLE_SIZE;

      // Update Y (Gravity)
      particles[idx + 1] += particles[idx + 3] * CONFIG.baseSpeed;

      // Update X (Wind/Drift) using Sinusoidal wave
      particles[idx + 4] += 0.02; // Increment angle
      particles[idx] += Math.sin(particles[idx + 4]) * CONFIG.windForce;

      // Wrap around
      if (particles[idx + 1] > height) {
        resetParticle(i, false);
      }
      if (particles[idx] > width) {
        particles[idx] = 0;
      } else if (particles[idx] < 0) {
        particles[idx] = width;
      }

      // Draw
      ctx.moveTo(particles[idx], particles[idx + 1]);
      ctx.arc(
        particles[idx],
        particles[idx + 1],
        particles[idx + 2],
        0,
        Math.PI * 2
      );
    }

    ctx.fill();
    animationFrameId = requestAnimationFrame(loop);
  }

  function setup() {
    canvas = document.getElementById("snow-canvas");
    if (!canvas) return false;

    ctx = canvas.getContext("2d", { alpha: true });
    resize();
    window.addEventListener("resize", resize);
    initParticles();
    return true;
  }

  window.SnowSystem = {
    toggle: (shouldPlay) => {
      // Lazy init
      if (!canvas) {
        const success = setup();
        if (!success && shouldPlay) {
          console.warn("SnowSystem: Canvas not found");
          return;
        }
      }

      if (shouldPlay) {
        if (!isActive) {
          isActive = true;
          loop();
        }
      } else {
        isActive = false;
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
        // Clear one last time to ensure clean screen
        if (ctx) ctx.clearRect(0, 0, width, height);
      }
    },
  };
})();
