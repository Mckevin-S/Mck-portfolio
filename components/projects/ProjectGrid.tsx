import React from "react";
import ProjectCard from "./ProjectCard";
import type { Lang } from "../../types/lang";
import type { Project } from "../../types/project";

export default function ProjectGrid({
  projects,
  lang,
}: {
  projects: Project[];
  lang: Lang;
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} lang={lang} />
      ))}
    </div>
  );
}
