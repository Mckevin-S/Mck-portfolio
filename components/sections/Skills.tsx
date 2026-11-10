"use client";

import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { skillGroups } from "../../data/skills";
import { useLang } from "../../lib/language-context";

export default function Skills() {
  const { lang, dict } = useLang();
  const groups = skillGroups[lang];
  const accents = [
    {
      icon: "bg-cyan-500/10 text-cyan-600 ring-cyan-500/20 dark:text-cyan-300",
      line: "via-cyan-400/70",
      skill:
        "hover:border-cyan-500/40 hover:bg-cyan-500/10 hover:text-cyan-700 dark:hover:text-cyan-200",
    },
    {
      icon: "bg-violet-500/10 text-violet-600 ring-violet-500/20 dark:text-violet-300",
      line: "via-violet-400/70",
      skill:
        "hover:border-violet-500/40 hover:bg-violet-500/10 hover:text-violet-700 dark:hover:text-violet-200",
    },
    {
      icon: "bg-amber-500/10 text-amber-600 ring-amber-500/20 dark:text-amber-300",
      line: "via-amber-400/70",
      skill:
        "hover:border-amber-500/40 hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-200",
    },
    {
      icon: "bg-emerald-500/10 text-emerald-600 ring-emerald-500/20 dark:text-emerald-300",
      line: "via-emerald-400/70",
      skill:
        "hover:border-emerald-500/40 hover:bg-emerald-500/10 hover:text-emerald-700 dark:hover:text-emerald-200",
    },
    {
      icon: "bg-blue-500/10 text-blue-600 ring-blue-500/20 dark:text-blue-300",
      line: "via-blue-400/70",
      skill:
        "hover:border-blue-500/40 hover:bg-blue-500/10 hover:text-blue-700 dark:hover:text-blue-200",
    },
    {
      icon: "bg-rose-500/10 text-rose-600 ring-rose-500/20 dark:text-rose-300",
      line: "via-rose-400/70",
      skill:
        "hover:border-rose-500/40 hover:bg-rose-500/10 hover:text-rose-700 dark:hover:text-rose-200",
    },
  ];

  return (
    <section id="skills" className="relative z-10 scroll-mt-24 py-14 sm:py-16 md:py-[120px]">
      <Container>
        <SectionTitle
          index="02"
          label={dict.skills.label}
          title={dict.skills.title}
        />

        <div className="grid min-w-0 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {groups.map((group, index) => {
            const accent = accents[index % accents.length];

            return (
              <article
                key={group.label}
                className="card card-hover group relative flex min-w-0 flex-col justify-between overflow-hidden p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 sm:p-6"
              >
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${accent.line} to-transparent`}
                />
                <div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-mono text-lg font-bold ring-1 ${accent.icon}`}
                    >
                      {group.symbol}
                    </span>
                    <div>
                      <span className="font-mono text-[10px] tracking-[0.16em] text-muted">
                        0{index + 1}
                      </span>
                      <h3 className="break-words font-display text-sm font-semibold leading-snug text-text">
                        {group.label}
                      </h3>
                    </div>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`rounded-full border border-line bg-surface-raised px-3 py-1.5 font-mono text-[11px] font-medium text-text/90 transition-colors ${accent.skill}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
