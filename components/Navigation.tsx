'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'About', href: '/about' },
];

export function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === '/' && pathname === '/') return true;
    if (href !== '/' && pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <>
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-500',
          scrolled || mobileOpen
            ? 'bg-white/90 dark:bg-[rgb(15,15,15)]/90 backdrop-blur-xl -webkit-backdrop-blur-xl border-b border-border/40 shadow-lg shadow-black/10'
            : 'bg-transparent border-b border-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 font-bold text-lg md:text-xl group relative z-[60]">
            <div className="w-9 h-9 md:w-10 md:h-10 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center group-hover:shadow-lg group-hover:shadow-accent/40 transition-all duration-300">
              <span className="text-accent-foreground font-black text-sm md:text-lg">EA</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-foreground group-hover:text-accent transition-colors tracking-tight">
                Expressions
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-medium hidden sm:block">
                Architects
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'font-medium text-xs tracking-[0.15em] uppercase transition-all duration-300 relative group',
                  isActive(item.href) ? 'text-accent' : 'text-foreground/80 hover:text-accent'
                )}
              >
                {item.label}
                <span
                  className={cn(
                    'absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300',
                    isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link href="/contact" className="hidden md:block group">
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-2.5 rounded-full font-bold text-xs tracking-[0.12em] uppercase shadow-md hover:shadow-lg hover:shadow-accent/30 transition-all duration-300">
              Start Project
            </button>
          </Link>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setMobileOpen((open) => !open);
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setMobileOpen((open) => !open);
            }}
            className="md:hidden relative z-[60] flex items-center justify-center w-11 h-11 rounded-xl border border-border/60 bg-white/80 dark:bg-background/80 backdrop-blur-sm -webkit-backdrop-blur-sm text-foreground hover:border-accent/50 hover:text-accent transition-all duration-300 touch-manipulation"
            style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-accent" strokeWidth={2.5} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={2.5} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay — rendered outside header stacking context */}
      <div
        className={cn(
          'fixed inset-0 z-[45] md:hidden transition-all duration-500',
          mobileOpen ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
        )}
        aria-hidden={!mobileOpen}
      >
        {/* Backdrop */}
        <div
          className={cn(
            'absolute inset-0 bg-black/70 backdrop-blur-sm -webkit-backdrop-blur-sm transition-opacity duration-500',
            mobileOpen ? 'opacity-100' : 'opacity-0'
          )}
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={cn(
            'absolute top-16 left-0 right-0 bottom-0 bg-background border-t border-border/30 flex flex-col overflow-y-auto transition-transform duration-500 ease-out',
            mobileOpen ? 'translate-y-0' : '-translate-y-4 opacity-0'
          )}
        >
          {/* Studio accent line */}
          <div className="h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent" />

          <div className="flex-1 flex flex-col gap-2 p-6 pt-10">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'font-display text-4xl sm:text-5xl font-light tracking-tight transition-all duration-300 py-3 border-b border-border/20',
                  isActive(item.href)
                    ? 'text-accent'
                    : 'text-foreground hover:text-accent hover:pl-3'
                )}
                style={{ transitionDelay: mobileOpen ? `${index * 60}ms` : '0ms' }}
                onClick={() => setMobileOpen(false)}
              >
                <span className="text-xs font-sans tracking-[0.2em] uppercase text-muted-foreground block mb-1">
                  0{index + 1}
                </span>
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="p-6 border-t border-border/30 bg-card/50">
            <Link
              href="/contact"
              className="block w-full bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-4 rounded-2xl font-bold text-center text-xs tracking-[0.15em] uppercase shadow-lg hover:shadow-accent/30 transition-all duration-300"
              onClick={() => setMobileOpen(false)}
            >
              Start Your Project
            </Link>
            <p className="text-center text-xs text-muted-foreground mt-4 tracking-wide">
              hello@expressionsarch.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
