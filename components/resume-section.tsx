'use client'

import { useState } from 'react'
import {
  Briefcase,
  GraduationCap,
  Award,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  Calendar,
  MapPin,
  Trophy,
  Users,
  Medal,
  Sparkles,
  Building2,
  Layers,
} from 'lucide-react'
import { CredlyBadgeLogo } from '@/components/icons/credly-icon'
import { resumeData, profileData } from '@/lib/portfolio-data'

interface ResumeSectionProps {
  data?: typeof resumeData
}

export function ResumeSection({ data = resumeData }: ResumeSectionProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'experience' | 'certifications' | 'education' | 'leadership' | 'skills'>('all')

  return (
    <div className="space-y-10 md:space-y-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-accent text-xs md:text-sm font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Curriculum Vitae & Experience</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">Resume</h2>
          <div className="w-12 h-1 bg-accent rounded-full" />
        </div>

        {/* Action Button: View Official CV */}
        <div className="flex items-center gap-2.5">
          <a
            href={profileData.cvPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground font-semibold text-xs md:text-sm rounded-xl shadow-md shadow-accent/20 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98] transition-all group"
          >
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            <span>View Curriculum Vitae</span>
          </a>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide border-b border-border">
        {[
          { id: 'all', label: 'All Sections' },
          { id: 'experience', label: 'Experience (5)' },
          { id: 'certifications', label: 'Certifications & Badges (5)' },
          { id: 'education', label: 'Education (2)' },
          { id: 'leadership', label: 'Leadership & Honors' },
          { id: 'skills', label: 'Skills Matrix' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-3.5 py-2 rounded-xl text-xs md:text-sm font-medium whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-accent text-accent-foreground shadow-sm'
                : 'bg-secondary/60 text-muted-foreground hover:text-foreground hover:bg-secondary'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* SECTION 1: VERIFIED CERTIFICATIONS & CREDLY BADGES */}
      {(activeTab === 'all' || activeTab === 'certifications') && (
        <section className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-orange-500/10 text-orange-500 flex items-center justify-center">
                <CredlyBadgeLogo className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  Verified Certifications & Credentials
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground">
                  Officially verified credentials on Credly (ISC2, Cisco, WES) and Enterprise SAP Training
                </p>
              </div>
            </div>

            <a
              href="https://www.credly.com/users/okwudili-onyia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#FF6B00]/10 hover:bg-[#FF6B00]/20 border border-[#FF6B00]/30 hover:border-[#FF6B00] rounded-xl text-xs font-bold text-foreground transition-all group w-fit"
            >
              <CredlyBadgeLogo className="w-4 h-4 text-[#FF6B00]" />
              <span>Verify on Credly</span>
              <ExternalLink className="w-3.5 h-3.5 text-[#FF6B00] group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.certifications.map((cert, index) => (
              <div
                key={index}
                className="group p-5 md:p-6 bg-secondary/60 hover:bg-secondary rounded-2xl md:rounded-3xl border border-border hover:border-accent transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-background border border-border p-2 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                      <img
                        src={cert.badgeImage}
                        alt={cert.title}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          ;(e.target as HTMLImageElement).src = '/generated/cybersecurity_icon_3d_1773677462812.png'
                        }}
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-[11px] font-bold text-accent uppercase tracking-wider">
                          {cert.issuer}
                        </span>
                        {cert.verified && (
                          <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-emerald-500/10 text-emerald-500 px-2 py-0.5 rounded-full border border-emerald-500/20">
                            <ShieldCheck className="w-3 h-3" />
                            Verified
                          </span>
                        )}
                      </div>
                      <h4 className="text-base md:text-lg font-bold text-foreground group-hover:text-accent transition-colors leading-snug">
                        {cert.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {cert.date}
                      </p>
                    </div>
                  </div>

                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.tags?.slice(0, 3).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] md:text-[11px] font-medium px-2 py-0.5 rounded-md bg-background border border-border text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {cert.credlyUrl && (
                    <a
                      href={cert.credlyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                    >
                      <span>Badge</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 2: PROFESSIONAL EXPERIENCE */}
      {(activeTab === 'all' || activeTab === 'experience') && (
        <section className="space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Professional Experience
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Detailed timeline and achievements aligned precisely with current curriculum vitae
              </p>
            </div>
          </div>

          <div className="space-y-6 relative before:absolute before:inset-0 before:left-3 md:before:left-5 before:w-0.5 before:bg-border">
            {data.experience.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-12 group">
                {/* Timeline node */}
                <div
                  className={`absolute left-1.5 md:left-3.5 top-1.5 w-3.5 h-3.5 rounded-full border-2 bg-background transition-colors ${
                    item.isCurrent
                      ? 'border-accent bg-accent ring-4 ring-accent/20'
                      : 'border-muted-foreground/60 group-hover:border-accent'
                  }`}
                />

                <div className="p-5 md:p-7 bg-secondary/60 hover:bg-secondary rounded-2xl md:rounded-3xl border border-border hover:border-accent transition-all duration-300 shadow-sm">
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                    <div className="flex items-start gap-3.5">
                      {item.logo && (
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-border bg-white p-1.5 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-xs">
                          <img
                            src={item.logo}
                            alt={item.company}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      )}
                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h4 className="text-lg md:text-xl font-bold text-foreground">
                            {item.title}
                          </h4>
                          {item.employmentType && (
                            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
                              {item.employmentType}
                            </span>
                          )}
                          {item.isCurrent && (
                            <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20">
                              Current Role
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-muted-foreground font-medium mt-1">
                          <span className="flex items-center gap-1 text-foreground font-semibold">
                            <Building2 className="w-3.5 h-3.5 text-accent" />
                            {item.company}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {item.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs md:text-sm font-semibold text-accent bg-accent/10 px-3 py-1.5 rounded-xl w-fit flex-shrink-0">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  {/* Bullet Points from CV */}
                  <ul className="space-y-2.5 my-4">
                    {item.highlights.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-3 border-t border-border/60">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] md:text-xs font-medium px-2.5 py-1 rounded-lg bg-background border border-border text-foreground/80"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 3: EDUCATION */}
      {(activeTab === 'all' || activeTab === 'education') && (
        <section className="space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">Education</h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Academic qualifications, university thesis, and foundational computer science coursework
              </p>
            </div>
          </div>

          <div className="space-y-5">
            {data.education.map((edu, index) => (
              <div
                key={index}
                className="p-5 md:p-7 bg-secondary/60 hover:bg-secondary rounded-2xl md:rounded-3xl border border-border hover:border-accent transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                  <div className="flex items-start gap-3.5">
                    {edu.logo && (
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl border border-border bg-white p-1.5 flex-shrink-0 flex items-center justify-center overflow-hidden shadow-xs">
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="max-h-full max-w-full object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h4 className="text-lg md:text-xl font-bold text-foreground">
                        {edu.degree}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-muted-foreground font-medium mt-1">
                        <span className="flex items-center gap-1 text-foreground font-semibold">
                          <GraduationCap className="w-3.5 h-3.5 text-accent" />
                          {edu.institution}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs md:text-sm font-semibold text-accent bg-accent/10 px-3 py-1.5 rounded-xl w-fit flex-shrink-0">
                    <Calendar className="w-3.5 h-3.5 inline mr-1" />
                    <span>{edu.period}</span>
                  </div>
                </div>

                {edu.thesis && (
                  <div className="my-3.5 p-3.5 bg-background rounded-xl border border-border/80 text-xs md:text-sm text-foreground/90 leading-relaxed">
                    <span className="font-bold text-accent mr-1">Thesis:</span>
                    {edu.thesis.replace(/^Thesis:\s*/i, '')}
                  </div>
                )}

                <ul className="space-y-2 mt-3">
                  {edu.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs md:text-sm text-muted-foreground leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SECTION 4: LEADERSHIP & SERVICE */}
      {(activeTab === 'all' || activeTab === 'leadership') && (
        <section className="space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Leadership, Service & Collegiate Honors
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Mentorship contributions, athletic leadership, and event coordination
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.leadership.map((item, index) => {
              const Icon =
                item.icon === 'Trophy'
                  ? Trophy
                  : item.icon === 'Medal'
                  ? Medal
                  : item.icon === 'Users'
                  ? Users
                  : Award

              return (
                <div
                  key={index}
                  className="p-5 md:p-6 bg-secondary/60 hover:bg-secondary rounded-2xl md:rounded-3xl border border-border hover:border-accent transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-accent bg-accent/10 px-2.5 py-1 rounded-lg">
                      {item.period}
                    </span>
                  </div>

                  <h4 className="text-base md:text-lg font-bold text-foreground mb-1">
                    {item.role}
                  </h4>
                  <p className="text-xs font-semibold text-muted-foreground mb-2">
                    {item.organization}
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* SECTION 5: TECHNICAL SKILLS MATRIX */}
      {(activeTab === 'all' || activeTab === 'skills') && (
        <section className="space-y-6">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                Technical Skills & Frameworks
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground">
                Comprehensive competencies mapped across enterprise platforms, security tools, and data architectures
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.skillCategories.map((cat, cIdx) => (
              <div
                key={cIdx}
                className="p-5 md:p-6 bg-secondary/60 rounded-2xl md:rounded-3xl border border-border space-y-4"
              >
                <h4 className="text-base md:text-lg font-bold text-foreground border-b border-border pb-2.5 flex items-center justify-between">
                  <span>{cat.category}</span>
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2.5 py-0.5 rounded-full">
                    {cat.skills.length} competencies
                  </span>
                </h4>

                <div className="space-y-3.5">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex justify-between text-xs md:text-sm">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="font-semibold text-accent">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-background rounded-full overflow-hidden border border-border/40">
                        <div
                          className="h-full bg-gradient-to-r from-accent/80 to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Referees Banner */}
      <div className="p-4 md:p-5 rounded-2xl bg-secondary/40 border border-border/80 flex items-center justify-between text-xs md:text-sm text-muted-foreground">
        <div>
          <span className="font-bold text-foreground mr-1.5">Referees:</span>
          {data.referees}
        </div>
      </div>
    </div>
  )
}
