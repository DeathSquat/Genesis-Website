"use client"

import type React from "react"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#hero" },
    { label: "Events", href: "#events" },
    { label: "Community", href: "#community" },
    { label: "Highlights", href: "#highlights" },
    { label: "Partners", href: "#partners" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      const targetPosition = element.getBoundingClientRect().top + window.scrollY
      const startPosition = window.scrollY
      const distance = targetPosition - startPosition
      const duration = 1200 // Increased duration for slower, smoother scrolling
      let start: number | null = null

      const animation = (currentTime: number) => {
        if (start === null) start = currentTime
        const elapsed = currentTime - start
        const progress = Math.min(elapsed / duration, 1)
        const easeInOutCubic =
          progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2
        window.scrollTo(0, startPosition + distance * easeInOutCubic)

        if (progress < 1) {
          requestAnimationFrame(animation)
        }
      }

      requestAnimationFrame(animation)
      setIsOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with zkGenesis branding */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J6ARhxLpa5E8zKDWzLVsoWOfHNREgU.png"
              alt="zkGenesis Logo"
              width={32}
              height={32}
              className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent transition-all duration-300 group-hover:from-accent group-hover:to-primary">
              zkGenesis
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 cursor-pointer relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 relative group">
              Login
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full text-sm font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
              Join Community
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 space-y-2 border-t border-border/50 animate-in fade-in slide-in-from-top-2 duration-300">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 cursor-pointer rounded-lg"
              >
                {item.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-2 px-4">
              <button className="w-full px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-all duration-300 rounded-lg hover:bg-primary/10">
                Login
              </button>
              <button className="w-full px-4 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full text-sm font-medium hover:shadow-lg hover:shadow-primary/50 transition-all duration-300">
                Join Community
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
