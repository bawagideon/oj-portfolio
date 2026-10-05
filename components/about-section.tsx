'use client'

import { useState, useRef } from 'react'
import {
  ShieldCheck,
  Server,
  Database,
  Headphones,
  Compass,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Loader2,
} from 'lucide-react'
import { aboutData } from '@/lib/portfolio-data'

interface AboutSectionProps {
  data?: typeof aboutData
}

export function AboutSection({ data = aboutData }: AboutSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [loadingClient, setLoadingClient] = useState<string | null>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handleClientClick = (client: (typeof data.clients)[0], e: React.MouseEvent) => {
    if (!client.url) return
    setLoadingClient(client.name)

    if (client.url.startsWith('#')) {
      e.preventDefault()
      const element = document.querySelector(client.url)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
      setTimeout(() => setLoadingClient(null), 800)
      return
    }

    // For external websites, provide subtle loading feedback before/during navigation
    setTimeout(() => {
      setLoadingClient(null)
    }, 1200)
  }

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-accent text-xs md:text-sm font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Professional Profile & Background</span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">About Me</h2>
        <div className="w-12 h-1 bg-accent rounded-full mb-6" />

        {/* Narrative Paragraphs */}
        <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
          {data.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>

      {/* Career Objective & Research Interests Bento Card */}
      <div className="p-6 md:p-8 bg-gradient-to-br from-secondary/80 via-secondary/40 to-background rounded-2xl md:rounded-3xl border border-border relative overflow-hidden shadow-sm">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl pointer-events-none" />

        {/* Objective */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
              <Compass className="w-4 h-4" />
            </div>
            <h3 className="text-base md:text-lg font-bold text-foreground">Career Objective</h3>
          </div>
          <p className="text-sm md:text-base text-muted-foreground/90 italic pl-4 border-l-2 border-accent leading-relaxed">
            "{data.objective}"
          </p>
        </div>

        {/* Research Interests & Objective Focus */}
        <div>
          <h4 className="text-xs md:text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
            Research Interests & Core Focus Areas
          </h4>
          <div className="flex flex-wrap gap-2">
            {data.researchInterests.map((interest, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-background border border-border text-xs md:text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-all duration-200"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Key Metric Stats Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
        {data.stats.map((stat, index) => (
          <div
            key={index}
            className="p-4 md:p-5 bg-secondary/50 rounded-2xl border border-border/80 text-center hover:border-accent transition-all duration-300 hover:shadow-md"
          >
            <div className="text-2xl md:text-3xl font-extrabold text-foreground mb-1 tracking-tight">
              {stat.value}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground font-medium">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* What I'm Doing (Core Services) */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground">Core Competencies & Services</h3>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">
              End-to-end expertise spanning Enterprise ERP, Security, and Mission-Critical Infrastructure
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {data.services.map((service, index) => (
            <div
              key={index}
              className="group flex flex-col sm:flex-row gap-4 md:gap-5 p-5 md:p-6 bg-secondary/60 hover:bg-secondary rounded-2xl md:rounded-3xl border border-border hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              <div className="w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-2xl bg-background/80 p-2.5 border border-border group-hover:scale-105 transition-transform flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-contain drop-shadow"
                />
              </div>
              <div>
                <h4 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Endorsements & Testimonials */}
      <div>
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Professional Endorsements</h3>
        <p className="text-xs md:text-sm text-muted-foreground mb-6">
          Feedback from supervisors, project leads, and colleagues across enterprise environments
        </p>

        <div className="relative overflow-hidden py-2">
          <div className="flex gap-4 animate-marquee hover:[animation-play-state:paused]">
            {[...data.testimonials, ...data.testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 md:w-96 p-5 md:p-6 bg-secondary/70 rounded-2xl border border-border hover:border-accent/60 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src={testimonial.avatar || '/placeholder.svg'}
                      alt={testimonial.name}
                      className="w-11 h-11 rounded-xl object-cover border border-border"
                    />
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-[11px] md:text-xs text-accent font-medium">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industrial & Enterprise Clients */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
              Enterprise & Industrial Environments
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground">
              Organizations and institutions where I have delivered hands-on technical solutions. Click to visit official websites.
            </p>
          </div>

          {/* Manual Scroll Controls (No auto sliding) */}
          <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-auto">
            <span className="text-[11px] text-muted-foreground font-medium mr-1 hidden sm:inline">
              Scroll to explore
            </span>
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-xl bg-secondary hover:bg-accent/20 border border-border hover:border-accent text-foreground flex items-center justify-center transition-all active:scale-95 shadow-xs"
              aria-label="Scroll Left"
              title="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-xl bg-secondary hover:bg-accent/20 border border-border hover:border-accent text-foreground flex items-center justify-center transition-all active:scale-95 shadow-xs"
              aria-label="Scroll Right"
              title="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Container (Interactive, clickable, no auto-scrolling) */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth py-3 px-1 scrollbar-none snap-x snap-mandatory"
        >
          {data.clients.map((client, index) => {
            const isLoading = loadingClient === client.name
            const isDangote = client.name.includes('Dangote')
            const isMolchec = client.name.includes('Molchec')

            return (
              <a
                key={index}
                href={client.url}
                target={client.url?.startsWith('http') ? '_blank' : undefined}
                rel={client.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={(e) => handleClientClick(client, e)}
                className={`flex-shrink-0 snap-start w-48 md:w-56 h-36 md:h-40 bg-card hover:bg-secondary/70 rounded-2xl md:rounded-3xl border border-border hover:border-accent flex flex-col items-center justify-between p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative cursor-pointer overflow-hidden ${
                  isLoading ? 'ring-2 ring-accent scale-[0.98]' : ''
                }`}
                title={`Visit official website: ${client.name}`}
              >
                {/* Subtle Interactive Status Corner Badge */}
                <div className="absolute top-2.5 right-2.5 flex items-center gap-1 z-10">
                  {isLoading ? (
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-accent bg-accent/15 px-2 py-0.5 rounded-full animate-pulse">
                      <Loader2 className="w-3 h-3 animate-spin" />
                      <span>Opening...</span>
                    </span>
                  ) : (
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-1 rounded-full bg-secondary text-muted-foreground group-hover:text-accent">
                      <ExternalLink className="w-3 h-3" />
                    </span>
                  )}
                </div>

                {/* Logo Badge Container with Curved Corners and Matching Solid Background */}
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xs"
                  style={{
                    backgroundColor: isDangote
                      ? '#1c174d'
                      : isMolchec
                      ? '#738c9d'
                      : (client as any).badgeBg || '#ffffff',
                  }}
                >
                  <img
                    src={client.logo}
                    alt={client.name}
                    className={`max-h-full max-w-full ${
                      isDangote
                        ? 'w-full h-full object-cover'
                        : isMolchec
                        ? 'w-full h-full object-cover'
                        : 'p-1.5 object-contain'
                    }`}
                  />
                </div>

                {/* Client Name and Category */}
                <div className="text-center w-full px-1">
                  <h4 className="text-xs md:text-sm font-bold text-foreground group-hover:text-accent transition-colors truncate">
                    {client.name}
                  </h4>
                  <p className="text-[10px] text-muted-foreground font-medium truncate mt-0.5">
                    {(client as any).category || 'Enterprise Partner'}
                  </p>
                </div>

                {/* Subtle Interactive Loading / Click Feedback Shimmer Bar */}
                <div
                  className={`w-full h-0.5 rounded-full transition-all duration-300 ${
                    isLoading
                      ? 'bg-accent animate-pulse'
                      : 'bg-transparent group-hover:bg-accent/40'
                  }`}
                />
              </a>
            )
          })}
        </div>
      </div>
    </div>
  )
}
