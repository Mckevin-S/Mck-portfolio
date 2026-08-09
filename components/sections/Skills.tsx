import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { skillGroups } from "../../data/skills";
import { getDictionary } from "../../lib/dictionary";
import type { Lang } from "../../types/lang";

export default function Skills({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const groups = skillGroups[lang];

  return (
    <section id="skills" className="relative z-10 scroll-mt-24 py-20 md:py-[120px]">
      <Container>
        <SectionTitle
          index="02"
          label={dict.skills.label}
          title={dict.skills.title}
        />

        <div className="grid gap-8 md:grid-cols-3">
          {groups.map((group) => (
            <div key={group.label} className="card card-hover p-6">
              <div className="flex items-center gap-3 font-mono text-sm">
                <span className="text-primary">{group.symbol}</span>
                <span className="uppercase tracking-[0.2em] text-muted">
                  {group.label}
                </span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-line bg-surface-raised px-3.5 py-1.5 font-mono text-xs font-medium text-text/90 transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
