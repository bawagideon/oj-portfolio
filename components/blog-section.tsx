'use client'

import { useState } from 'react'
import { Calendar, Clock, ArrowRight, X, Sparkles, BookOpen } from 'lucide-react'
import { blogData } from '@/lib/portfolio-data'

interface BlogSectionProps {
  data?: typeof blogData
}

export function BlogSection({ data = blogData }: BlogSectionProps) {
  const [selectedPost, setSelectedPost] = useState<any | null>(null)

  return (
    <div className="space-y-8 md:space-y-10">
      <div>
        <div className="flex items-center gap-2 text-accent text-xs md:text-sm font-semibold uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Technical Insights & Engineering Notes</span>
        </div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">Blog & Insights</h2>
        <div className="w-12 h-1 bg-accent rounded-full mb-6" />
        <p className="text-sm md:text-base text-muted-foreground max-w-3xl">
          Articles and field reflections on SAP S/4HANA workflows, cybersecurity vulnerability research, accessible software architecture, and high-availability operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
        {data.posts.map((post, index) => (
          <article
            key={index}
            className="group bg-secondary/50 hover:bg-secondary rounded-2xl md:rounded-3xl border border-border hover:border-accent hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
          >
            <div>
              <div className="aspect-[16/9] overflow-hidden bg-background">
                <img
                  src={post.image || '/placeholder.svg'}
                  alt={`Cover image for blog post: ${post.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-5 md:p-6">
                <div className="flex items-center gap-2 flex-wrap text-xs text-muted-foreground mb-3">
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full font-bold text-[11px] uppercase tracking-wide">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-base md:text-lg font-bold text-foreground mb-3 leading-snug group-hover:text-accent transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] md:text-[11px] font-medium px-2 py-0.5 rounded-md bg-background border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Read Article Trigger */}
            <div className="p-5 md:p-6 pt-0">
              <button
                onClick={() => setSelectedPost(post)}
                className="flex items-center gap-2 text-xs md:text-sm text-accent hover:gap-3 transition-all font-semibold"
              >
                <span>Read Overview</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Blog Article Reader Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-card border border-border rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-secondary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-5">
              <div className="flex items-center gap-2 flex-wrap text-xs text-muted-foreground">
                <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full uppercase tracking-wider">
                  {selectedPost.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {selectedPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {selectedPost.readTime}
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                {selectedPost.title}
              </h3>

              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-background border border-border">
                <img
                  src={selectedPost.image || '/placeholder.svg'}
                  alt={selectedPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-sm md:text-base text-muted-foreground leading-relaxed">
                <p className="font-semibold text-foreground">
                  {selectedPost.excerpt}
                </p>
                <p>
                  In high-demand enterprise environments, maintaining operational resilience requires a systematic understanding of underlying protocol interdependencies, timely incident triage, and clear stakeholder communication.
                </p>
                <p>
                  Whether configuring order-to-cash modules in SAP S/4HANA or diagnosing perimeter vulnerabilities with automated and manual pen-testing tooling, rigorous adherence to standardized frameworks (such as ITIL and OWASP) remains the single most reliable foundation for long-term systems reliability.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-border">
                {selectedPost.tags.map((t: string, i: number) => (
                  <span
                    key={i}
                    className="text-xs font-medium px-3 py-1 rounded-lg bg-secondary border border-border text-foreground"
                  >
                    #{t}
                  </span>
                ))}
              </div>

              <div className="flex justify-end pt-4 border-t border-border">
                <button
                  onClick={() => setSelectedPost(null)}
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
