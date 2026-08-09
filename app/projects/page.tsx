import ProjectGrid from "../../components/projects/ProjectGrid"
import { projects } from "../../data/projects"

export default function Page() {
  return <ProjectGrid projects={projects.map((p) => p.title)} />
}
