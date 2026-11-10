"use client";

import React, { useState, useMemo } from "react";
import ProjectCard from "./ProjectCard";
import type { Project, ProjectCategory } from "../../types/project";
import { useLang } from "../../lib/language-context";
import { getDictionary } from "../../lib/dictionary";

export default function ProjectGrid({ projects }: { projects: Project[] }) {
  const { lang } = useLang();
  const dict = getDictionary(lang);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");

  const categories: ProjectCategory[] = [
    "all",
    "fullstack",
    "backend",
    "data",
    "devops",
  ];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [projects, activeCategory]);

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: projects.length };
    for (const p of projects) {
      map[p.category] = (map[p.category] || 0) + 1;
    }
    return map;
  }, [projects]);

  return (
    <div>
      {/* Category Filters */}
      <div className="mb-8 flex flex-wrap items-center gap-2 sm:mb-10">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          const label = dict.projects.categories[cat];
          const count = counts[cat] ?? 0;
          if (cat !== "all" && count === 0) return null;

          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`group flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs transition-all duration-200 cursor-pointer ${
                isActive
                  ? "border-primary bg-primary/10 text-primary font-semibold shadow-sm"
                  : "border-line bg-surface text-muted hover:border-line-strong hover:text-text"
              }`}
            >
              <span>{label}</span>
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] ${
                  isActive
                    ? "bg-primary text-on-primary font-bold"
                    : "bg-surface-raised text-muted group-hover:text-text"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <div className="grid min-w-0 gap-4 sm:gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <div key={project.slug} className="flex">
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
