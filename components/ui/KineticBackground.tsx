"use client";

import React, { useEffect, useRef } from "react";

export default function KineticBackground() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run if not prefers-reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let mouseX = typeof window !== "undefined" ? window.innerWidth / 2 : 0;
    let mouseY = typeof window !== "undefined" ? window.innerHeight / 2 : 0;
    let currentX = mouseX;
    let currentY = mouseY;
    let rafId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      }
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Subtle tech grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--line)_1px,transparent_1px),linear-gradient(to_bottom,var(--line)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] opacity-35 dark:opacity-20" />

      {/* Floating ambient glowing orbs */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary/10 blur-[100px]" />
      <div className="absolute top-1/3 -right-40 h-[28rem] w-[28rem] rounded-full bg-secondary/8 blur-[120px]" />
      <div className="absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-primary-dim/10 blur-[120px]" />

      {/* Mouse-reactive glow spotlight */}
      <div
        ref={glowRef}
        className="will-change-transform absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-primary/15 via-secondary/10 to-transparent blur-[90px] dark:from-primary/20 dark:via-secondary/15"
        style={{ transform: "translate3d(-500px, -500px, 0)" }}
      />
    </div>
  );
}

