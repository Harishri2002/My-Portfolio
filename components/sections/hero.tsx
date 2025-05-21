"use client"

import { useTypewriter, Cursor } from "react-simple-typewriter"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SpaceCanvas } from "@/components/three-d/space-canvas"
import { Download, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

export function Hero() {
  const [text] = useTypewriter({
    words: ["Harishri B R", "a Developer", "a Designer", "Creative Thinker"],
    typeSpeed: 120,
    deleteSpeed: 80,
  })

  return (
    <section className="relative min-h-screen pt-24 flex items-center">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          className="z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              {text}
              <Cursor cursorStyle="<" cursorColor="#FFFFFF" />
            </span>
          </h1>

          <p className="text-lg md:text-xl mb-8 max-w-xl">
            Meet Harishri – a tech enthusiast with a flair for crafting awesome web experiences and addictive games.
            Always on the lookout for the next big thing in tech, he's constantly pushing boundaries and creating cool
            stuff. Get ready to be wowed by his creativity and passion as he takes the world of technology by storm!
          </p>

          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary transition-all duration-300"
            >
              <a
                href="https://drive.google.com/uc?export=download&id=11NtVOKjPxUwd_q5apv2l6PpmFhP7KqFf"
                download
                aria-label="Download Resume"
                className="flex items-center gap-2"
              >
                <Download className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                <span>Download Resume</span>
                <span className="absolute bottom-0 left-0 h-1 w-0 bg-white/30 transition-all duration-300 group-hover:w-full"></span>
              </a>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="group border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <Link href="/projects" className="flex items-center gap-2">
                <ExternalLink className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                <span>View Projects</span>
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="hidden lg:block h-[80vh] z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <SpaceCanvas />
        </motion.div>
      </div>

      <div className="top-blur"></div>
      <div className="bottom-blur"></div>
    </section>
  )
}
