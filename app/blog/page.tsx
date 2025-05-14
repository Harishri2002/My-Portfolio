import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BlogList } from "@/components/blog/blog-list"

export const metadata: Metadata = {
  title: "Blog | Harishri B R",
  description:
    "Read articles and insights from Harishri B R on web development, mobile app development, and UI/UX design",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        <p className="text-lg mb-8">
          Sharing my thoughts, experiences, and insights on web development, mobile app development, and UI/UX design.
        </p>
        <BlogList />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
