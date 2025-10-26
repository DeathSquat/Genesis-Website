"use client"

import { Play } from "lucide-react"
import { FadeInUp, ScaleIn } from "./scroll-animations"
import HoverableText from "./hoverable-text"

const highlights = [
  {
    id: 1,
    date: "Oct 15, 2025",
    event: "zkProof Workshop",
    title: "Advanced ZK Circuits Design",
    speaker: "Dr. Alice Chen",
    thumbnail: "/zero-knowledge-proof-circuit.jpg",
  },
  {
    id: 2,
    date: "Sep 28, 2025",
    event: "Privacy Summit",
    title: "The Future of Privacy Tech",
    speaker: "Bob Johnson",
    thumbnail: "/privacy-technology-future.jpg",
  },
  {
    id: 3,
    date: "Sep 10, 2025",
    event: "Community Meetup",
    title: "Building with zkSNARKs",
    speaker: "Carol Williams",
    thumbnail: "/zk-snarks-development.jpg",
  },
]

export default function Highlights() {
  return (
    <section id="highlights" className="py-32 md:py-48 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInUp className="text-center mb-20">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Highlights</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
            <HoverableText text="What our community is excited about" highlightWords={["community", "excited"]} />
          </h2>
        </FadeInUp>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <ScaleIn key={highlight.id} delay={index * 150}>
              <div className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20">
                {/* Thumbnail */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={highlight.thumbnail || "/placeholder.svg"}
                    alt={highlight.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                    <button className="w-12 h-12 bg-primary rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors transform group-hover:scale-110">
                      <Play size={20} className="text-primary-foreground fill-primary-foreground" />
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{highlight.date}</span>
                    <span className="text-primary font-semibold">{highlight.event}</span>
                  </div>

                  <h3 className="text-lg font-bold text-foreground line-clamp-2">
                    <HoverableText text={highlight.title} highlightWords={["ZK", "Privacy"]} />
                  </h3>

                  <p className="text-sm text-muted-foreground">by {highlight.speaker}</p>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  )
}
