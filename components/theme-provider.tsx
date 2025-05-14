"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {/* Added a div with transition for smoother theme changes */}
      <div className="transition-colors duration-500 ease-in-out min-h-screen">{children}</div>
    </NextThemesProvider>
  )
}
