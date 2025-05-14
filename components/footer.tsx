"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, Heart, Code, Coffee } from "lucide-react"
import { motion } from "framer-motion"
import { RocketAnimation } from "./animations/rocket-animation"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const [showRocketAnimation, setShowRocketAnimation] = useState(false)

  const handleEasterEggClick = () => {
    setShowRocketAnimation(true)
  }

  return (
    <footer className="relative bg-gradient-to-t from-muted/80 to-muted/30 py-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -left-20 top-10 w-40 h-40 rounded-full bg-primary/5 blur-3xl"></div>
        <div className="absolute right-20 bottom-10 w-60 h-60 rounded-full bg-primary/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary">Portfolio</h3>
            <p className="text-muted-foreground">
              A showcase of my skills, projects, and experiences as a Full Stack Developer, Mobile App Developer, and
              UI/UX Designer.
            </p>
            <div className="mt-4 flex items-center text-sm text-muted-foreground">
              <Code className="h-4 w-4 mr-2" />
              <span>Built with Next.js, Tailwind CSS & Three.js</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors relative group"
                  >
                    <span>{link.label}</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4 text-primary">Connect</h3>
            <div className="flex flex-col space-y-4">
              <a
                href="https://github.com/Harishri2002"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 mr-3" />
                <span>github.com/Harishri2002</span>
              </a>
              <a
                href="https://www.linkedin.com/in/harishri-b-r"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 mr-3" />
                <span>linkedin.com/in/harishri-b-r</span>
              </a>
              <a
                href="mailto:harishribr4@gmail.com"
                className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 mr-3" />
                <span>harishribr4@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </div>

        <div className="border-t border-border/50 mt-8 pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            <span>&copy; {currentYear} Harishri B R. All rights reserved.</span>
            <span className="inline-flex items-center">
              Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> and{" "}
              <Coffee className="h-4 w-4 text-amber-700 mx-1" />
            </span>
          </p>
          <div className="text-xs mt-2 text-muted-foreground/70">
            <button
              onClick={handleEasterEggClick}
              className="hover:text-primary transition-colors cursor-pointer relative overflow-hidden group"
            >
              <span>Click me for a surprise</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Rocket Animation */}
      <RocketAnimation isActive={showRocketAnimation} onComplete={() => setShowRocketAnimation(false)} />
    </footer>
  )
}
