"use client";

import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { skillGroups } from "../../data/skills";
import { useLang } from "../../lib/language-context";

export default function Skills() {
  const { lang, dict } = useLang();
  const groups = skillGroups[lang];

  return (
    <section id="skills" className="relative z-10 scroll-mt-24 py-20 md:py-[120px]">
      <Container>
        <SectionTitle
          index="02"
          label={dict.skills.label}
          title={dict.skills.title}
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group.label}
              className="card card-hover p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 font-mono text-sm">
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary font-bold">
                    {group.symbol}
                  </span>
                  <span className="uppercase tracking-[0.2em] text-xs font-semibold text-text">
                    {group.label}
                  </span>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-line bg-surface-raised px-3.5 py-1.5 font-mono text-xs font-medium text-text/90 transition-colors hover:border-primary/50 hover:bg-primary/5 hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
