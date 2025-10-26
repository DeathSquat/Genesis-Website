"use client"

import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[9999] bg-background flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-background animate-pulse"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">
        {/* Logo with animation */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-50 animate-pulse"></div>
          <div className="relative bg-background rounded-full p-6 border-2 border-primary/50">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J6ARhxLpa5E8zKDWzLVsoWOfHNREgU.png"
              alt="zkGenesis"
              width={80}
              height={80}
              className="w-20 h-20 animate-pulse"
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">zkGenesis</h1>
          <p className="text-lg text-foreground/60">Initializing the future of zero-knowledge...</p>
        </div>

        {/* Animated loading bar */}
        <div className="w-64 h-1 bg-border rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary via-accent to-primary animate-shimmer"></div>
        </div>

        {/* Loading dots */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
