import { Navigation } from '@/components/Navigation';
import Footer from '@/components/Footer';
import { AnimatedStrip } from '@/components/AnimatedStrip';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="bg-background text-foreground">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-secondary to-background py-20 px-4">
          <div className="max-w-6xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  Expressions Architects
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                  Designing Timeless Spaces with Personality
                </h1>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Custom-designed modern and environmentally sound buildings tailored to each client's unique vision and needs. From residential to commercial, educational to housing projects—we create spaces that endure.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition text-center">
                    Start Your Project
                  </Link>
                  <Link href="/projects" className="border-2 border-accent text-accent px-8 py-4 rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition text-center">
                    View Projects
                  </Link>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden h-64 lg:h-80">
                  <Image
                    src="/hero-1.png"
                    alt="Luxury residential architecture"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-64 lg:h-80">
                  <Image
                    src="/hero-2.png"
                    alt="Commercial building design"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Service Strip */}
        <AnimatedStrip items={[
          'LUXURY RESIDENTIAL',
          'EDUCATIONAL DESIGN',
          'COMMERCIAL ARCHITECTURE',
          'URBAN PLANNING',
          'SUSTAINABLE DESIGN',
          'PREMIUM INTERIORS'
        ]} />


        {/* Design Philosophy */}
        <section className="py-20 px-4 bg-card">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                  Where Creativity Meets Functionality
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  A seamless journey tailored for your dream. We combine innovative design thinking with practical expertise, creating spaces that inspire and endure.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Innovation in Design</h3>
                    <p className="text-muted-foreground">We push boundaries with cutting-edge architectural concepts that stand the test of time.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Custom Furniture</h3>
                    <p className="text-muted-foreground">Tailored solutions that perfectly integrate form and function within each space.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Sustainable Design</h3>
                    <p className="text-muted-foreground">Environmental sensitivity at the core of every project we undertake.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">3D Visualization</h3>
                    <p className="text-muted-foreground">See your vision come to life before construction begins with detailed renderings.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">
              Elevate Your Space: Our Featured Projects
            </h2>
            <div className="space-y-12">
              {/* Luxury Residence */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold mb-4">Luxury Residence</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A premium residential project showcasing modern minimalism with sophisticated design elements. Every corner designed with meticulous attention to detail and the client's lifestyle.
                  </p>
                  <Link href="/projects/luxury-residence" className="text-accent font-semibold hover:underline">
                    View More →
                  </Link>
                </div>
                <div className="rounded-lg overflow-hidden h-64 sm:h-80 order-1 lg:order-2">
                  <Image
                    src="/featured-residential.png"
                    alt="Luxury residence"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Educational Complex */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-2">
                  <h3 className="text-2xl font-bold mb-4">Educational Complex</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A state-of-the-art educational facility designed to inspire learning. Open collaboration spaces, natural light integration, and sustainable design create an optimal learning environment.
                  </p>
                  <Link href="/projects/educational-complex" className="text-accent font-semibold hover:underline">
                    View More →
                  </Link>
                </div>
                <div className="rounded-lg overflow-hidden h-64 sm:h-80 order-1 lg:order-1">
                  <Image
                    src="/featured-educational.png"
                    alt="Educational facility"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Commercial Tower */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl font-bold mb-4">Commercial Tower</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Modern mixed-use commercial architecture combining office space, retail, and public areas. Sustainable systems and innovative design drive this landmark project.
                  </p>
                  <Link href="/projects/commercial-tower" className="text-accent font-semibold hover:underline">
                    View More →
                  </Link>
                </div>
                <div className="rounded-lg overflow-hidden h-64 sm:h-80 order-1 lg:order-2">
                  <Image
                    src="/featured-corporate.png"
                    alt="Commercial tower"
                    width={500}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 px-4 bg-card">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden h-96">
                <Image
                  src="/vision.png"
                  alt="Architectural vision"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-8">
                  We Know How to Deliver Your Vision
                </h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  From initial concept through final construction, we work collaboratively with you to ensure every detail reflects your unique vision. Our proven process combines creativity with practicality to deliver exceptional results.
                </p>
                <Link href="/contact" className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition inline-block">
                  Schedule a Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
              Design Chronicles - Our Latest Masterpieces
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="rounded-lg overflow-hidden h-96">
                <Image
                  src="/portfolio-1.png"
                  alt="Portfolio project 1"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-96">
                <Image
                  src="/portfolio-2.png"
                  alt="Portfolio project 2"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-96">
                <Image
                  src="/portfolio-3.png"
                  alt="Portfolio project 3"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden h-96">
                <Image
                  src="/portfolio-4.png"
                  alt="Portfolio project 4"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-card">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-16 text-center">
              Satisfaction Stories - Client Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-background p-8 rounded-lg border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Expressions Architects transformed our vision into reality. Their attention to detail and commitment to sustainability resulted in a home that's both beautiful and environmentally responsible. Exceptional experience from start to finish."
                </p>
                <div>
                  <p className="font-bold">Sarah Mitchell</p>
                  <p className="text-sm text-muted-foreground">Homeowner, Luxury Residence Project</p>
                </div>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "The educational facility they designed has exceeded all our expectations. Students and staff love the collaborative spaces. Their sustainable approach aligns perfectly with our institution's values."
                </p>
                <div>
                  <p className="font-bold">Dr. James Chen</p>
                  <p className="text-sm text-muted-foreground">University Director, Educational Complex</p>
                </div>
              </div>

              <div className="bg-background p-8 rounded-lg border border-border">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-accent">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "Working with Expressions Architects on our commercial tower was a game-changer. They delivered a landmark building that attracts tenants and creates lasting value. Truly professional team."
                </p>
                <div>
                  <p className="font-bold">Marcus Thompson</p>
                  <p className="text-sm text-muted-foreground">Developer, Commercial Tower Project</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Ready to Get Started? Schedule a Consultation
            </h2>
            <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
              Let's discuss your project and how we can bring your vision to life with innovative, sustainable architecture.
            </p>
            <Link href="/contact" className="bg-accent text-accent-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition inline-block">
              Start Your Project
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
