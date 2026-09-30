'use client'

import { useState } from 'react'
import {
  ExternalLink,
  Eye,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  X,
  Layers,
} from 'lucide-react'
import { CredlyBadgeLogo } from '@/components/icons/credly-icon'
import { portfolioData } from '@/lib/portfolio-data'

interface PortfolioSectionProps {
  data?: typeof portfolioData
}

export function PortfolioSection({ data = portfolioData }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState('all')
  const [selectedProject, setSelectedProject] = useState<any | null>(null)

  const filteredProjects =
    activeFilter === 'all'
      ? data.projects
      : data.projects.filter((p) => p.category.toLowerCase() === activeFilter.toLowerCase())

  return (
    <div className="space-y-8 md:space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-accent text-xs md:text-sm font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Case Studies & Systems</span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">Portfolio</h2>
        <div className="w-12 h-1 bg-accent rounded-full mb-6" />
        <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
          Real-world implementations, enterprise support workflows, vulnerability assessment engagements, and digital accessibility research.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 md:gap-2.5">
        {data.categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 md:px-5 py-2 md:py-2.5 rounded-xl text-xs md:text-sm font-semibold capitalize transition-all ${
              activeFilter === category
                ? 'bg-accent text-accent-foreground shadow-md shadow-accent/20 scale-[1.02]'
                : 'bg-secondary/70 text-muted-foreground hover:text-foreground hover:bg-secondary'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {filteredProjects.map((project, index) => (
          <div
            key={index}
            className="group flex flex-col justify-between bg-secondary/50 hover:bg-secondary rounded-2xl md:rounded-3xl border border-border hover:border-accent transition-all duration-300 hover:shadow-xl overflow-hidden"
          >
            <div>
              {/* Image & Badge Header */}
              <div className="relative aspect-[16/10] overflow-hidden bg-background">
                <img
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    ;(e.target as HTMLImageElement).src = '/generated/project_sap_implementation.png'
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />

                {/* Category Pill */}
                <div className="absolute top-3 left-3 px-3 py-1 bg-background/90 backdrop-blur-md border border-border rounded-lg text-[11px] font-bold text-accent capitalize shadow-sm">
                  {project.category}
                </div>

                {project.hasCredly && (
                  <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 bg-[#FF6B00] text-white rounded-lg text-[10px] font-bold shadow-md shadow-orange-500/30">
                    <CredlyBadgeLogo className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="p-5 md:p-6 space-y-3">
                <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                  {project.title}
                </h3>

                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tech.slice(0, 3).map((t: string, idx: number) => (
                    <span
                      key={idx}
                      className="text-[10px] md:text-[11px] font-medium px-2 py-0.5 rounded-md bg-background border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-[10px] md:text-[11px] font-medium px-1.5 py-0.5 text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-5 md:p-6 pt-0 flex items-center gap-2">
              <button
                onClick={() => setSelectedProject(project)}
                className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 bg-background hover:bg-accent hover:text-accent-foreground border border-border hover:border-accent text-foreground rounded-xl text-xs font-semibold transition-all"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Details</span>
              </button>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                    project.hasCredly
                      ? 'bg-orange-500/10 hover:bg-orange-500 text-orange-600 hover:text-white border border-orange-500/30 hover:border-orange-500'
                      : 'bg-accent text-accent-foreground hover:opacity-90'
                  }`}
                >
                  {project.hasCredly ? (
                    <CredlyBadgeLogo className="w-3.5 h-3.5" />
                  ) : (
                    <ExternalLink className="w-3.5 h-3.5" />
                  )}
                  <span>{project.hasCredly ? 'Credly' : 'Link'}</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-card border border-border rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {selectedProject.category}
                </span>
                {selectedProject.hasCredly && (
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                    <CredlyBadgeLogo className="w-3.5 h-3.5" />
                    Credly Verified
                  </span>
                )}
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                {selectedProject.title}
              </h3>

              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-background border border-border">
                <img
                  src={selectedProject.image || '/placeholder.svg'}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Overview & Implementation
                </h4>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {selectedProject.highlights && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                    Key Outcomes & Impact
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((h: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-foreground/90">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t: string, i: number) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-3 py-1 rounded-lg bg-secondary border border-border text-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-accent-foreground font-semibold text-xs md:text-sm rounded-xl shadow-md shadow-accent/20 hover:opacity-90 transition-all"
                  >
                    <span>{selectedProject.hasCredly ? 'Verify on Credly' : 'Visit Live Project'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 bg-secondary text-foreground font-medium text-xs md:text-sm rounded-xl hover:bg-secondary/80 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
