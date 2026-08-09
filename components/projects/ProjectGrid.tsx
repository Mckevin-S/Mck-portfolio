import React from "react"
import ProjectCard from "../projects/ProjectCard"

export default function ProjectGrid({ projects }: { projects: string[] }) {
  return (
    <div>
      {projects.map((p) => (
        <ProjectCard key={p} title={p} />
      ))}
    </div>
  )
}
