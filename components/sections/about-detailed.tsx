import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AboutDetailed() {
  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who I Am</h2>
          <p className="text-lg mb-4">
            I'm Harishri B R, a passionate Full Stack Developer with expertise in building modern web applications,
            mobile apps, and creating engaging user experiences.
          </p>
          <p className="text-lg mb-4">
            With a strong foundation in both frontend and backend technologies, I enjoy bringing ideas to life through
            clean, efficient, and maintainable code.
          </p>
          <p className="text-lg">
            I'm constantly learning and exploring new technologies to stay at the forefront of the rapidly evolving tech
            landscape.
          </p>
        </div>
        <div className="relative h-80 w-full rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=400&width=400"
            alt="Harishri B R"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6">My Journey</h2>
        <div className="relative border-l-2 border-primary/50 pl-8 space-y-12 ml-4">
          <div className="relative">
            <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-primary"></div>
            <h3 className="text-2xl font-semibold">Education</h3>
            <p className="text-muted-foreground mb-4">2018 - 2022</p>
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-medium mb-2">Bachelor of Computer Science</h4>
                <p className="text-muted-foreground">
                  Graduated with honors, focusing on web development, algorithms, and software engineering principles.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-primary"></div>
            <h3 className="text-2xl font-semibold">Career Start</h3>
            <p className="text-muted-foreground mb-4">2022 - 2023</p>
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-medium mb-2">Junior Developer</h4>
                <p className="text-muted-foreground">
                  Started my professional journey working on web applications and learning industry best practices.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-primary"></div>
            <h3 className="text-2xl font-semibold">Present</h3>
            <p className="text-muted-foreground mb-4">2023 - Present</p>
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-medium mb-2">Full Stack Developer</h4>
                <p className="text-muted-foreground">
                  Currently working on cutting-edge web and mobile applications, continuously expanding my skill set.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6">My Skills</h2>
        <Tabs defaultValue="frontend">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="programming">Programming</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="frontend" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {["HTML", "CSS", "React", "Tailwind", "React Native"].map((skill) => (
                <SkillCard key={skill} name={skill} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="backend" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {["Node.js", "MongoDB", "Express", "MySQL", "PHP"].map((skill) => (
                <SkillCard key={skill} name={skill} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="programming" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {["JavaScript", "Python", "C++", "Java", "C"].map((skill) => (
                <SkillCard key={skill} name={skill} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tools" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {["Git", "NPM", "Vite.js", "GitHub", "VS Code", "Figma"].map((skill) => (
                <SkillCard key={skill} name={skill} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

function SkillCard({ name }: { name: string }) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6 flex flex-col items-center">
        <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
          <Image
            src={`/placeholder.svg?height=50&width=50&text=${name}`}
            alt={name}
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>
        <p className="font-medium text-center">{name}</p>
      </CardContent>
    </Card>
  )
}
