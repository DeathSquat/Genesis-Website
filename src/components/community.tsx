"use client"

import { ScaleIn, FadeInUp } from "./scroll-animations"
import HoverableText from "./hoverable-text"

export default function Community() {
  const stats = [
    { number: "500+", label: "Active Members" },
    { number: "50+", label: "Research Papers" },
    { number: "$2M+", label: "Grants Awarded" },
    { number: "100+", label: "Projects Built" },
    { number: "25+", label: "Partner Organizations" },
    { number: "$50M+", label: "Ecosystem Value" },
  ]

  return (
    <section id="community" className="py-32 md:py-48 bg-gradient-to-b from-background to-primary/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInUp className="text-center mb-20">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Community</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
            <HoverableText text="Our impact over the years" highlightWords={["impact"]} />
          </h2>
        </FadeInUp>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <ScaleIn key={index} delay={index * 100}>
              <div className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                <div className="relative z-10 space-y-2">
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent group-hover:scale-110 transition-transform origin-left">
                    {stat.number}
                  </div>
                  <div className="text-lg text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                    {stat.label}
                  </div>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  )
}
