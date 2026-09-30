'use client'

import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Check,
  Copy,
  ExternalLink,
  Sparkles,
  ShieldCheck,
} from 'lucide-react'
import { CredlyBadgeLogo } from '@/components/icons/credly-icon'
import { contactData, profileData } from '@/lib/portfolio-data'

interface ContactSectionProps {
  data?: typeof contactData
}

export function ContactSection({ data = contactData }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [copiedField, setCopiedField] = useState<string | null>(null)

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text)
    setCopiedField(field)
    setTimeout(() => setCopiedField(null), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Open mail client with formatted message
    const mailtoLink = `mailto:${data.email}?subject=${encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 4000)
  }

  return (
    <div className="space-y-8 md:space-y-10">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 text-accent text-xs md:text-sm font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Get In Touch & Verification</span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">Contact</h2>
        <div className="w-12 h-1 bg-accent rounded-full mb-6" />
        <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
          Interested in discussing enterprise ERP support, SAP S/4HANA operations, cybersecurity vulnerability assessments, or digital accessibility initiatives? Feel free to reach out directly.
        </p>
      </div>

      {/* Quick Verified Action Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {/* Email Card */}
        <div className="p-4 md:p-5 bg-secondary/60 rounded-2xl border border-border flex flex-col justify-between group hover:border-accent transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <button
              onClick={() => copyToClipboard(data.email, 'email')}
              className="p-1.5 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground transition-colors"
              title="Copy Email"
            >
              {copiedField === 'email' ? (
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-0.5">
              Direct Email
            </span>
            <a
              href={`mailto:${data.email}`}
              className="text-xs md:text-sm font-semibold text-foreground hover:text-accent transition-colors truncate block"
            >
              {data.email}
            </a>
          </div>
        </div>

        {/* Phone Card */}
        <div className="p-4 md:p-5 bg-secondary/60 rounded-2xl border border-border flex flex-col justify-between group hover:border-accent transition-all">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <button
              onClick={() => copyToClipboard(data.phone, 'phone')}
              className="p-1.5 rounded-lg bg-background border border-border text-muted-foreground hover:text-foreground transition-colors"
              title="Copy Phone"
            >
              {copiedField === 'phone' ? (
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block mb-0.5">
              Phone / WhatsApp
            </span>
            <a
              href={`tel:${data.phone.replace(/\s/g, '')}`}
              className="text-xs md:text-sm font-semibold text-foreground hover:text-accent transition-colors block"
            >
              {data.phone}
            </a>
          </div>
        </div>

        {/* Credly Card */}
        <a
          href={data.credlyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 md:p-5 bg-orange-500/10 hover:bg-orange-500/20 rounded-2xl border border-orange-500/30 hover:border-orange-500 flex flex-col justify-between transition-all group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#FF6B00] text-white flex items-center justify-center shadow-md shadow-orange-500/30">
              <CredlyBadgeLogo className="w-5 h-5" />
            </div>
            <ExternalLink className="w-4 h-4 text-orange-500 group-hover:translate-x-0.5 transition-transform" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:text-orange-400 block mb-0.5">
              Credly Verification
            </span>
            <span className="text-xs md:text-sm font-bold text-foreground">
              4 Official Badges
            </span>
          </div>
        </a>

        {/* LinkedIn Card */}
        <a
          href={data.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 md:p-5 bg-[#0077b5]/10 hover:bg-[#0077b5]/20 rounded-2xl border border-[#0077b5]/30 hover:border-[#0077b5] flex flex-col justify-between transition-all group"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-[#0077b5] text-white flex items-center justify-center shadow-md shadow-[#0077b5]/30">
              <Linkedin className="w-5 h-5" />
            </div>
            <ExternalLink className="w-4 h-4 text-[#0077b5] group-hover:translate-x-0.5 transition-transform" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#0077b5] block mb-0.5">
              LinkedIn Network
            </span>
            <span className="text-xs md:text-sm font-bold text-foreground">
              View Profile
            </span>
          </div>
        </a>
      </div>

      {/* Contact Form & Map Section */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8">
        {/* Form */}
        <div className="lg:col-span-3 p-6 md:p-8 bg-secondary/50 rounded-2xl md:rounded-3xl border border-border">
          <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">Send a Direct Message</h3>

          {submitted ? (
            <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center space-y-2">
              <Check className="w-8 h-8 text-emerald-500 mx-auto" />
              <h4 className="text-base font-bold text-foreground">Message Ready</h4>
              <p className="text-xs md:text-sm text-muted-foreground">
                Your email client was opened to send your inquiry directly to {data.email}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-all text-sm"
                    placeholder="e.g. Jane Smith"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-all text-sm"
                    placeholder="jane@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                  Subject / Inquiry Type
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-all text-sm"
                  placeholder="e.g. SAP S/4HANA Consulting / IT Operations / Cybersecurity"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none transition-all resize-none text-sm"
                  placeholder="Tell me about the role, project requirements, or opportunity..."
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold text-sm shadow-md shadow-accent/20 hover:opacity-90 active:scale-95 transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>

                <a
                  href={profileData.cvPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-accent transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>View Curriculum Vitae</span>
                </a>
              </div>
            </form>
          )}
        </div>

        {/* Map & Location Info */}
        <div className="lg:col-span-2 space-y-4 flex flex-col">
          <div className="p-5 bg-secondary/50 rounded-2xl md:rounded-3xl border border-border flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground block">
                Base Location
              </span>
              <p className="text-sm font-bold text-foreground">
                Lagos, Nigeria (Open to hybrid & remote)
              </p>
            </div>
          </div>

          <div className="flex-1 min-h-[220px] rounded-2xl md:rounded-3xl overflow-hidden border border-border bg-secondary shadow-sm">
            <iframe
              src={data.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '220px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Oliver Location - Lagos, Nigeria"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
