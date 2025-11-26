"use client"

import { Calendar, MapPin, Users } from "lucide-react"
import { FadeInUp, ScaleIn } from "./scroll-animations"
import HoverableText from "./hoverable-text"

interface Event {
  id: number;
  type: string;
  title: string;
  date: string;
  location: string;
  participants: string;
  badge: string;
  image: string;
  link: string;
  tagline: string;
}

const events: Event[] = [
  {
    id: 1,
    type: "Hackathon",
    title: "Duality Hackathon",
    date: "Dec 13, 2025",
    location: "Thoughtworks, Gurugram",
    participants: "200+",
    badge: "LIVE NOW",
    image: "/Duality.jpg",
    link: "https://www.commudle.com/communities/genesis/hackathons/duality",
    tagline: "Let's conquer the space with Duality",
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
              <div
                className="group relative bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 hover:scale-105 cursor-pointer min-h-[500px] flex flex-col"
                onClick={() => window.open(event.link, '_blank')}
              >
                {/* Banner Image */}
                <div 
                  className="h-48 w-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${event.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent"></div>
                </div>
                
                {/* Content Container */}
                <div className="p-6 flex-1 flex flex-col bg-gradient-to-b from-card to-card/90">

                  {/* Badge */}
                  <div className="mb-2">
                    <span className="px-3 py-1 bg-red-500 text-white rounded-full text-xs font-bold uppercase inline-flex items-center">
                      <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                      {event.badge}
                    </span>
                  </div>

                  {/* Type */}
                  <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-1">
                    {event.type}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    <HoverableText 
                      text={event.title} 
                      highlightWords={[event.title.split(' ')[0]]} 
                      className="text-foreground hover:text-primary transition-colors"
                    />
                  </h3>

                  {/* Tagline */}
                  <p className="text-muted-foreground mb-4">{event.tagline}</p>

                  {/* Details */}
                  <div className="mt-auto pt-4 border-t border-border/30">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <Calendar size={16} />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Date</div>
                          <div className="font-medium text-foreground">{event.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <MapPin size={16} />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Location</div>
                          <div className="font-medium text-foreground">{event.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 group">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                          <Users size={16} />
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground">Participants</div>
                          <div className="font-medium text-foreground">{event.participants} expected</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-6 px-4 py-2 bg-primary/10 text-primary rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 group/btn inline-block text-center"
                  >
                    Register Now
                  </a>
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
