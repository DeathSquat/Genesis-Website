"use client"

import { Calendar, MapPin, Users } from "lucide-react"
import { FadeInUp, ScaleIn } from "./scroll-animations"
import HoverableText from "./hoverable-text"

const events = [
  {
    id: 1,
    type: "Hackathon",
    title: "zkProof Hackathon 2025",
    date: "Nov 15-17, 2025",
    location: "San Francisco",
    participants: "200+",
    badge: "UPCOMING",
  },
  {
    id: 2,
    type: "Workshop",
    title: "ZK Fundamentals Bootcamp",
    date: "Oct 20-22, 2025",
    location: "Virtual",
    participants: "500+",
    badge: "VIRTUAL",
  },
  {
    id: 3,
    type: "Conference",
    title: "Privacy Tech Summit",
    date: "Dec 5-7, 2025",
    location: "New York",
    participants: "1000+",
    badge: "FEATURED",
  },
]

export default function Events() {
  return (
    <section id="events" className="py-32 md:py-48 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeInUp className="text-center mb-20">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Events</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-6 text-balance">
            <HoverableText text="Upcoming Hackathons & Summits" highlightWords={["Hackathons", "Summits"]} />
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <HoverableText
              text="Join our community events to learn, network, and build the future of zero-knowledge technology"
              highlightWords={["community", "zero-knowledge"]}
            />
          </p>
        </FadeInUp>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <ScaleIn key={event.id} delay={index * 150}>
              <div className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 overflow-hidden">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="relative z-10 space-y-4">
                  {/* Badge */}
                  <div className="inline-block">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold uppercase">
                      {event.badge}
                    </span>
                  </div>

                  {/* Type */}
                  <div className="text-sm font-semibold text-primary uppercase tracking-wider">{event.type}</div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground">
                    <HoverableText text={event.title} highlightWords={["zkProof", "ZK", "Privacy"]} />
                  </h3>

                  {/* Details */}
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 group/detail cursor-pointer hover:text-foreground transition-colors">
                      <Calendar size={16} className="text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 group/detail cursor-pointer hover:text-foreground transition-colors">
                      <MapPin size={16} className="text-primary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 group/detail cursor-pointer hover:text-foreground transition-colors">
                      <Users size={16} className="text-primary" />
                      <span>{event.participants} expected</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <button className="w-full mt-6 px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn">
                    Learn More
                  </button>
                </div>
              </div>
            </ScaleIn>
          ))}
        </div>

        {/* View All Button */}
        <FadeInUp className="text-center">
          <button className="px-8 py-3 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-lg hover:shadow-primary/30">
            View all events
          </button>
        </FadeInUp>
      </div>
    </section>
  )
}
