"use client";

import React, { useEffect, useRef } from "react";

interface Snowflake {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
}

const Snowfall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let snowflakes: Snowflake[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createSnowflakes = () => {
      const snowflakeCount = Math.floor(window.innerWidth / 15); // Density
      snowflakes = [];
      for (let i = 0; i < snowflakeCount; i++) {
        snowflakes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: Math.random() * 0.5 - 0.25, // Slight horizontal drift
          vy: Math.random() * 0.5 + 0.2, // Slow vertical fall
          radius: Math.random() * 1.5 + 0.5,
          alpha: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const updateSnowflakes = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const flake of snowflakes) {
        // Move
        flake.x += flake.vx;
        flake.y += flake.vy;

        // Reset if out of bounds
        if (flake.y > canvas.height) {
          flake.y = -5;
          flake.x = Math.random() * canvas.width;
        }
        if (flake.x > canvas.width) {
          flake.x = 0;
        } else if (flake.x < 0) {
          flake.x = canvas.width;
        }

        // Draw
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${flake.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(updateSnowflakes);
    };

    // Initialize
    resizeCanvas();
    createSnowflakes();
    updateSnowflakes();

    // Resize listener
    window.addEventListener("resize", () => {
      resizeCanvas();
      createSnowflakes(); // Re-populate for new width
    });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0, // Behind content
      }}
    />
  );
};

export default Snowfall;
