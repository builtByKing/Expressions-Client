'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'About', href: '/about' },
  ];

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex sticky top-0 z-40 w-full bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-bold text-xl group">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/80 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent/50 transition-all">
              <span className="text-accent-foreground font-black text-lg">EA</span>
            </div>
            <span className="text-foreground group-hover:text-accent transition-colors">Expressions</span>
          </Link>

          {/* Navigation Items */}
          <div className="flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'font-semibold text-sm tracking-wide uppercase transition-all duration-300 relative group',
                  isActive(item.href)
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent'
                )}
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <Link href="/contact" className="group">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-7 py-3 rounded-xl font-bold text-sm tracking-wide uppercase shadow-lg hover:shadow-xl hover:shadow-accent/50 transition-all duration-300">
              Start Project
            </button>
          </Link>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden sticky top-0 z-40 w-full bg-background/95 backdrop-blur-md border-b border-border/50">
        <div className="px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-lg group">
            <div className="w-8 h-8 bg-gradient-to-br from-accent to-accent/80 rounded-lg flex items-center justify-center">
              <span className="text-accent-foreground font-black text-xs">EA</span>
            </div>
            <span className="text-foreground group-hover:text-accent transition-colors">Expressions</span>
          </Link>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 group"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-accent animate-in rotate-in duration-300" />
            ) : (
              <Menu className="w-6 h-6 text-foreground group-hover:text-accent transition-colors animate-in fade-in duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 top-[76px] bg-black/60 backdrop-blur-sm z-20 animate-in fade-in duration-300"
              onClick={() => setMobileOpen(false)}
            />

            {/* Mobile Menu */}
            <div className="fixed inset-0 top-[76px] bg-gradient-to-b from-background via-background to-background/95 z-30 flex flex-col animate-in slide-in-from-top-full duration-500 overflow-y-auto">
              {/* Decorative glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>

              <div className="relative z-10 flex-1 flex flex-col gap-8 p-8 pt-16">
                {navItems.map((item, index) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'text-4xl md:text-5xl font-black transition-all duration-300 group relative animate-in slide-in-from-left-full',
                      isActive(item.href)
                        ? 'text-accent'
                        : 'text-foreground hover:text-accent'
                    )}
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                    <span className="absolute -bottom-2 left-0 h-1 bg-accent rounded-full w-0 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                ))}

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-accent/50 via-accent/20 to-transparent my-8 animate-in fade-in duration-500" style={{ animationDelay: '400ms' }}></div>

                {/* Additional Links */}
                <div className="space-y-4 text-sm animate-in fade-in duration-500" style={{ animationDelay: '500ms' }}>
                  <p className="uppercase tracking-widest font-bold text-muted-foreground text-xs">Quick Links</p>
                  <div className="space-y-3">
                    {[
                      { label: 'Services', href: '/services' },
                      { label: 'Projects', href: '/projects' },
                      { label: 'About Us', href: '/about' }
                    ].map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block text-muted-foreground hover:text-accent transition-colors font-medium"
                        onClick={() => setMobileOpen(false)}
                      >
                        → {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Mobile CTA */}
              <div className="relative z-10 p-8 border-t border-border/50 bg-gradient-to-t from-background to-transparent animate-in slide-in-from-bottom duration-500" style={{ animationDelay: '600ms' }}>
                <Link
                  href="/contact"
                  className="block w-full bg-gradient-to-r from-accent to-accent/90 hover:from-accent/90 hover:to-accent text-accent-foreground px-6 py-4 rounded-xl font-bold text-center uppercase tracking-wide shadow-lg hover:shadow-xl hover:shadow-accent/50 transition-all duration-300"
                  onClick={() => setMobileOpen(false)}
                >
                  Start Your Project
                </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
