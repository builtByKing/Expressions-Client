'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { SectionLabel } from '@/components/SectionLabel'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    description: '',
    budget: '',
    timeline: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        description: '',
        budget: '',
        timeline: '',
      })
      setTimeout(() => setSubmitted(false), 5000)
    } catch (error) {
      console.error('Form submission error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PageHero
        label="Contact"
        title={<>Start Your <span className="text-accent italic animate-studio-glow">Project</span></>}
        description="Ready to bring your architectural vision to life? Get in touch with our team to discuss your project and schedule a consultation."
      />

      {/* Trust badges */}
      <div className="flex flex-wrap justify-center gap-6 pb-12 px-4 -mt-8">
        {['Expert Team', 'Fast Response', 'Custom Solutions'].map((item) => (
          <div key={item} className="flex items-center gap-2 text-muted-foreground text-sm">
            <CheckCircle className="w-4 h-4 text-accent" />
            <span>{item}</span>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
            <SectionLabel className="mb-6">Reach Out</SectionLabel>
            <h2 className="font-display text-3xl font-light mb-8">Get In Touch</h2>

            <div className="space-y-6">
              {/* Email */}
              <div className="group studio-card p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href="mailto:hello@expressionsarch.com" className="text-muted-foreground hover:text-accent transition-colors">
                      hello@expressionsarch.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="group studio-card p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a href="tel:+15551234567" className="text-muted-foreground hover:text-accent transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="group studio-card p-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/20 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      123 Design Street
                      <br />
                      Creative City, CC 12345
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="mt-12 studio-card p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Business Hours
              </h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-foreground">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="studio-card p-8 md:p-10">
              <SectionLabel className="mb-6">Project Inquiry</SectionLabel>
              <h2 className="font-display text-2xl font-light mb-6">Tell Us About Your Project</h2>

              {submitted && (
                <div className="mb-6 bg-accent/10 border border-accent/30 rounded-lg p-4 text-accent">
                  Thank you for your message! We&apos;ll get back to you within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="John Doe"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                      Project Type *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select a project type</option>
                      <option value="residential">Residential Design</option>
                      <option value="commercial">Commercial Architecture</option>
                      <option value="educational">Educational Facilities</option>
                      <option value="housing">Housing Development</option>
                      <option value="urban">Urban Planning</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                    placeholder="Tell us about your project, your vision, and any specific requirements..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Budget */}
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select budget range</option>
                      <option value="under250k">Under $250K</option>
                      <option value="250k500k">$250K - $500K</option>
                      <option value="500k1m">$500K - $1M</option>
                      <option value="1m5m">$1M - $5M</option>
                      <option value="over5m">Over $5M</option>
                      <option value="tbd">To be determined</option>
                    </select>
                  </div>

                  {/* Timeline */}
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium mb-2">
                      Project Timeline
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (0-3 months)</option>
                      <option value="short">Short-term (3-6 months)</option>
                      <option value="medium">Medium-term (6-12 months)</option>
                      <option value="long">Long-term (12+ months)</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 rounded-lg font-medium flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  We&apos;ll respond to your inquiry within 24 business hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
