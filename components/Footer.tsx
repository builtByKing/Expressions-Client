'use client'

import Link from 'next/link';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import { SectionLabel } from '@/components/SectionLabel';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card text-foreground border-t border-border/50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -mr-48"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top Section - CTA */}
        <div className="mb-20 pb-20 border-b border-border/50">
          <div className="max-w-3xl space-y-6">
            <SectionLabel className="mb-6">Let&apos;s Connect</SectionLabel>
            <h2 className="font-display text-5xl md:text-6xl font-light leading-tight">
              Ready to Create Something <span className="text-accent italic">Extraordinary?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Let&apos;s discuss your vision and how our architectural expertise can transform your space into something truly remarkable.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-3 group">
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-xl font-bold uppercase tracking-wide shadow-lg hover:shadow-xl hover:shadow-accent/50 transition-all">
                Get In Touch
              </button>
              <ArrowRight className="w-6 h-6 text-accent group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl group w-fit">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent/40 transition-all">
                <span className="text-accent-foreground font-black">EA</span>
              </div>
              <div className="flex flex-col leading-none">
                <span>Expressions</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium">Architects</span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Custom designed modern and environmentally sound buildings tailored to each client's unique vision.
            </p>
            <div className="pt-4 space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <a href="mailto:hello@expressionsarch.com">hello@expressionsarch.com</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground hover:text-accent transition-colors group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-6">
            <h4 className="font-black text-sm uppercase tracking-widest">Navigation</h4>
            <div className="space-y-4">
              {[
                { label: 'Home', href: '/' },
                { label: 'Services', href: '/services' },
                { label: 'Projects', href: '/projects' },
                { label: 'About', href: '/about' }
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-all group font-medium"
                >
                  <span className="w-1.5 h-1.5 bg-accent/40 group-hover:bg-accent rounded-full transition-all"></span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-black text-sm uppercase tracking-widest">Services</h4>
            <div className="space-y-4">
              {[
                { label: 'Residential Design', href: '/services' },
                { label: 'Commercial', href: '/services' },
                { label: 'Educational', href: '/services' },
                { label: 'Urban Planning', href: '/services' }
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-all group font-medium"
                >
                  <span className="w-1.5 h-1.5 bg-accent/40 group-hover:bg-accent rounded-full transition-all"></span>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-black text-sm uppercase tracking-widest">Location</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-sm text-muted-foreground">
                  <p>123 Design Street</p>
                  <p>Creative City, CC 12345</p>
                </div>
              </div>
              <div className="pt-4 border-t border-border/50">
                <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-3">Hours</p>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Mon - Fri</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} <span className="font-bold text-foreground">Expressions Architects</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-8 text-sm">
              <Link
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors font-medium"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-accent transition-colors font-medium"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Animated accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent/0 via-accent/50 to-accent/0"></div>
    </footer>
  );
}
