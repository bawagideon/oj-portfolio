'use client'

import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Check,
  Copy,
  ExternalLink,
} from 'lucide-react'
import { CredlyBadgeLogo } from '@/components/icons/credly-icon'
import { profileData } from '@/lib/portfolio-data'

interface ProfileSidebarProps {
  data?: typeof profileData
}

export function ProfileSidebar({ data = profileData }: ProfileSidebarProps) {
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  return (
    <aside className="w-full lg:w-84 xl:w-90 bg-card rounded-2xl md:rounded-3xl border border-border p-5 md:p-6 lg:sticky lg:top-8 h-fit shadow-sm">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center">
        {/* Avatar with Glow and Status */}
        <div className="relative mb-5">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-2xl md:rounded-3xl overflow-hidden border-2 border-accent/40 shadow-xl bg-secondary relative">
            <img
              src={data.avatar || '/placeholder-user.jpg'}
              alt={data.name}
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                // Fallback if avatar fails
                ;(e.target as HTMLImageElement).src = '/professional-developer-avatar.png'
              }}
            />
          </div>
          {/* Active Status Badge */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1 bg-background/95 backdrop-blur-md border border-border rounded-full shadow-md whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-semibold text-foreground tracking-wide">Available for Hire</span>
          </div>
        </div>

        <h1 className="text-xl md:text-2xl font-bold text-foreground tracking-tight mt-1 mb-2">
          {data.name}
        </h1>

        <p className="text-xs md:text-sm text-muted-foreground font-medium max-w-[280px] leading-relaxed mx-auto mb-4">
          {data.title}
        </p>
      </div>

      {/* Divider */}
      <div className="h-px bg-border my-4" />

      {/* Contact Info List */}
      <div className="space-y-3">
        {/* Email */}
        <div className="group flex items-center justify-between p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-border transition-all">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
              <Mail className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Email</p>
              <a
                href={`mailto:${data.email}`}
                className="text-xs md:text-sm text-foreground hover:text-accent font-medium transition-colors truncate block"
              >
                {data.email}
              </a>
            </div>
          </div>
          <button
            onClick={() => copyToClipboard(data.email, 'email')}
            className="p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-background/80 transition-colors flex-shrink-0"
            title="Copy email address"
            aria-label="Copy email"
          >
            {copiedField === 'email' ? (
              <Check className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Phone */}
        <div className="group flex items-center justify-between p-2.5 rounded-xl bg-secondary/50 hover:bg-secondary border border-border/50 hover:border-border transition-all">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
              <Phone className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Phone</p>
              <a
                href={`tel:${data.phone.replace(/\s/g, '')}`}
                className="text-xs md:text-sm text-foreground hover:text-accent font-medium transition-colors truncate block"
              >
                {data.phone}
              </a>
            </div>
          </div>
          <button
            onClick={() => copyToClipboard(data.phone, 'phone')}
            className="p-1.5 text-muted-foreground hover:text-foreground rounded-md hover:bg-background/80 transition-colors flex-shrink-0"
            title="Copy phone number"
            aria-label="Copy phone"
          >
            {copiedField === 'phone' ? (
              <Check className="w-3.5 h-3.5 text-emerald-500" />
            ) : (
              <Copy className="w-3.5 h-3.5" />
            )}
          </button>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3 p-2.5 rounded-xl bg-secondary/50 border border-border/50">
          <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 text-accent">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">Location</p>
            <p className="text-xs md:text-sm font-medium text-foreground">{data.location}</p>
          </div>
        </div>
      </div>

      {/* Action Buttons: View CV & Social Links */}
      <div className="mt-5 space-y-3">
        {data.cvPdfUrl && (
          <a
            href={data.cvPdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-accent text-accent-foreground font-semibold text-xs md:text-sm rounded-xl shadow-md shadow-accent/20 hover:opacity-95 hover:scale-[1.01] active:scale-[0.99] transition-all group"
          >
            <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            <span>View Curriculum Vitae (PDF)</span>
          </a>
        )}

        {/* Social Icons Bar */}
        <div className="flex items-center justify-center gap-2 pt-3 border-t border-border">
          {data.social.credly && (
            <a
              href={data.social.credly}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-secondary hover:bg-orange-500/10 border border-border hover:border-orange-500 text-foreground transition-all group"
              aria-label="Credly Profile"
              title="View Credly Profile"
            >
              <CredlyBadgeLogo className="w-4 h-4" />
              <span className="text-xs font-semibold group-hover:text-orange-500">Credly</span>
            </a>
          )}

          {data.social.linkedin && (
            <a
              href={data.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-secondary hover:bg-[#0077b5]/10 border border-border hover:border-[#0077b5] text-foreground transition-all group"
              aria-label="LinkedIn Profile"
              title="View LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-[#0077b5]" />
              <span className="text-xs font-semibold group-hover:text-[#0077b5]">LinkedIn</span>
            </a>
          )}

          {data.social.github && (
            <a
              href={data.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-secondary hover:bg-accent hover:text-accent-foreground border border-border hover:border-accent flex items-center justify-center transition-all"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </aside>
  )
}
