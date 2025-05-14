"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getImageUrl } from "@/lib/utils"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"

import projects from "@/data/projects.json"

export function Projects() {
  const [visibleProjects, setVisibleProjects] = useState(3)

  const showMoreProjects = () => {
    setVisibleProjects((prev) => Math.min(prev + 3, projects.length))
  }

  return (
    <section id="project" className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-wider">Projects</h2>
          <Button asChild variant="outline" size="sm">
            <Link href="/projects" className="flex items-center gap-2">
              View All <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {visibleProjects < projects.length && (
          <div className="flex justify-center mt-12">
            <Button onClick={showMoreProjects}>Load More Projects</Button>
          </div>
        )}
      </div>
    </section>
  )
}

interface Project {
  id: string
  title: string
  imageSrc: string
  description: string
  skills: string[]
  demo: string
  source: string
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Made the entire card a link to the project detail page */}
      <Link href={`/projects/${project.id}`} className="block h-full">
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col group">
          <div className="relative h-48 w-full">
            <Image
              src={getImageUrl(project.imageSrc) || "/placeholder.png"}
              alt={`Image of ${project.title}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription className="line-clamp-2">{project.description}</CardDescription>
          </CardHeader>

          <CardContent className="flex-grow">
            <div className="flex flex-wrap gap-2 mt-2">
              {project.skills.map((skill, index) => (
                <Badge key={index} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button asChild variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="h-4 w-4" /> Demo
              </a>
            </Button>
            <Button asChild variant="outline" size="sm" onClick={(e) => e.stopPropagation()}>
              <a
                href={project.source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
                onClick={(e) => e.stopPropagation()}
              >
                <Github className="h-4 w-4" /> Source
              </a>
            </Button>
          </CardFooter>

          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button size="sm" className="rounded-full">
              <ArrowRight className="h-4 w-4 mr-1" /> Details
            </Button>
          </div>
        </Card>
      </Link>
    </motion.div>
  )
}
