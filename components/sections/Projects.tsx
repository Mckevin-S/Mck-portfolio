"use client";

import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectGrid from "../projects/ProjectGrid";
import { projects } from "../../data/projects";
import { getDictionary } from "../../lib/dictionary";
import { useLang } from "../../lib/language-context";

export default function Projects() {
  const { lang } = useLang();
  const dict = getDictionary(lang);

  return (
    <section id="projects" className="relative z-10 scroll-mt-24 py-20 md:py-[120px]">
      <Container>
        <SectionTitle
          index="04"
          label={dict.projects.label}
          title={dict.projects.title}
        />
        <ProjectGrid projects={projects[lang]} />
      </Container>
    </section>
  );
}
