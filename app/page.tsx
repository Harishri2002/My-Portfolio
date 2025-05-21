import { Suspense } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Experience } from "@/components/sections/experience"
import { Projects } from "@/components/sections/projects"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { PageLoader } from "@/components/page-loader"
import { EasterEgg } from "@/components/easter-egg"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Suspense fallback={null}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
        <EasterEgg />
      </Suspense>
    </main>
  )
}
