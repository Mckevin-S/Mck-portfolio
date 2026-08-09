import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import Badge from "../ui/Badge";
import { profile } from "../../data/profile";
import { skillGroups } from "../../data/skills";
import { getDictionary } from "../../lib/dictionary";
import type { Lang } from "../../types/lang";

export default function About({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);
  const data = profile[lang];
  const techs = skillGroups[lang].flatMap((group) => group.skills);

  return (
    <section id="about" className="relative z-10 scroll-mt-24 py-20 md:py-[120px]">
      <Container>
        <SectionTitle
          index="01"
          label={dict.about.label}
          title={dict.about.title}
        />

        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div className="max-w-[680px]">
            <p className="text-base leading-relaxed text-muted md:text-lg">
              {data.bio}
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
              {dict.about.extra}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {data.stats.map((stat) => (
              <div key={stat.label} className="card card-hover p-5">
                <p className="font-mono text-2xl font-bold text-primary md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 font-mono text-xs leading-snug text-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-wrap gap-2.5">
          {techs.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </Container>
    </section>
  );
}
