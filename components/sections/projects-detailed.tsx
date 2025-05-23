"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { getImageUrl } from "@/lib/utils"
import { ExternalLink, Github, Search, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

import projects from "@/data/projects.json"

export function ProjectsDetailed() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterSkill, setFilterSkill] = useState("all")

  // Get unique skills from all projects
  const allSkills = Array.from(new Set(projects.flatMap((project) => project.skills))).sort()

  // Filter projects based on search term and selected skill
  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesSkill = filterSkill === "all" || project.skills.includes(filterSkill)

    return matchesSearch && matchesSkill
  })

  return (
    <div className="space-y-8">
      <motion.div
        className="flex flex-col md:flex-row gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>

        <Select value={filterSkill} onValueChange={setFilterSkill}>
          <SelectTrigger className="w-full md:w-[200px]">
            <SelectValue placeholder="Filter by skill" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Skills</SelectItem>
            {allSkills.map((skill) => (
              <SelectItem key={skill} value={skill}>
                {skill}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </motion.div>

      {filteredProjects.length === 0 ? (
        <motion.div
          className="text-center py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-medium mb-2">No projects found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
        </motion.div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      )}
    </div>
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

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent navigation if clicking on buttons
    const target = e.target as HTMLElement
    if (target.closest('button') || target.closest('a[href^="http"]')) {
      e.preventDefault()
      return
    }
  }

  const handleExternalLinkClick = (e: React.MouseEvent, url: string) => {
    e.preventDefault()
    e.stopPropagation()
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/projects/${project.id}`} onClick={handleCardClick}>
        <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col group cursor-pointer">
          <div className="relative h-48 w-full overflow-hidden">
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
            <CardDescription className="line-clamp-3">{project.description}</CardDescription>
          </CardHeader>

          <CardContent className="flex-grow">
            <div className="flex flex-wrap gap-2 mt-2">
              {project.skills.map((skill, skillIndex) => (
                <Badge key={skillIndex} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex justify-between relative z-10">
            <Button 
              variant="outline" 
              size="sm"
              onClick={(e) => handleExternalLinkClick(e, project.demo)}
              className="flex items-center gap-2"
            >
              <ExternalLink className="h-4 w-4" /> Demo
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={(e) => handleExternalLinkClick(e, project.source)}
              className="flex items-center gap-2"
            >
              <Github className="h-4 w-4" /> Source
            </Button>
          </CardFooter>

          {/* <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <Button size="sm" className="rounded-full">
              <ArrowRight className="h-4 w-4 mr-1" /> Details
            </Button>
          </div> */}
        </Card>
      </Link>
    </motion.div>
  )
}