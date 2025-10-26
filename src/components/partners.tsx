"use client"

import { FadeInUp, ScaleIn } from "./scroll-animations"
import HoverableText from "./hoverable-text"

const partners = [
  "Ethereum",
  "Polygon",
  "Arbitrum",
  "Optimism",
  "StarkNet",
  "zkSync",
  "Scroll",
  "Aztec",
  "Aleo",
  "Circom",
  "Noir",
  "Cairo",
]

export default function Partners() {
  return (
    <section id="partners" className="py-32 md:py-48 bg-gradient-to-b from-background to-primary/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInUp className="text-center mb-20">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Partners</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
            <HoverableText text="Our ecosystem partners" highlightWords={["ecosystem"]} />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <HoverableText
              text="Collaborating with leading projects and organizations in the Web3 space"
              highlightWords={["Web3"]}
            />
          </p>
        </FadeInUp>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {partners.map((partner, index) => (
            <ScaleIn key={index} delay={index * 80}>
              <div className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 flex items-center justify-center min-h-24 cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                <span className="relative z-10 font-semibold text-foreground text-center text-sm md:text-base group-hover:text-primary transition-colors">
                  {partner}
                </span>
              </div>
            </ScaleIn>
          ))}
        </div>

        {/* CTA */}
        <FadeInUp className="text-center">
          <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all transform hover:scale-105">
            Become a Partner
          </button>
        </FadeInUp>
      </div>
    </section>
  )
}
