"use client";

import React from "react";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import ProjectGrid from "../projects/ProjectGrid";
import { projects } from "../../data/projects";
import { useLang } from "../../lib/language-context";

export default function Projects() {
  const { lang, dict } = useLang();

  return (
    <section id="projects" className="relative z-10 scroll-mt-24 py-14 sm:py-16 md:py-[120px]">
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
