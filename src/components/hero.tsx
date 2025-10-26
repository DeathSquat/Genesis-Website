"use client"

import { ArrowRight } from "lucide-react"
import { FadeInUp, SlideInLeft } from "./scroll-animations"
import HoverableText from "./hoverable-text"

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden py-16 md:py-32 px-4 sm:px-6 lg:px-8 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <SlideInLeft className="space-y-8">
            <FadeInUp delay={100}>
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary/10 border border-primary/30 text-primary rounded-full text-xs font-semibold uppercase tracking-widest">
                  Welcome to zkGenesis
                </span>
              </div>
            </FadeInUp>

            <FadeInUp delay={200}>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                <HoverableText text="Building the future of zero-knowledge" highlightWords={["zero-knowledge"]} />
              </h1>
            </FadeInUp>

            <FadeInUp delay={300}>
              <p className="text-lg text-foreground/70 max-w-lg leading-relaxed">
                <HoverableText
                  text="Join a thriving community of developers, researchers, and entrepreneurs building privacy-preserving solutions on Web3. Learn, collaborate, and innovate with the latest zero-knowledge proof technologies."
                  highlightWords={["privacy-preserving", "Web3", "zero-knowledge"]}
                />
              </p>
            </FadeInUp>

            <FadeInUp delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 flex items-center justify-center gap-2 group">
                  Join an upcoming event
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-primary/50 text-foreground rounded-full font-semibold hover:bg-primary/10 hover:border-primary transition-all duration-300">
                  Learn more
                </button>
              </div>
            </FadeInUp>

            {/* Stats */}
            <FadeInUp delay={500}>
              <div className="grid grid-cols-3 gap-6 pt-12">
                <div className="space-y-2 group cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    500+
                  </div>
                  <div className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                    Community Members
                  </div>
                </div>
                <div className="space-y-2 group cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    50+
                  </div>
                  <div className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                    Research Papers
                  </div>
                </div>
                <div className="space-y-2 group cursor-pointer">
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    $2M+
                  </div>
                  <div className="text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors">
                    Grants Awarded
                  </div>
                </div>
              </div>
            </FadeInUp>
          </SlideInLeft>

          {/* Right Visual */}
          <div className="relative h-96 md:h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-3xl blur-3xl"></div>
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary via-accent to-primary rounded-3xl opacity-10 blur-3xl animate-pulse"></div>
              <div
                className="absolute w-48 h-48 md:w-64 md:h-64 border-2 border-primary/40 rounded-3xl animate-spin"
                style={{ animationDuration: "20s" }}
              ></div>
              <div
                className="absolute w-32 h-32 md:w-48 md:h-48 border-2 border-accent/40 rounded-3xl animate-spin"
                style={{ animationDuration: "15s", animationDirection: "reverse" }}
              ></div>
              <div className="absolute w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full shadow-lg shadow-primary/50 animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
