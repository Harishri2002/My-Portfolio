import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Fix the URL construction issue
export function getImageUrl(path: string) {
  // In Next.js, we can simply return the path relative to the public directory
  return `/assets/${path}`
}
