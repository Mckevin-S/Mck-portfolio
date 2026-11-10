"use client";

import React, { useEffect, useRef } from "react";

const stars = [
  { x: "8%", y: "14%", delay: "0s", size: "2px" },
  { x: "17%", y: "38%", delay: "1.2s", size: "1px" },
  { x: "24%", y: "9%", delay: "2.1s", size: "2px" },
  { x: "32%", y: "26%", delay: "0.7s", size: "1px" },
  { x: "41%", y: "12%", delay: "2.8s", size: "1px" },
  { x: "48%", y: "42%", delay: "1.7s", size: "2px" },
  { x: "57%", y: "18%", delay: "0.3s", size: "1px" },
  { x: "65%", y: "34%", delay: "2.4s", size: "2px" },
  { x: "72%", y: "11%", delay: "1.4s", size: "1px" },
  { x: "83%", y: "29%", delay: "0.9s", size: "2px" },
  { x: "92%", y: "16%", delay: "2.6s", size: "1px" },
  { x: "12%", y: "64%", delay: "2.3s", size: "1px" },
  { x: "28%", y: "78%", delay: "0.5s", size: "2px" },
  { x: "39%", y: "61%", delay: "1.9s", size: "1px" },
  { x: "54%", y: "84%", delay: "1.1s", size: "2px" },
  { x: "68%", y: "72%", delay: "2.9s", size: "1px" },
  { x: "79%", y: "88%", delay: "0.2s", size: "1px" },
  { x: "94%", y: "67%", delay: "1.6s", size: "2px" },
];

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
      <div className="cosmic-stars absolute inset-0" />
      <div className="cosmic-stars-distant absolute inset-0" />

      {stars.map((star, index) => (
        <span
          key={index}
          className="cosmic-twinkle absolute rounded-full bg-primary"
          style={{
            left: star.x,
            top: star.y,
            width: star.size,
            height: star.size,
            animationDelay: star.delay,
          }}
        />
      ))}

      <svg
        className="cosmic-tech-traces absolute inset-0 h-full w-full"
        viewBox="0 0 1440 1000"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <g className="cosmic-circuit">
          <path d="M-30 260H118L164 306H286" />
          <path d="M-20 286H95L132 323H220" />
          <path d="M1040 530H1154L1196 488H1470" />
          <path d="M1170 1000V866L1210 826V742H1460" />
          <path d="M-20 760H96L142 714H238" />
          <circle cx="286" cy="306" r="4" />
          <circle cx="220" cy="323" r="3" />
          <circle cx="1040" cy="530" r="4" />
          <circle cx="1460" cy="742" r="3" />
          <circle cx="238" cy="714" r="3" />
        </g>

        <g className="cosmic-cloud">
          <path d="M151 203a27 27 0 0 1 51-12 22 22 0 0 1 27 21 20 20 0 0 1-4 40h-70a24 24 0 0 1-4-49Z" />
          <path d="M166 267v29h53v-29M181 296v20h24v-20" />
          <path d="M193 316v31h98v-28h-28" />
          <circle cx="290" cy="319" r="4" />
        </g>

        <g className="cosmic-code">
          <path d="m1222 202-17 14 17 14M1252 202l17 14-17 14M1241 196l-8 40" />
          <path d="M1197 278h54m-54 13h82m-82 13h63" />
          <path d="M111 840h76v48h-76zM123 827h76v48" />
          <path d="M130 855h37m-37 12h24" />
        </g>
      </svg>

      <div className="cosmic-planet absolute -right-48 top-[12%] h-[26rem] w-[26rem] rounded-full sm:-right-40 sm:h-[34rem] sm:w-[34rem]">
        <div className="cosmic-planet-ring absolute -inset-[16%] rounded-full border border-primary/20" />
        <div className="cosmic-planet-ring cosmic-planet-ring-delayed absolute -inset-[28%] rounded-full border border-secondary/10" />
      </div>

      <div
        ref={glowRef}
        className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-r from-primary/10 via-secondary/5 to-transparent blur-[90px] will-change-transform dark:from-primary/15 dark:via-secondary/10"
        style={{ transform: "translate3d(-500px, -500px, 0)" }}
      />
    </div>
  );
}
