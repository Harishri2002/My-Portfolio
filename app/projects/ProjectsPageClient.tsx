"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { ProjectsDetailed } from "@/components/sections/projects-detailed"
import { motion } from "framer-motion"

export default function ProjectsPageClient() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 py-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <h1 className="text-4xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl">
            Explore my portfolio of projects spanning web development, mobile applications, and UI/UX design. Each
            project represents my passion for creating intuitive, efficient, and visually appealing digital experiences.
          </p>
        </motion.div>
        <ProjectsDetailed />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
