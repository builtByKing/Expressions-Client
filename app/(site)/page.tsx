'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight, MapPin, Users, Lightbulb, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-semibold text-accent">ARCHITECTURAL EXCELLENCE</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
              Designing Custom Spaces with <span className="text-accent">Modern Excellence</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mb-8 text-balance">
              We create exceptional architectural designs tailored to each client&apos;s unique vision and needs. From luxury residences to innovative commercial buildings, our work defines spaces that inspire and endure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/projects">
                <Button className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 rounded-full text-base">
                  Explore Our Work
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="outline" className="w-full sm:w-auto border-muted hover:bg-muted px-8 py-6 rounded-full text-base">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>

          {/* Hero Images Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/hero-1.png"
                alt="Modern luxury residential architecture"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/hero-2.png"
                alt="Contemporary commercial building"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Tags */}
      <div className="bg-accent py-6 px-4 sm:px-6 lg:px-8 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex gap-3 whitespace-nowrap">
          <span className="inline-block px-4 py-2 bg-accent-foreground/10 text-accent-foreground text-sm font-semibold rounded-full">RESIDENTIAL DESIGN</span>
          <span className="inline-block px-4 py-2 bg-accent-foreground/10 text-accent-foreground text-sm font-semibold rounded-full">COMMERCIAL DESIGN</span>
          <span className="inline-block px-4 py-2 bg-accent-foreground/10 text-accent-foreground text-sm font-semibold rounded-full">URBAN PLANNING</span>
          <span className="inline-block px-4 py-2 bg-accent-foreground/10 text-accent-foreground text-sm font-semibold rounded-full">EDUCATIONAL FACILITIES</span>
          <span className="inline-block px-4 py-2 bg-accent-foreground/10 text-accent-foreground text-sm font-semibold rounded-full">SUSTAINABLE DESIGN</span>
        </div>
      </div>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Where Design <span className="text-accent">Excellence</span> Meets Functionality
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              At Expressions Architects, we believe exceptional design is the foundation of great spaces. Our process starts with understanding your vision, then translating it into architecture that enhances lives and communities.
            </p>
            <Link href="/about">
              <Button variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground rounded-full px-8 py-6">
                Learn Our Process
              </Button>
            </Link>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Lightbulb className="w-4 h-4 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Innovative Design</h3>
                <p className="text-muted-foreground">We push creative boundaries to deliver unique architectural solutions that reflect contemporary design principles.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Leaf className="w-4 h-4 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Environmental Sensitivity</h3>
                <p className="text-muted-foreground">Sustainable design practices are integrated into every project, minimizing environmental impact while maximizing efficiency.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <Users className="w-4 h-4 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Client Collaboration</h3>
                <p className="text-muted-foreground">We partner closely with clients throughout the design process, ensuring their needs and vision are at the center of every decision.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <MapPin className="w-4 h-4 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">3D Visualization</h3>
                <p className="text-muted-foreground">Advanced visualization techniques help clients understand designs before construction, enabling informed decision-making.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Elevate Your Space: Our <span className="text-accent">Featured Projects</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-balance">
            Explore our portfolio of exceptional architectural projects showcasing our expertise across residential, educational, and commercial sectors.
          </p>

          <div className="space-y-16">
            {/* Luxury Residential */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-3 py-1 mb-4">
                  <span className="text-xs font-semibold text-accent">RESIDENTIAL</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Luxury Residential Design</h3>
                <p className="text-muted-foreground mb-6 text-balance">
                  Sophisticated high-end residences that combine luxury finishes with functional design. Each project is meticulously crafted to reflect the client&apos;s lifestyle and aesthetic preferences.
                </p>
                <Link href="/projects/luxury-hillside-residence" className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                  View Project <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/featured-residential.png"
                  alt="Luxury residential design"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Educational Facilities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg order-2 lg:order-1">
                <Image
                  src="/featured-educational.png"
                  alt="Modern educational facility"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-3 py-1 mb-4">
                  <span className="text-xs font-semibold text-accent">EDUCATIONAL</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Educational Facilities</h3>
                <p className="text-muted-foreground mb-6 text-balance">
                  State-of-the-art educational buildings designed to foster learning and collaboration. Our designs integrate flexible spaces, natural light, and modern amenities for optimal educational environments.
                </p>
                <Link href="/projects/modern-educational-complex" className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                  View Project <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Commercial Design */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-3 py-1 mb-4">
                  <span className="text-xs font-semibold text-accent">COMMERCIAL</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Commercial Architecture</h3>
                <p className="text-muted-foreground mb-6 text-balance">
                  Dynamic commercial spaces that enhance brand identity and functionality. From corporate offices to mixed-use developments, we create buildings that stand out and perform exceptionally.
                </p>
                <Link href="/projects/urban-commercial-tower" className="flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all">
                  View Project <ChevronRight className="w-5 h-5" />
                </Link>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/featured-corporate.png"
                  alt="Commercial architecture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-background to-muted/50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/vision.png"
                alt="Vision and design process"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                We Know How to <span className="text-accent">Deliver Your Vision</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 text-balance">
                From initial concept to final construction, our team combines technical expertise with creative vision. We leverage the latest design technology and construction methodologies to bring your architectural dreams to life with precision and excellence.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">20+ years of architectural excellence</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Award-winning design team</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span className="text-foreground">Sustainable and innovative solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Design Chronicles - Our <span className="text-accent">Latest Masterpieces</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-balance">
            A curated collection of our most recent architectural achievements and design innovations.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: '/portfolio-1.png', title: 'Grand Villa', slug: 'luxury-hillside-residence' },
              { src: '/portfolio-2.png', title: 'Elegant Penthouse', slug: 'modern-educational-complex' },
              { src: '/portfolio-3.png', title: 'Minimalist Residence', slug: 'urban-commercial-tower' },
              { src: '/portfolio-4.png', title: 'Mixed-Use Development', slug: 'sustainable-housing-development' },
            ].map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`}>
                <div className="group relative h-72 rounded-lg overflow-hidden cursor-pointer">
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <p className="text-accent text-sm">View Details</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Client Success - <span className="text-accent">Real Projects, Real Results</span>
          </h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-balance">
            Hear directly from clients about their experience working with Expressions Architects.
          </p>

          <div className="space-y-8">
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
                testimonial: 'Our dream home became a reality thanks to Expressions Architects. They listened to our needs, understood our lifestyle, and created spaces that are both beautiful and functional.',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-card border border-muted rounded-lg p-8">
                <p className="text-lg text-foreground mb-6 italic">
                  &quot;{testimonial.testimonial}&quot;
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-accent">★</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Ready to Create Your <span className="text-accent">Dream Project?</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 text-balance">
            Let&apos;s discuss your architectural vision and bring it to life with exceptional design and expert execution.
          </p>
          <Link href="/contact">
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 rounded-full text-base">
              Start Your Project
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
