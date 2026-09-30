'use client'

import { useState } from 'react'
import {
  User,
  FileText,
  Briefcase,
  BookOpen,
  Mail,
  ShieldCheck,
} from 'lucide-react'
import { ProfileSidebar } from '@/components/profile-sidebar'
import { AboutSection } from '@/components/about-section'
import { ResumeSection } from '@/components/resume-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { BlogSection } from '@/components/blog-section'
import { ContactSection } from '@/components/contact-section-new'
import { ThemeToggle } from '@/components/theme-toggle'
import {
  profileData,
  aboutData,
  resumeData,
  portfolioData,
  blogData,
  contactData,
} from '@/lib/portfolio-data'

const navItems = [
  { id: 'about', label: 'About', icon: User },
  { id: 'resume', label: 'Resume', icon: FileText, badge: 'Updated' },
  { id: 'portfolio', label: 'Portfolio', icon: Briefcase },
  { id: 'blog', label: 'Blog', icon: BookOpen },
  { id: 'contact', label: 'Contact', icon: Mail },
]

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')

  return (
    <div className="min-h-screen bg-background p-3 sm:p-5 md:p-8 lg:p-12 xl:p-16 transition-colors duration-300">
      {/* Theme Toggle floating in top right */}
      <div className="fixed top-4 right-4 md:top-6 md:right-6 z-50">
        <ThemeToggle />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 xl:gap-10 items-start">
          {/* Left Sticky Sidebar */}
          <ProfileSidebar data={profileData} />

          {/* Main Interactive Content Area */}
          <main className="flex-1 w-full bg-card rounded-2xl md:rounded-3xl border border-border shadow-sm overflow-hidden min-w-0">
            {/* Top Navigation Bar */}
            <nav className="flex items-center gap-1 sm:gap-2 p-3 sm:p-4 md:p-5 border-b border-border overflow-x-auto scrollbar-hide bg-card/60 backdrop-blur-md sticky top-0 z-30">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`group relative flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                      isActive
                        ? 'text-foreground bg-accent/15 shadow-sm shadow-accent/10 border border-accent/20'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/70 border border-transparent'
                    }`}
                  >
                    <Icon className={`w-4 h-4 transition-colors ${isActive ? 'text-accent' : 'text-muted-foreground group-hover:text-foreground'}`} />
                    <span>{item.label}</span>

                    {item.badge && (
                      <span className="hidden sm:inline-flex items-center text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                        {item.badge}
                      </span>
                    )}

                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-accent rounded-full -mb-3 sm:-mb-4 md:-mb-5" />
                    )}
                  </button>
                )
              })}
            </nav>

            {/* Dynamic Section Container */}
            <div className="p-5 sm:p-7 md:p-9 lg:p-10 xl:p-12">
              {activeSection === 'about' && <AboutSection data={aboutData} />}
              {activeSection === 'resume' && <ResumeSection data={resumeData} />}
              {activeSection === 'portfolio' && <PortfolioSection data={portfolioData} />}
              {activeSection === 'blog' && <BlogSection data={blogData} />}
              {activeSection === 'contact' && <ContactSection data={contactData} />}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
