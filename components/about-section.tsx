'use client'

import {
  ShieldCheck,
  Server,
  Database,
  Headphones,
  Compass,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from 'lucide-react'
import { aboutData } from '@/lib/portfolio-data'

interface AboutSectionProps {
  data?: typeof aboutData
}

export function AboutSection({ data = aboutData }: AboutSectionProps) {
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
        <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
          Enterprise & Industrial Environments
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground mb-6">
          Organizations and project environments where I have delivered hands-on technical solutions
        </p>

        <div className="relative overflow-hidden py-3">
          <div className="flex gap-4 md:gap-6 animate-marquee-slow hover:[animation-play-state:paused]">
            {[...data.clients, ...data.clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 md:w-48 h-24 md:h-28 bg-secondary/80 hover:bg-secondary rounded-2xl border border-border flex flex-col items-center justify-center p-3 hover:border-accent hover:shadow-md transition-all group"
              >
                <div className="w-11 h-11 md:w-13 md:h-13 rounded-xl overflow-hidden bg-white p-1 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <span className="text-[10px] md:text-xs font-semibold text-muted-foreground group-hover:text-foreground mt-2 truncate max-w-full text-center px-1">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
