import Image from 'next/image'
import { Award, Users, Globe, Leaf } from 'lucide-react'

export const metadata = {
  title: 'About Us | Expressions Architects',
  description: 'Learn about Expressions Architects\' mission, values, and commitment to architectural excellence and sustainable design.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
            About <span className="text-accent">Expressions Architects</span>
          </h1>
          <p className="text-xl text-muted-foreground text-balance">
            We are architects and urban designers dedicated to creating exceptional spaces that reflect our clients&apos; visions while respecting environmental responsibility.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Our <span className="text-accent">Mission & Values</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              At Expressions Architects, we believe in creating buildings and spaces that are not just beautiful, but deeply meaningful. In a world of copying and duplication, our firm is distinguished by our commitment to custom-designed, modern, and environmentally sound architecture.
            </p>
            <p className="text-lg text-muted-foreground">
              We provide exceptional services on residential, educational, commercial, and housing projects. Our dedicated approach results in buildings tailor-made for each client&apos;s unique needs and aspirations.
            </p>
          </div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/vision.png"
              alt="Our vision and mission"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-balance">
            Our Core <span className="text-accent">Values</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Design Excellence',
                description:
                  'We maintain the highest professional standards in every aspect of our work, from initial concept through final execution.',
              },
              {
                icon: Leaf,
                title: 'Environmental Sensitivity',
                description:
                  'Sustainability is integrated into every project. We create buildings that minimize environmental impact while maximizing efficiency.',
              },
              {
                icon: Users,
                title: 'Client Collaboration',
                description:
                  'We partner closely with clients, ensuring their vision and needs are at the center of every decision we make.',
              },
              {
                icon: Globe,
                title: 'Innovation & Creativity',
                description:
                  'We push creative boundaries to deliver unique architectural solutions that stand out and inspire.',
              },
            ].map((value, idx) => {
              const Icon = value.icon
              return (
                <div
                  key={idx}
                  className="group bg-card border border-border rounded-lg p-8 hover:border-accent transition-all duration-300 hover:shadow-2xl hover:shadow-accent/30 relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-300"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/30 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Why Choose <span className="text-accent">Expressions Architects</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                number: '20+',
                label: 'Years of Experience',
                description:
                  'Two decades of architectural expertise and proven track record of successful projects.',
              },
              {
                number: '150+',
                label: 'Completed Projects',
                description:
                  'A diverse portfolio spanning residential, educational, commercial, and urban design sectors.',
              },
              {
                number: '100%',
                label: 'Client Satisfaction',
                description:
                  'Dedicated to exceeding expectations and creating lasting partnerships with our clients.',
              },
              {
                number: '45+',
                label: 'Award Wins',
                description:
                  'Recognized for design excellence and innovation in the architecture and design industry.',
              },
              {
                number: '6',
                label: 'Specialized Teams',
                description:
                  'Expert teams in residential, commercial, educational, urban planning, 3D visualization, and sustainability.',
              },
              {
                number: '8',
                label: 'Certification Bodies',
                description:
                  'Certified professionals in LEED, AIA, and other leading architectural and sustainability organizations.',
              },
            ].map((stat, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-8 text-center">
                <div className="text-5xl font-bold text-accent mb-2">{stat.number}</div>
                <h3 className="text-lg font-bold mb-3">{stat.label}</h3>
                <p className="text-muted-foreground text-sm">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Our <span className="text-accent">Leadership & Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              Award-winning architects, designers, and specialists dedicated to creating exceptional spaces and transforming visions into reality.
            </p>
          </div>

          {/* Directors */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Directors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {[
                {
                  name: 'James Richardson',
                  role: 'Principal Architect & Director',
                  image: '/team-director-1.png',
                  bio: '25+ years in residential and commercial design',
                },
                {
                  name: 'Sarah Mitchell',
                  role: 'Urban Design Director',
                  image: '/team-director-2.png',
                  bio: '20+ years in master planning and urban development',
                },
              ].map((member, idx) => (
                <div key={idx} className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                  <div className="relative h-64 overflow-hidden bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                    <p className="text-accent font-semibold text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Administrator */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Administration</h3>
            <div className="max-w-xs mx-auto">
              <div className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                <div className="relative h-64 overflow-hidden bg-muted">
                  <Image
                    src="/team-administrator.png"
                    alt="Administrator"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold mb-1">Patricia Chen</h4>
                  <p className="text-accent font-semibold text-sm mb-3">Operations Administrator</p>
                  <p className="text-muted-foreground text-sm">Expert coordination and project management</p>
                </div>
              </div>
            </div>
          </div>

          {/* Architectural Technologists */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Architectural Technologists</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: 'Marcus Thompson',
                  role: 'Senior Technologist',
                  image: '/team-tech-1.png',
                  specialty: '3D Visualization & BIM',
                },
                {
                  name: 'Emma Rodriguez',
                  role: 'Design Technologist',
                  image: '/team-tech-2.png',
                  specialty: 'Sustainable Design',
                },
                {
                  name: 'Lisa Wong',
                  role: 'Technologist',
                  image: '/team-tech-3.png',
                  specialty: 'Commercial Projects',
                },
                {
                  name: 'David Kumar',
                  role: 'Technical Specialist',
                  image: '/team-tech-4.png',
                  specialty: 'Construction Admin',
                },
              ].map((member, idx) => (
                <div key={idx} className="group bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20">
                  <div className="relative h-56 overflow-hidden bg-muted">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-bold text-sm mb-0.5">{member.name}</h4>
                    <p className="text-accent font-semibold text-xs mb-2">{member.role}</p>
                    <p className="text-muted-foreground text-xs">{member.specialty}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-balance">
            Our <span className="text-accent">Approach</span>
          </h2>

          <div className="space-y-8">
            {[
              {
                title: 'Understanding Your Vision',
                description:
                  'We begin every project by deeply understanding your needs, goals, and aspirations. Through intensive consultation and research, we develop a comprehensive understanding of your requirements.',
              },
              {
                title: 'Creative Excellence',
                description:
                  'Armed with this understanding, our team develops innovative design solutions that balance aesthetics, functionality, and sustainability. We explore multiple directions to find the optimal path forward.',
              },
              {
                title: 'Environmental Responsibility',
                description:
                  'Every design decision considers environmental impact. We integrate sustainable practices, energy efficiency, and responsible material selection throughout our projects.',
              },
              {
                title: 'Collaborative Partnership',
                description:
                  'We work closely with clients, contractors, and stakeholders throughout the process. Regular communication and feedback ensure the final result exceeds expectations.',
              },
              {
                title: 'Value Creation',
                description:
                  'Our ultimate goal is to create immense value on our clients&apos; projects. We deliver buildings and spaces that enhance quality of life, increase property value, and stand the test of time.',
              },
            ].map((approach, idx) => (
              <div key={idx} className="bg-card border border-border rounded-lg p-8">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-accent text-accent-foreground font-bold">
                      {idx + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{approach.title}</h3>
                    <p className="text-muted-foreground">{approach.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
