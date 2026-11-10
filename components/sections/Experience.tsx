"use client";

import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { experience } from "../../data/experience";
import { useLang } from "../../lib/language-context";
import type { Experience } from "../../types/experience";

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
          <div className="absolute left-3.5 top-0 h-full w-px bg-gradient-to-b from-primary/60 via-line-strong to-transparent md:left-1/2 md:-translate-x-px" />

          {entries.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={`${item.company}-${item.period}`}
                className="relative mb-8 last:mb-0 md:mb-14"
              >
                {/* mobile: dot left, card right */}
                <div className="flex items-start gap-4 md:hidden">
                  <span className="relative z-10 mt-2.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background shadow-md shadow-primary/20">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                  </span>
                  <div className="group min-w-0 flex-1 rounded-xl border border-line bg-surface p-5 shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-md hover:shadow-primary/5">
                    <ExperienceContent item={item} />
                  </div>
                </div>

                {/* desktop: alternating */}
                <div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] md:items-start">
                  {isLeft ? (
                    <>
                      <div className="pr-8 text-right">
                        <div className="group inline-block w-full rounded-xl border border-line bg-surface p-6 text-left shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                          <ExperienceContent item={item} />
                        </div>
                      </div>
                      <span className="relative z-10 mx-auto mt-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background shadow-md shadow-primary/20">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                      </span>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <span className="relative z-10 mx-auto mt-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-background shadow-md shadow-primary/20">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                      </span>
                      <div className="pl-8">
                        <div className="group inline-block w-full rounded-xl border border-line bg-surface p-6 text-left shadow-sm transition-all duration-300 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
                          <ExperienceContent item={item} />
                        </div>
                      </div>
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

function ExperienceContent({ item }: { item: Experience }) {
  return (
    <>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
        <div>
          <h3 className="font-display text-lg font-bold text-text md:text-xl">
            {item.role}
          </h3>
          <p className="mt-0.5 font-mono text-sm text-primary font-medium">
            @{item.company}
          </p>
        </div>
        <span className="inline-flex w-fit items-center rounded-full border border-line bg-surface-raised px-3 py-1 font-mono text-xs text-muted shadow-xs">
          {item.period}
        </span>
      </div>

      <ul className="mt-5 space-y-2.5">
        {item.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-3 text-sm leading-relaxed text-muted"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {item.technologies && item.technologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2 border-t border-line/60 pt-4">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-surface-raised px-3 py-0.5 font-mono text-[11px] font-medium text-text/80 transition-colors group-hover:border-primary/30 group-hover:text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
