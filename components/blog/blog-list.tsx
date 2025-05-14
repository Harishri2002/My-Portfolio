import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import { getBlogPosts } from "@/lib/blog"

export function BlogList() {
  const posts = getBlogPosts()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <Card key={post.slug} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
          <div className="relative h-48 w-full">
            <Image
              src={post.coverImage || "/placeholder.svg"}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>

          <CardHeader>
            <div className="flex flex-wrap gap-2 mb-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <CardTitle className="line-clamp-2">{post.title}</CardTitle>
            <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </CardContent>

          <CardFooter>
            <Link href={`/blog/${post.slug}`} className="text-primary hover:underline font-medium">
              Read More
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
