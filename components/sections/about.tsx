"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WorkstationCanvas } from "@/components/three-d/workstation-canvas"
import { Cpu, Smartphone, Palette } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 uppercase tracking-wider">About</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="h-[50vh] bg-card/5 rounded-lg">
            <WorkstationCanvas />
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-r from-primary/20 to-transparent p-6 rounded-lg transition-all duration-300 hover:from-primary/30">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Full Stack Developer</h3>
                  <p className="text-muted-foreground">
                    I am a Full Stack Developer with experience building fully functional websites using modern
                    technologies like React, Next.js, Node.js, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-transparent p-6 rounded-lg transition-all duration-300 hover:from-primary/30">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Smartphone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Mobile App Development</h3>
                  <p className="text-muted-foreground">
                    I create mobile applications powered by React Native, delivering smooth and responsive experiences
                    across iOS and Android platforms.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/20 to-transparent p-6 rounded-lg transition-all duration-300 hover:from-primary/30">
              <div className="flex items-start gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
                  <p className="text-muted-foreground">
                    I have expertise in UI/UX design, creating intuitive and engaging interfaces, and have also worked
                    on 3D modeling projects, applying my skills in both areas separately.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild variant="outline">
              <Link href="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
