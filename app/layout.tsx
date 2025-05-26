import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit, Roboto } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Suspense } from "react"
import { Toaster } from "@/components/ui/toaster"
import { Analytics } from "@vercel/analytics/next"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Harishri B R",
  icons: {
    icon: "/assets/favicon/favicon.ico",
    shortcut: "/assets/favicon/favicon.ico",
    apple: "/assets/favicon/favicon.ico",
  },
  description: "Personal portfolio of Harishri B R - Full Stack Developer, Mobile App Developer, and UI/UX Designer",
  keywords: ["portfolio", "developer", "full stack", "mobile app", "UI/UX", "React", "Next.js", "Three.js"],
  authors: [{ name: "Harishri B R" }],
  creator: "Harishri B R",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://harishribr.vercel.app/",
    title: "Harishri B R",
    description: "Personal portfolio of Harishri B R - Full Stack Developer, Mobile App Developer, and UI/UX Designer",
    siteName: "Harishri B R Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harishri B R",
    description: "Personal portfolio of Harishri B R - Full Stack Developer, Mobile App Developer, and UI/UX Designer",
    creator: "@harishri",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${outfit.variable} ${roboto.variable} ${inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense>{children}</Suspense>
           <Analytics />
          <SpeedInsights />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
