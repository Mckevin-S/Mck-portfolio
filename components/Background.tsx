"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  color: string;
};

const CYAN = "0, 245, 255";
const EMERALD = "78, 222, 163";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const orbTopRef = useRef<HTMLDivElement>(null);
  const orbLeftRef = useRef<HTMLDivElement>(null);
  const orbRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const mouse = { x: -9999, y: -9999 };
    let width = 0;
    let height = 0;
    let raf = 0;
    let particles: Particle[] = [];

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        70,
        Math.max(28, Math.floor((width * height) / 26000))
      );
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.22,
        vy: -(Math.random() * 0.28 + 0.05),
        size: Math.random() * 1.8 + 0.6,
        alpha: Math.random() * 0.4 + 0.12,
        color: Math.random() > 0.82 ? EMERALD : CYAN,
      }));
    };

    const draw = () => {
      const scrollOffset = window.scrollY * 0.12;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist2 = dx * dx + dy * dy;
        const repel = 140;

        if (dist2 < repel * repel && dist2 > 0.0001) {
          const dist = Math.sqrt(dist2);
          const force = (1 - dist / repel) * 0.55;
          p.x += (dx / dist) * force;
          p.y += (dy / dist) * force;
        }

        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -12) p.y = height + 12;
        if (p.x < -12) p.x = width + 12;
        if (p.x > width + 12) p.x = -12;

        const drawY = ((p.y + scrollOffset) % height + height) % height;

        let alpha = p.alpha;
        if (dist2 < 220 * 220) alpha += (1 - Math.sqrt(dist2) / 220) * 0.3;

        ctx.beginPath();
        ctx.arc(p.x, drawY, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${Math.min(alpha, 1)})`;
        ctx.fill();
      }

      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 120 * 120) {
            ctx.strokeStyle = `rgba(${CYAN}, ${
              (1 - Math.sqrt(d2) / 120) * 0.1
            })`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      if (mouse.x > -999) {
        const glow = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          240
        );
        glow.addColorStop(0, "rgba(0, 245, 255, 0.08)");
        glow.addColorStop(1, "rgba(0, 245, 255, 0)");
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
      }
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onMouseLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onScroll = () => {
      if (reducedMotion) return;
      const y = window.scrollY;
      if (orbTopRef.current) {
        orbTopRef.current.style.transform = `translate(-50%, ${y * -0.06}px)`;
      }
      if (orbLeftRef.current) {
        orbLeftRef.current.style.transform = `translateY(${y * 0.1}px)`;
      }
      if (orbRightRef.current) {
        orbRightRef.current.style.transform = `translateY(${y * -0.08}px)`;
      }
    };
    const onVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(raf);
      } else if (!reducedMotion) {
        raf = requestAnimationFrame(loop);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);

    let ro: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(() => {
        resize();
        draw();
      });
      ro.observe(canvas);
    }
    resize();
    draw();

    if (!reducedMotion) raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro?.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="absolute inset-0 grid-bg opacity-70" />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div
        ref={orbTopRef}
        className="absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,245,255,0.55), transparent)",
          filter: "blur(90px)",
          willChange: "transform",
        }}
      />
      <div
        ref={orbLeftRef}
        className="absolute top-[35%] -left-40 h-[420px] w-[420px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(closest-side, rgba(78,222,163,0.5), transparent)",
          filter: "blur(100px)",
          willChange: "transform",
        }}
      />
      <div
        ref={orbRightRef}
        className="absolute -right-40 bottom-[10%] h-[460px] w-[460px] rounded-full opacity-15"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,245,255,0.45), transparent)",
          filter: "blur(110px)",
          willChange: "transform",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 55%, rgba(6,14,32,0.85) 100%)",
        }}
      />
    </div>
  );
}
