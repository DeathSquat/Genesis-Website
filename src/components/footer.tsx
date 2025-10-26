"use client"

import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react"
import { FadeInUp } from "./scroll-animations"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Product: ["Events", "Community", "Research", "Grants"],
    Company: ["About", "Blog", "Careers", "Contact"],
    Resources: ["Documentation", "Tutorials", "FAQ", "Support"],
    Legal: ["Privacy", "Terms", "Cookies", "Disclaimer"],
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gradient-to-b from-background to-foreground/5 border-t border-border/50 py-20 md:py-24 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <FadeInUp className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-J6ARhxLpa5E8zKDWzLVsoWOfHNREgU.png"
                alt="zkGenesis Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div>
                <span className="font-bold text-xl text-foreground">zkGenesis</span>
                <p className="text-xs text-foreground/60">Privacy-First Web3</p>
              </div>
            </div>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Building the future of zero-knowledge technology and privacy-preserving solutions for Web3.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Github size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </FadeInUp>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <FadeInUp key={category} delay={index * 100} className="space-y-4">
              <h4 className="font-semibold text-sm uppercase tracking-wider text-foreground">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      {link}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                    </a>
                  </li>
                ))}
              </ul>
            </FadeInUp>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border/50 pt-8 mb-8">
          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <FadeInUp className="text-sm text-foreground/70">
              © {currentYear} zkGenesis. All rights reserved. Building privacy-first Web3.
            </FadeInUp>

            <FadeInUp className="flex gap-6">
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-foreground/70 hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
            </FadeInUp>

            {/* Scroll to Top Button */}
            <FadeInUp>
              <button
                onClick={handleScrollToTop}
                className="p-3 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
            </FadeInUp>
          </div>
        </div>

        {/* Footer Accent */}
        <div className="mt-8 pt-8 border-t border-border/30 text-center">
          <p className="text-xs text-foreground/50">
            Empowering the next generation of privacy-preserving Web3 applications
          </p>
        </div>
      </div>
    </footer>
  )
}
