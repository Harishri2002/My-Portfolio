"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { getImageUrl } from "@/lib/utils"
import { motion } from "framer-motion"

import skills from "@/data/skills.json"
import backend from "@/data/backend.json"
import programming from "@/data/programming.json"
import techTools from "@/data/tech-tools.json"

export function Experience() {
  const [activeTab, setActiveTab] = useState("frontend")

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-12 uppercase tracking-wider"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.h2>

        <Tabs defaultValue="frontend" value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Fixed mobile view by removing overflow-x-auto and using flex-nowrap */}
          <div className="w-full overflow-hidden mb-8">
            <TabsList className="w-full grid grid-cols-2 md:grid-cols-4 gap-2">
              <TabsTrigger value="frontend" className="text-xs sm:text-sm">
                Frontend()
              </TabsTrigger>
              <TabsTrigger value="backend" className="text-xs sm:text-sm">
                Backend()
              </TabsTrigger>
              <TabsTrigger value="programming" className="text-xs sm:text-sm">
                Programming()
              </TabsTrigger>
              <TabsTrigger value="tools" className="text-xs sm:text-sm">
                TechTools()
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="frontend">
            <SkillsGrid skills={skills} />
          </TabsContent>

          <TabsContent value="backend">
            <SkillsGrid skills={backend} />
          </TabsContent>

          <TabsContent value="programming">
            <SkillsGrid skills={programming} />
          </TabsContent>

          <TabsContent value="tools">
            <SkillsGrid skills={techTools} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

interface Skill {
  title: string
  imageSrc: string
}

function SkillsGrid({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {/* Removed blinking animation and replaced with mild violet background */}
          <Card className="border-2 border-primary/30 hover:scale-105 transition-transform duration-300 bg-[#4c3a8a]/10">
            <CardContent className="p-6 flex flex-col items-center">
              <div className="bg-secondary rounded-full w-24 h-24 flex items-center justify-center mb-4 transition-all duration-300 hover:shadow-[0_0_25px_white]">
                <Image
                  src={getImageUrl(skill.imageSrc) || "/placeholder.png"}
                  alt={skill.title}
                  width={75}
                  height={75}
                  className="object-contain"
                />
              </div>
              <p className="text-lg font-medium text-center">{skill.title}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}
