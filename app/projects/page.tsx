import type { Metadata } from "next"
import ProjectsPageClient from "./ProjectsPageClient"

export const metadata: Metadata = {
  title: "Projects | Harishri B R",
  description:
    "Explore the projects created by Harishri B R - Full Stack Developer, Mobile App Developer, and UI/UX Designer",
}

export default function ProjectsPage() {
  return <ProjectsPageClient />
}
