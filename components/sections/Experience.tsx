"use client";

import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { experience } from "../../data/experience";
import { useLang } from "../../lib/language-context";
import type { Experience } from "../../types/experience";

const experienceAccents = [
  {
    line: "via-cyan-400/70",
    marker: "border-cyan-400 bg-cyan-400 shadow-cyan-500/30",
    card: "hover:border-cyan-500/40",
    company: "text-cyan-700 dark:text-cyan-300",
    bullet: "bg-cyan-400",
    tag: "group-hover:border-cyan-500/30 group-hover:text-cyan-700 dark:group-hover:text-cyan-300",
  },
  {
    line: "via-violet-400/70",
    marker: "border-violet-400 bg-violet-400 shadow-violet-500/30",
    card: "hover:border-violet-500/40",
    company: "text-violet-700 dark:text-violet-300",
    bullet: "bg-violet-400",
    tag: "group-hover:border-violet-500/30 group-hover:text-violet-700 dark:group-hover:text-violet-300",
  },
  {
    line: "via-emerald-400/70",
    marker: "border-emerald-400 bg-emerald-400 shadow-emerald-500/30",
    card: "hover:border-emerald-500/40",
    company: "text-emerald-700 dark:text-emerald-300",
    bullet: "bg-emerald-400",
    tag: "group-hover:border-emerald-500/30 group-hover:text-emerald-700 dark:group-hover:text-emerald-300",
  },
  {
    line: "via-amber-400/70",
    marker: "border-amber-400 bg-amber-400 shadow-amber-500/30",
    card: "hover:border-amber-500/40",
    company: "text-amber-700 dark:text-amber-300",
    bullet: "bg-amber-400",
    tag: "group-hover:border-amber-500/30 group-hover:text-amber-700 dark:group-hover:text-amber-300",
  },
];

export default function Experience() {
  const { lang, dict } = useLang();
  const entries = experience[lang];

  return (
    <section
      id="experience"
      className="relative z-10 scroll-mt-24 py-20 md:py-[120px]"
    >
      <Container>
        <SectionTitle
          index="03"
          label={dict.experience.label}
          title={dict.experience.title}
        />

        <div className="relative">
          {/* vertical line */}
          <div className="absolute bottom-3 left-3.5 top-3 w-px bg-gradient-to-b from-primary/70 via-line-strong to-transparent md:left-1/2 md:-translate-x-px" />

          {entries.map((item, i) => {
            const isLeft = i % 2 === 0;
            const accent = experienceAccents[i % experienceAccents.length];
            const marker = (
              <span
                className={`relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 bg-background shadow-lg ${accent.marker}`}
              >
                <span className="h-2 w-2 rounded-full bg-background" />
              </span>
            );
            const card = (
              <div
                className={`group relative overflow-hidden rounded-xl border border-line bg-surface p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 sm:p-6 ${accent.card}`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.line} to-transparent`}
                />
                <ExperienceContent
                  item={item}
                  index={i}
                  accent={accent}
                  label={dict.experience.itemLabel}
                />
              </div>
            );

            return (
              <div
                key={`${item.company}-${item.period}`}
                className="relative mb-8 last:mb-0 md:mb-12"
              >
                <div className="flex items-start gap-4 md:hidden">
                  <div className="mt-2">{marker}</div>
                  <div className="min-w-0 flex-1">{card}</div>
                </div>

                <div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] md:items-start">
                  {isLeft ? (
                    <>
                      <div className="pr-8">{card}</div>
                      <div className="flex justify-center pt-2">{marker}</div>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <div className="flex justify-center pt-2">{marker}</div>
                      <div className="pl-8">{card}</div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function ExperienceContent({
  item,
  index,
  accent,
  label,
}: {
  item: Experience;
  index: number;
  accent: (typeof experienceAccents)[number];
  label: string;
}) {
  return (
    <>
      <div className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            {label} <span className="text-primary">/ 0{index + 1}</span>
          </p>
          <h3 className="font-display text-lg font-bold leading-snug text-text md:text-xl">
            {item.role}
          </h3>
          <p className={`mt-1 font-mono text-sm font-semibold ${accent.company}`}>
            @{item.company}
          </p>
        </div>
        <span className="inline-flex w-fit shrink-0 items-center rounded-full border border-line bg-surface-raised px-3 py-1.5 font-mono text-[11px] text-muted shadow-xs">
          {item.period}
        </span>
      </div>

      <ul className="mt-5 space-y-3 border-t border-line/70 pt-4">
        {item.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-3 text-sm leading-relaxed text-muted"
          >
            <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${accent.bullet}`} />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {item.technologies && item.technologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2 border-t border-line/60 pt-4">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className={`rounded-full border border-line bg-surface-raised px-3 py-1 font-mono text-[10px] font-medium text-text/80 transition-colors ${accent.tag}`}
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
