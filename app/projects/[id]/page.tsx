import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getImageUrl } from "@/lib/utils"
import { ArrowLeft, ExternalLink, Github, Calendar, Code } from "lucide-react"
import { ProjectSlider } from "@/components/project-slider"

import projects from "@/data/projects.json"

type Props = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Projects | Harishri B R`,
    description: project.description,
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }))
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  // For demo purposes, create additional screenshots based on the main image
  const screenshots = [
    getImageUrl(project.imageSrc) || "/placeholder.png",
    "/placeholder.svg?height=600&width=800&text=Screenshot+2",
    "/placeholder.svg?height=600&width=800&text=Screenshot+3",
    "/placeholder.svg?height=600&width=800&text=Screenshot+4",
  ]

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <Button asChild variant="ghost" className="mb-6 group">
          <Link href="/projects" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to all projects
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ProjectSlider images={screenshots} />
          </div>

          <div className="space-y-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.skills.map((skill, index) => (
                  <Badge key={index} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
              <p className="text-lg text-muted-foreground">{project.description}</p>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="text-xl font-semibold mb-4">Project Details</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Completion Date</h3>
                    <p className="text-muted-foreground">January 2023</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Code className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <h3 className="font-medium">Technologies Used</h3>
                    <p className="text-muted-foreground">{project.skills.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h2 className="text-xl font-semibold mb-4">Key Features</h2>
              <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                <li>Responsive design for all devices</li>
                <li>Intuitive user interface</li>
                <li>Fast performance and optimization</li>
                <li>Secure authentication system</li>
                <li>Comprehensive documentation</li>
              </ul>
            </div>

            <div className="border-t border-border pt-6 flex flex-col sm:flex-row gap-4">
              <Button asChild className="flex-1">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Github className="h-4 w-4" /> Source Code
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">Other Projects You Might Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((p) => p.id !== project.id)
              .slice(0, 3)
              .map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.id}`}
                  className="group block overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/50"
                >
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={getImageUrl(relatedProject.imageSrc) || "/placeholder.png"}
                      alt={relatedProject.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                      {relatedProject.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 mt-2">{relatedProject.description}</p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
