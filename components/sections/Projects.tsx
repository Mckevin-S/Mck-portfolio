import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectGrid from "../projects/ProjectGrid";
import { projects } from "../../data/projects";
import { getDictionary } from "../../lib/dictionary";
import type { Lang } from "../../types/lang";

export default function Projects({ lang }: { lang: Lang }) {
  const dict = getDictionary(lang);

  return (
    <section id="projects" className="relative z-10 scroll-mt-24 py-20 md:py-[120px]">
      <Container>
        <SectionTitle
          index="04"
          label={dict.projects.label}
          title={dict.projects.title}
        />
        <ProjectGrid projects={projects[lang]} lang={lang} />
      </Container>
    </section>
  );
}
