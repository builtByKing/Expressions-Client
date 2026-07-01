'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, MapPin, Users, Lightbulb, Leaf, ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { AnimatedStrip } from '@/components/AnimatedStrip'
import { SectionLabel } from '@/components/SectionLabel'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl animate-studio-pulse-scale" />
          <div className="absolute bottom-0 -left-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-studio-float" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-studio-reveal">
              <SectionLabel className="mb-8">Architectural Excellence</SectionLabel>
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-8 text-balance leading-[1.02]">
                Designing Spaces with{' '}
                <span className="text-accent italic">Modern</span>{' '}
                Excellence
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 text-balance leading-relaxed">
                We create exceptional architectural designs tailored to each client&apos;s unique vision. From luxury residences to innovative commercial buildings — spaces that inspire and endure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/projects">
                  <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 rounded-full text-sm tracking-wide uppercase font-bold shadow-lg hover:shadow-accent/30 transition-all duration-300">
                    Explore Our Work
                    <ArrowUpRight className="w-4 h-4 ml-2 inline" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="w-full sm:w-auto border-border/60 hover:border-accent/50 hover:bg-accent/5 px-8 py-6 rounded-full text-sm tracking-wide uppercase font-medium transition-all duration-300">
                    Our Studio
                  </Button>
                </Link>
              </div>
            </div>

            {/* Hero Images */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              <div className="studio-image-frame h-64 md:h-80 lg:h-96 mt-12 shadow-2xl shadow-black/20 border border-border/30">
                <Image
                  src="/hero-1.png"
                  alt="Modern luxury residential architecture"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="studio-image-frame h-64 md:h-80 lg:h-96 shadow-2xl shadow-black/20 border border-border/30">
                <Image
                  src="/hero-2.png"
                  alt="Contemporary commercial building"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Service Strip */}
      <AnimatedStrip />

      {/* Philosophy Section */}
      <section className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 studio-section">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionLabel className="mb-6">Our Philosophy</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-light mb-8 text-balance leading-tight">
              Where Design <span className="text-accent italic">Excellence</span> Meets Functionality
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-balance leading-relaxed">
              At Expressions Architects, exceptional design is the foundation of great spaces. We understand your vision, then translate it into architecture that enhances lives and communities.
            </p>
            <Link href="/about">
              <Button variant="outline" className="border-accent/50 text-accent hover:bg-accent hover:text-accent-foreground rounded-full px-8 py-6 text-sm uppercase tracking-wide font-medium">
                Learn Our Process
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: Lightbulb, title: 'Innovative Design', desc: 'Unique architectural solutions reflecting contemporary design principles.' },
              { icon: Leaf, title: 'Environmental Sensitivity', desc: 'Sustainable practices integrated into every project we undertake.' },
              { icon: Users, title: 'Client Collaboration', desc: 'Your vision at the center of every decision we make together.' },
              { icon: MapPin, title: '3D Visualization', desc: 'Advanced visualization so you understand designs before construction.' },
            ].map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="studio-card p-6 group">
                  <div className="w-10 h-10 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="font-semibold text-base mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <SectionLabel className="mb-6 justify-center">Portfolio</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-light mb-6 text-balance">
              Our <span className="text-accent italic">Featured</span> Projects
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
              Exceptional architectural projects across residential, educational, and commercial sectors.
            </p>
          </div>

          <div className="space-y-24">
            {[
              {
                tag: 'Residential',
                title: 'Luxury Residential Design',
                desc: 'Sophisticated high-end residences combining luxury finishes with functional design, meticulously crafted to reflect each client\'s lifestyle.',
                slug: 'luxury-hillside-residence',
                image: '/featured-residential.png',
                reverse: false,
              },
              {
                tag: 'Educational',
                title: 'Educational Facilities',
                desc: 'State-of-the-art educational buildings designed to foster learning and collaboration with flexible spaces and natural light.',
                slug: 'modern-educational-complex',
                image: '/featured-educational.png',
                reverse: true,
              },
              {
                tag: 'Commercial',
                title: 'Commercial Architecture',
                desc: 'Dynamic commercial spaces that enhance brand identity and functionality — buildings that stand out and perform exceptionally.',
                slug: 'urban-commercial-tower',
                image: '/featured-corporate.png',
                reverse: false,
              },
            ].map((project) => (
              <div
                key={project.slug}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${project.reverse ? '' : ''}`}
              >
                <div className={project.reverse ? 'order-1 lg:order-2' : ''}>
                  <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-accent mb-4">
                    {project.tag}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-light mb-5">{project.title}</h3>
                  <p className="text-muted-foreground mb-8 text-balance leading-relaxed">{project.desc}</p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-accent font-semibold text-sm uppercase tracking-wide hover:gap-4 transition-all duration-300"
                  >
                    View Project <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
                <div className={`studio-image-frame h-80 md:h-96 border border-border/30 shadow-xl ${project.reverse ? 'order-2 lg:order-1' : ''}`}>
                  <Image src={project.image} alt={project.title} fill className="object-cover" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden studio-section">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-20 w-96 h-96 bg-accent rounded-full blur-3xl animate-studio-pulse-scale" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="studio-image-frame h-96 border border-border/30 shadow-2xl">
              <Image src="/vision.png" alt="Vision and design process" fill className="object-cover" />
            </div>
            <div>
              <SectionLabel className="mb-6">Our Vision</SectionLabel>
              <h2 className="font-display text-4xl md:text-5xl font-light mb-8 text-balance leading-tight">
                We Know How to <span className="text-accent italic">Deliver</span> Your Vision
              </h2>
              <p className="text-lg text-muted-foreground mb-10 text-balance leading-relaxed">
                From initial concept to final construction, our team combines technical expertise with creative vision — bringing architectural dreams to life with precision and excellence.
              </p>
              <div className="space-y-4">
                {['20+ years of architectural excellence', 'Award-winning design team', 'Sustainable and innovative solutions'].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24 md:py-40 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel className="mb-6 justify-center">Latest Work</SectionLabel>
            <h2 className="font-display text-4xl md:text-6xl font-light text-balance">
              Design <span className="text-accent italic">Chronicles</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: '/portfolio-1.png', title: 'Grand Villa', slug: 'luxury-hillside-residence' },
              { src: '/portfolio-2.png', title: 'Elegant Penthouse', slug: 'modern-educational-complex' },
              { src: '/portfolio-3.png', title: 'Minimalist Residence', slug: 'urban-commercial-tower' },
              { src: '/portfolio-4.png', title: 'Mixed-Use Development', slug: 'sustainable-housing-development' },
            ].map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <div className="group studio-image-frame h-72 md:h-80 border border-border/30 cursor-pointer">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <p className="text-accent text-xs uppercase tracking-[0.2em] font-bold mb-2">View Project</p>
                      <h3 className="font-display text-2xl md:text-3xl font-light text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 bg-card/50 border-y border-border/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel className="mb-6 justify-center">Testimonials</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-light text-balance">
              Client <span className="text-accent italic">Success</span> Stories
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                name: 'Sarah Mitchell',
                role: 'Executive Director, Contemporary Educational Institute',
                testimonial: 'Expressions Architects transformed our vision into a world-class educational facility. Their attention to detail, sustainability focus, and collaborative approach exceeded our expectations.',
              },
              {
                name: 'James Chen',
                role: 'CEO, Urban Development Corp',
                testimonial: 'Working with Expressions Architects on our mixed-use development was exceptional. They delivered a design that balanced commercial viability with architectural excellence.',
              },
              {
                name: 'Elena Rodriguez',
                role: 'Homeowner, Private Residence',
                testimonial: 'Our dream home became a reality thanks to Expressions Architects. They listened to our needs and created spaces that are both beautiful and functional.',
              },
            ].map((t, idx) => (
              <div key={idx} className="studio-card p-8 md:p-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent text-sm">★</span>
                  ))}
                </div>
                <p className="font-display text-xl md:text-2xl font-light text-foreground/90 mb-8 leading-relaxed italic">
                  &ldquo;{t.testimonial}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <SectionLabel className="mb-8 justify-center">Get Started</SectionLabel>
          <h2 className="font-display text-4xl md:text-6xl font-light mb-8 text-balance leading-tight">
            Ready to Create Your <span className="text-accent italic">Dream Project?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-10 text-balance leading-relaxed">
            Let&apos;s discuss your architectural vision and bring it to life with exceptional design and expert execution.
          </p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-7 rounded-full text-sm uppercase tracking-widest font-bold shadow-lg hover:shadow-accent/30 transition-all duration-300">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
