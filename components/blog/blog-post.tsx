import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import type { BlogPostType } from "@/lib/blog"

interface BlogPostProps {
  post: BlogPostType
}

export function BlogPost({ post }: BlogPostProps) {
  return (
    <article className="max-w-4xl mx-auto">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/blog" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" /> Back to all posts
        </Link>
      </Button>

      <div className="relative h-[400px] w-full mb-8 rounded-lg overflow-hidden">
        <Image
          src={post.coverImage || "/placeholder.svg"}
          alt={post.title}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>

      <div className="flex items-center gap-6 text-muted-foreground mb-8">
        <div className="flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          <span>{post.readingTime} min read</span>
        </div>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none">{post.content}</div>
    </article>
  )
}
