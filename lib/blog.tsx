import type React from "react"

export interface BlogPostType {
  slug: string
  title: string
  date: string
  coverImage: string
  excerpt: string
  content: React.ReactNode
  tags: string[]
  readingTime: number
}

// Sample blog posts
const blogPosts: BlogPostType[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js: A Comprehensive Guide",
    date: "2023-05-15",
    coverImage: "/placeholder.svg?height=600&width=800&text=Next.js",
    excerpt: "Learn how to build modern web applications with Next.js, from setup to deployment.",
    content: (
      <>
        <p>
          Next.js has revolutionized the way we build React applications. With its file-based routing, server-side
          rendering capabilities, and optimized build process, it's become the go-to framework for many developers.
        </p>

        <h2>Why Next.js?</h2>
        <p>
          Next.js provides an excellent developer experience with all the features you need for production: hybrid
          static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.
        </p>

        <h2>Getting Started</h2>
        <p>To create a new Next.js app, run the following command:</p>
        <pre>
          <code>npx create-next-app@latest my-app</code>
        </pre>

        <p>
          This will set up a new Next.js project with all the defaults. You can now start developing your application!
        </p>

        <h2>Key Features</h2>
        <ul>
          <li>File-based routing</li>
          <li>API Routes</li>
          <li>Built-in CSS and Sass support</li>
          <li>Fast Refresh</li>
          <li>Image Optimization</li>
          <li>Internationalization</li>
          <li>Analytics</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Next.js is a powerful framework that makes building React applications a breeze. Whether you're building a
          simple landing page or a complex web application, Next.js has the tools you need to succeed.
        </p>
      </>
    ),
    tags: ["Next.js", "React", "Web Development"],
    readingTime: 5,
  },
  {
    slug: "mastering-react-three-fiber",
    title: "Mastering React Three Fiber: 3D Graphics in React",
    date: "2023-06-22",
    coverImage: "/placeholder.svg?height=600&width=800&text=React+Three+Fiber",
    excerpt:
      "Dive into the world of 3D graphics with React Three Fiber and learn how to create stunning visualizations.",
    content: (
      <>
        <p>
          React Three Fiber is a React renderer for Three.js, making it possible to write 3D graphics with React's
          component-based approach. This powerful combination allows for declarative, reusable, and maintainable 3D
          scenes.
        </p>

        <h2>Getting Started</h2>
        <p>First, install the necessary packages:</p>
        <pre>
          <code>npm install three @react-three/fiber @react-three/drei</code>
        </pre>

        <p>Now you can create your first 3D scene:</p>
        <pre>
          <code>{`import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function Box(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={'orange'} />
    </mesh>
  )
}

export default function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
      <OrbitControls />
    </Canvas>
  )
}`}</code>
        </pre>

        <h2>Advanced Techniques</h2>
        <p>React Three Fiber offers many advanced features for creating complex 3D applications:</p>
        <ul>
          <li>Physics with use-cannon</li>
          <li>Post-processing effects</li>
          <li>Performance optimization</li>
          <li>Animation systems</li>
          <li>Loading 3D models</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          React Three Fiber opens up a world of possibilities for creating interactive 3D experiences on the web. By
          combining the power of Three.js with the simplicity of React, you can build complex 3D applications with ease.
        </p>
      </>
    ),
    tags: ["React", "Three.js", "3D Graphics"],
    readingTime: 8,
  },
  {
    slug: "responsive-design-best-practices",
    title: "Responsive Design Best Practices for Modern Web Applications",
    date: "2023-07-10",
    coverImage: "/placeholder.svg?height=600&width=800&text=Responsive+Design",
    excerpt:
      "Learn the essential techniques and best practices for creating responsive web designs that work across all devices.",
    content: (
      <>
        <p>
          Responsive web design is no longer optional—it's a necessity. With users accessing websites from a variety of
          devices with different screen sizes, creating a consistent and optimized experience across all platforms is
          crucial.
        </p>

        <h2>Core Principles</h2>
        <p>Responsive design is built on three fundamental principles:</p>
        <ul>
          <li>
            <strong>Fluid Grids:</strong> Using relative units like percentages instead of fixed pixels
          </li>
          <li>
            <strong>Flexible Images:</strong> Ensuring images scale properly within their containers
          </li>
          <li>
            <strong>Media Queries:</strong> Applying different styles based on device characteristics
          </li>
        </ul>

        <h2>Modern Approaches</h2>
        <p>Today's responsive design goes beyond these basics:</p>
        <ul>
          <li>
            <strong>Mobile-First Design:</strong> Starting with the mobile experience and progressively enhancing for
            larger screens
          </li>
          <li>
            <strong>CSS Grid and Flexbox:</strong> Using modern layout tools for complex, responsive layouts
          </li>
          <li>
            <strong>Container Queries:</strong> Styling based on the parent container's size rather than the viewport
          </li>
          <li>
            <strong>Responsive Typography:</strong> Using fluid type scales that adjust based on screen size
          </li>
        </ul>

        <h2>Testing and Optimization</h2>
        <p>
          Always test your responsive designs on real devices. Browser developer tools are helpful, but nothing beats
          seeing how your site performs on actual hardware. Consider these testing approaches:
        </p>
        <ul>
          <li>Cross-device testing</li>
          <li>Performance testing on low-end devices</li>
          <li>Accessibility testing across breakpoints</li>
        </ul>

        <h2>Conclusion</h2>
        <p>
          Responsive design is an ongoing process, not a one-time implementation. By following these best practices and
          continuously refining your approach, you can create web experiences that delight users across all devices.
        </p>
      </>
    ),
    tags: ["CSS", "Responsive Design", "Web Development"],
    readingTime: 6,
  },
]

export function getBlogPosts(): BlogPostType[] {
  return blogPosts
}

export function getBlogPost(slug: string): BlogPostType | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
