'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { projects } from '@/lib/projects'
import { ChevronRight } from 'lucide-react'
import { PageHero } from '@/components/PageHero'

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const categories = ['residential', 'educational', 'commercial', 'housing']
  const filteredProjects = selectedCategory
    ? projects.filter((p) => p.category === selectedCategory)
    : projects

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        label="Portfolio"
        title={<>Our <span className="text-accent italic">Project</span> Portfolio</>}
        description="Explore our collection of completed architectural projects showcasing our expertise, innovation, and commitment to excellence."
      />

      {/* Filter Buttons */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2.5 rounded-full font-medium text-sm uppercase tracking-wide transition-all duration-300 ${
                selectedCategory === null
                  ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20'
                  : 'bg-card border border-border/50 text-foreground hover:border-accent/50 hover:text-accent'
              }`}
            >
              All Projects
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm uppercase tracking-wide transition-all duration-300 capitalize ${
                  selectedCategory === cat
                    ? 'bg-accent text-accent-foreground shadow-lg shadow-accent/20'
                    : 'bg-card border border-border/50 text-foreground hover:border-accent/50 hover:text-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <div className="group">
                <div className="studio-image-frame h-80 mb-6 cursor-pointer border border-border/30">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                      <div className="p-6 w-full">
                        <div className="flex items-center gap-2 text-accent mb-2">
                          <span className="text-sm font-semibold">View Details</span>
                          <ChevronRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-3 py-1 mb-3">
                      <span className="text-xs font-semibold text-accent capitalize">{project.category}</span>
                    </div>
                    <h3 className="font-display text-2xl font-light mb-2 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{project.shortDescription}</p>
                    <div className="flex items-center gap-2 text-accent font-semibold">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
