import { Zap, Layout, Palette, Eye, Users, Leaf } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { AnimatedStrip } from '@/components/AnimatedStrip'
import { SectionLabel } from '@/components/SectionLabel'

export const metadata = {
  title: 'Our Services | Expressions Architects',
  description: 'Professional architectural and urban design services for residential, commercial, educational, and housing projects.',
}

const services = [
  {
    icon: Layout,
    title: 'Residential Design',
    description: 'Custom luxury homes and residential complexes designed for modern living with sustainability at their core.',
    features: [
      'Custom home design',
      'Renovation & restoration',
      'Interior coordination',
      'Sustainable materials'
    ]
  },
  {
    icon: Palette,
    title: 'Commercial Architecture',
    description: 'Modern office spaces and commercial buildings that inspire productivity and innovation.',
    features: [
      'Office design',
      'Retail spaces',
      'Mixed-use developments',
      'Corporate HQ design'
    ]
  },
  {
    icon: Users,
    title: 'Educational Facilities',
    description: 'Learning spaces designed to inspire students and faculty with collaboration-first layouts.',
    features: [
      'School design',
      'University facilities',
      'Research centers',
      'Learning spaces'
    ]
  },
  {
    icon: Eye,
    title: '3D Visualization',
    description: 'Advanced renderings and virtual walkthroughs to visualize your project before construction begins.',
    features: [
      'Photorealistic renders',
      'VR walkthroughs',
      'Animation sequences',
      'Material visualization'
    ]
  },
  {
    icon: Leaf,
    title: 'Sustainable Design',
    description: 'Environmentally conscious architecture that reduces impact while maximizing efficiency.',
    features: [
      'LEED certification',
      'Energy efficiency',
      'Green materials',
      'Environmental planning'
    ]
  },
  {
    icon: Zap,
    title: 'Urban Planning',
    description: 'Master planning and urban design strategies that shape vibrant, livable communities.',
    features: [
      'Master plans',
      'Urban strategy',
      'Public spaces',
      'Community design'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 px-4 sm:px-6 lg:px-8 overflow-hidden studio-section">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-studio-pulse-scale"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-studio-float"></div>
          <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent/15 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <SectionLabel className="mb-6">Premium Services</SectionLabel>
                <h1 className="font-display text-6xl md:text-8xl font-light leading-[1.05] mb-6">
                  Architecture <span className="text-accent italic block">Redefined</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                  Transform your vision into extraordinary spaces through our comprehensive architectural expertise and innovative design solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/contact" className="group">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-base font-bold w-full sm:w-auto shadow-lg hover:shadow-xl hover:shadow-accent/50 transition-all">
                    Get Started Now
                  </Button>
                </Link>
                <Link href="/projects" className="group">
                  <Button variant="outline" className="border-2 border-accent text-accent hover:bg-accent/10 px-8 py-6 text-base font-bold w-full sm:w-auto">
                    View Portfolio
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden border-2 border-accent/30 group">
                <Image
                  src="/services-hero.png"
                  alt="Architectural services"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Services Strip */}
      <AnimatedStrip items={[
        'DESIGN EXCELLENCE',
        'SUSTAINABLE SOLUTIONS',
        'CLIENT FOCUSED',
        'INNOVATIVE VISION',
        'EXPERT TEAM',
        'PROVEN RESULTS'
      ]} />

      {/* Main Services Grid - Dramatic Layout */}
      <section className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="mb-32 text-center space-y-6">
            <SectionLabel className="mb-6 justify-center">Our Expertise</SectionLabel>
            <h2 className="font-display text-5xl md:text-7xl font-light leading-tight">
              Complete Service <span className="text-accent italic">Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From concept through completion, we deliver comprehensive architectural services backed by expertise, innovation, and dedication to excellence.
            </p>
          </div>

          {/* Services Grid with Staggered Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, idx) => {
              const Icon = service.icon
              const isStaggered = idx % 2 === 1
              return (
                <div
                  key={idx}
                  className="group relative"
                  style={{
                    transform: isStaggered ? 'translateY(60px)' : 'translateY(0)',
                  }}
                >
                  {/* Glow Background */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent/40 via-accent/20 to-accent/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                  
                  {/* Card */}
                  <div className="relative studio-card border-2 border-border/50 rounded-3xl p-8 md:p-10 h-full hover:border-accent/40 transition-all duration-300 overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-300"></div>

                    <div className="relative z-10 space-y-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-accent/30 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-10 h-10 text-accent" />
                      </div>

                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-accent transition-colors">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>

                      <ul className="space-y-3 pt-4 border-t border-border/50">
                        {service.features.map((feature, fidx) => (
                          <li key={fidx} className="flex items-center gap-3 text-sm font-medium">
                            <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform"></div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section - Bold Typography */}
      <section className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 bg-card relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-accent/15 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-32 text-center space-y-6">
            <SectionLabel className="mb-6 justify-center">How We Work</SectionLabel>
            <h2 className="font-display text-5xl md:text-7xl font-light">
              Our Design <span className="text-accent italic">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', desc: 'Deep dive into your vision, needs, and constraints' },
              { step: '02', title: 'Strategy', desc: 'Develop comprehensive design strategy and concept' },
              { step: '03', title: 'Creation', desc: 'Design, iterate, and refine with your feedback' },
              { step: '04', title: 'Execution', desc: 'Guide through construction and completion' }
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent/30 to-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur"></div>
                <div className="relative bg-background border border-border/50 rounded-2xl p-8 group-hover:border-accent transition-all duration-300">
                  <div className="mb-6">
                    <span className="text-7xl font-black text-accent/20 group-hover:text-accent/40 transition-colors">{item.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Full Impact */}
      <section className="py-32 md:py-48 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 animate-studio-pulse-scale"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          <h2 className="font-display text-5xl md:text-7xl font-light leading-tight">
            Ready to Transform Your Vision?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Let's collaborate to create architectural excellence that defines your space and stands the test of time.
          </p>
          <div className="pt-8">
            <Link href="/contact" className="inline-block group">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-7 text-lg font-bold shadow-lg hover:shadow-2xl hover:shadow-accent/50 transition-all">
                Start Your Project Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
