"use client";

import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { experience } from "../../data/experience";
import { getDictionary } from "../../lib/dictionary";
import { useLang } from "../../lib/language-context";
import type { Experience } from "../../types/experience";

export default function Experience() {
  const { lang } = useLang();
  const dict = getDictionary(lang);
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
          <div className="absolute left-3 top-0 h-full w-px bg-line-strong md:left-1/2 md:-translate-x-px" />

          {entries.map((item, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={`${item.company}-${item.period}`}
                className="relative mb-8 last:mb-0 md:mb-14"
              >
                {/* mobile: dot left, card right */}
                <div className="flex items-start gap-4 md:hidden">
                  <span className="relative z-10 mt-2.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[3px] border-primary bg-background">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  <div className="group min-w-0 flex-1 rounded-xl border border-line bg-surface p-5 transition-colors hover:border-primary/30">
                    <ExperienceContent item={item} />
                  </div>
                </div>

                {/* desktop: alternating */}
                <div className="hidden md:grid md:grid-cols-[1fr_48px_1fr] md:items-start">
                  {isLeft ? (
                    <>
                      <div className="pr-8 text-right">
                        <div className="group inline-block w-full rounded-xl border border-line bg-surface p-6 text-left transition-colors hover:border-primary/30">
                          <ExperienceContent item={item} />
                        </div>
                      </div>
                      <span className="relative z-10 mx-auto mt-3 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[3px] border-primary bg-background">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      </span>
                      <div />
                    </>
                  ) : (
                    <>
                      <div />
                      <span className="relative z-10 mx-auto mt-3 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-[3px] border-primary bg-background">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      </span>
                      <div className="pl-0">
                        <div className="group inline-block w-full rounded-xl border border-line bg-surface p-6 text-left transition-colors hover:border-primary/30">
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
          <h3 className="font-display text-lg font-semibold md:text-xl">
            {item.role}
          </h3>
          <p className="mt-0.5 font-mono text-sm text-muted">
            {item.company}
          </p>
        </div>
        <span className="inline-flex w-fit items-center rounded-full border border-line bg-surface-raised px-3 py-1 font-mono text-xs text-muted">
          {item.period}
        </span>
      </div>

      <ul className="mt-5 space-y-2.5">
        {item.points.map((point) => (
          <li
            key={point}
            className="flex items-start gap-3 text-sm leading-relaxed text-muted"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      {item.technologies && item.technologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-line bg-surface-raised px-3 py-1 font-mono text-xs font-medium text-text/80 transition-colors group-hover:border-primary/30 group-hover:text-primary"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </>
  );
}
