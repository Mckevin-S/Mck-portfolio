"use client";

import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { profile } from "../../data/profile";
import { useLang } from "../../lib/language-context";

export default function About() {
  const { lang, dict } = useLang();
  const data = profile[lang];
  const experienceStat = data.stats[0];

  return (
    <section id="about" className="relative z-10 scroll-mt-24 py-14 sm:py-16 md:py-[120px]">
      <Container>
        <SectionTitle
          index="01"
          label={dict.about.label}
          title={dict.about.title}
        />

        <div className="grid min-w-0 gap-5 sm:gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:gap-12">
          <div className="card relative min-w-0 overflow-hidden border-primary/20 bg-gradient-to-br from-primary/10 via-surface to-secondary/5 p-5 shadow-lg shadow-primary/5 sm:p-8 md:p-10">
            <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
            <div className="absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-secondary/10 blur-3xl" />
            <div className="relative">
              <p className="mb-5 inline-flex max-w-full flex-wrap items-center gap-2 rounded-2xl border border-primary/20 bg-background/60 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-primary sm:rounded-full sm:text-[11px] sm:tracking-[0.16em]">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {data.role} <span className="text-muted">/</span> {data.location}
              </p>
              <p className="max-w-3xl break-words text-base leading-relaxed text-muted md:text-lg">
                {data.bio}
              </p>

              <div className="mt-8 rounded-r-xl border-l-2 border-secondary bg-secondary/5 py-4 pl-5 pr-4 md:mt-10 md:pl-6">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-secondary">
                  {dict.about.approachTitle}
                </p>
                <p className="text-sm leading-relaxed text-muted md:text-base">
                  {dict.about.extra}
                </p>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 flex-col gap-4">
            {experienceStat && (
              <div className="card relative flex flex-1 flex-col justify-between overflow-hidden border-secondary/20 bg-gradient-to-br from-secondary/10 via-surface to-primary/5 p-6 sm:p-8">
                <div className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-secondary/15 blur-3xl" />
                <p className="relative font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {experienceStat.label}
                </p>
                <p className="relative mt-8 font-display text-6xl font-bold tracking-tight text-secondary md:text-7xl">
                  {experienceStat.value}
                </p>
                <span className="relative mt-6 h-px w-full bg-gradient-to-r from-secondary/60 via-line to-transparent" />
              </div>
            )}
            <div className="rounded-xl border border-tertiary/25 bg-tertiary/5 p-5 backdrop-blur-sm sm:p-6">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-tertiary">
                {dict.about.scopeLabel}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {dict.about.scopeText}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 md:mt-16">
          <div className="mb-5 flex items-center gap-3">
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {dict.about.principlesTitle}
            </h3>
            <span className="h-px flex-1 bg-line" />
          </div>
          <div className="grid gap-3 sm:gap-4 md:grid-cols-3">
            {dict.about.principles.map((principle, index) => (
              <article
                key={principle.title}
                className="card card-hover group relative overflow-hidden p-5 md:p-6"
              >
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50 transition-opacity group-hover:opacity-100" />
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-primary/20 bg-primary/10 font-mono text-xs font-semibold text-primary">
                  0{index + 1}
                </span>
                <h4 className="mt-4 font-display text-lg font-semibold text-text">
                  {principle.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {principle.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
