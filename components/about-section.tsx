'use client'

import { useState, useRef, useEffect } from 'react'
import {
  ShieldCheck,
  Server,
  Database,
  Headphones,
  Compass,
  CheckCircle2,
  Sparkles,
  ArrowRight,
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
  const [isDragging, setIsDragging] = useState(false)
  const isInteractingRef = useRef(false)
  const startXRef = useRef(0)
  const startScrollLeftRef = useRef(0)
  const hasMovedRef = useRef(false)
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Quadruple items to create a seamless infinite loop
  const carouselClients = [
    ...data.clients,
    ...data.clients,
    ...data.clients,
    ...data.clients,
  ]

  // Continuous auto-sliding animation with smooth requestAnimationFrame
  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let animationFrameId: number

    const step = () => {
      if (!isInteractingRef.current && container) {
        // Continuous slow glide: ~0.65px per frame
        container.scrollLeft += 0.65

        // Seamless wrap: when halfway through the 4 sets, jump back by half
        const halfWidth = container.scrollWidth / 2
        if (halfWidth > 0 && container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth
        }
      }
      animationFrameId = requestAnimationFrame(step)
    }

    animationFrameId = requestAnimationFrame(step)

    return () => {
      cancelAnimationFrame(animationFrameId)
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    }
  }, [])

  const checkWrap = () => {
    const container = scrollRef.current
    if (!container) return
    const halfWidth = container.scrollWidth / 2
    if (halfWidth <= 0) return

    if (container.scrollLeft >= halfWidth * 1.5) {
      container.scrollLeft -= halfWidth
    } else if (container.scrollLeft <= 10) {
      container.scrollLeft += halfWidth
    }
  }

  // Mouse Drag Handlers
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = scrollRef.current
    if (!container) return

    isInteractingRef.current = true
    setIsDragging(true)
    hasMovedRef.current = false
    startXRef.current = e.pageX - container.offsetLeft
    startScrollLeftRef.current = container.scrollLeft

    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return
    const container = scrollRef.current
    if (!container) return

    e.preventDefault()
    const x = e.pageX - container.offsetLeft
    const walk = (x - startXRef.current) * 1.2
    if (Math.abs(walk) > 4) {
      hasMovedRef.current = true
    }

    container.scrollLeft = startScrollLeftRef.current - walk

    const halfWidth = container.scrollWidth / 2
    if (halfWidth > 0) {
      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft -= halfWidth
        startScrollLeftRef.current -= halfWidth
      } else if (container.scrollLeft <= 0) {
        container.scrollLeft += halfWidth
        startScrollLeftRef.current += halfWidth
      }
    }
  }

  const handleMouseUp = () => {
    if (!isDragging) return
    setIsDragging(false)
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false
    }, 1200)
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
      resumeTimeoutRef.current = setTimeout(() => {
        isInteractingRef.current = false
      }, 1200)
    }
  }

  // Touch Handlers for mobile & tablet swipe
  const handleTouchStart = () => {
    isInteractingRef.current = true
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current)
    }
  }

  const handleTouchEnd = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false
    }, 1200)
  }

  const handleWheel = () => {
    isInteractingRef.current = true
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current)
    resumeTimeoutRef.current = setTimeout(() => {
      isInteractingRef.current = false
    }, 1200)
    checkWrap()
  }

  const handleClientClick = (client: (typeof data.clients)[0], e: React.MouseEvent) => {
    // If the user was dragging/sliding, cancel link opening
    if (hasMovedRef.current) {
      e.preventDefault()
      e.stopPropagation()
      return
    }

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
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
            Enterprise & Industrial Environments
          </h3>
          <p className="text-xs md:text-sm text-muted-foreground">
            Organizations and enterprise environments where I have delivered hands-on technical solutions.
          </p>
        </div>

        {/* Scrollable Container with continuous auto-scroll and full user drag/swipe control */}
        <div
          ref={scrollRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onWheel={handleWheel}
          onScroll={checkWrap}
          className={`flex gap-4 overflow-x-auto py-3 px-1 scrollbar-none select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          {carouselClients.map((client, index) => {
            const isLoading = loadingClient === client.name
            const isDangote = client.name.includes('Dangote')
            const isMolchec = client.name.includes('Molchec')

            return (
              <a
                key={`${client.name}-${index}`}
                href={client.url}
                target={client.url?.startsWith('http') ? '_blank' : undefined}
                rel={client.url?.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={(e) => handleClientClick(client, e)}
                className={`flex-shrink-0 w-48 md:w-56 h-36 md:h-40 bg-card hover:bg-secondary/70 rounded-2xl md:rounded-3xl border border-border hover:border-accent flex flex-col items-center justify-between p-4 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group relative cursor-pointer select-none overflow-hidden ${
                  isLoading ? 'ring-2 ring-accent scale-[0.98]' : ''
                }`}
                title={`Visit official website: ${client.name}`}
              >
                {/* Subtle Interactive Status Corner Badge */}
                <div className="absolute top-2.5 right-2.5 flex items-center gap-1 z-10 pointer-events-none">
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

                {/* Logo Badge Container with Curved Corners and Solid Background */}
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-2xl overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xs pointer-events-none"
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
                    draggable={false}
                    className={`select-none pointer-events-none ${
                      isDangote || isMolchec
                        ? 'w-full h-full object-cover'
                        : 'max-h-full max-w-full p-2 object-contain'
                    }`}
                  />
                </div>

                {/* Client Name and Category */}
                <div className="text-center w-full px-1 pointer-events-none">
                  <h4 className="text-xs md:text-sm font-bold text-foreground group-hover:text-accent transition-colors truncate">
                    {client.name}
                  </h4>
                  <p className="text-[10px] text-muted-foreground font-medium truncate mt-0.5">
                    {(client as any).category || 'Enterprise Partner'}
                  </p>
                </div>

                {/* Subtle Interactive Loading / Click Feedback Shimmer Bar */}
                <div
                  className={`w-full h-0.5 rounded-full transition-all duration-300 pointer-events-none ${
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
