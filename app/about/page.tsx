import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { AboutDetailed } from "@/components/sections/about-detailed"

export const metadata: Metadata = {
  title: "About | Harishri B R",
  description: "Learn more about Harishri B R - Full Stack Developer, Mobile App Developer, and UI/UX Designer",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        <AboutDetailed />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
