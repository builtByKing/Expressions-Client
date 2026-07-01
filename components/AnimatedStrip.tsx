'use client'

import { cn } from '@/lib/utils'

interface AnimatedStripProps {
  items?: string[]
  className?: string
}

export function AnimatedStrip({ 
  items = [
    'LUXURY RESIDENTIAL',
    'EDUCATIONAL DESIGN',
    'COMMERCIAL ARCHITECTURE',
    'URBAN PLANNING',
    'SUSTAINABLE DESIGN',
    'PREMIUM INTERIORS'
  ],
  className
}: AnimatedStripProps) {
  return (
    <div className={cn('relative overflow-hidden bg-accent py-4 md:py-6 -skew-y-2', className)}>
      {/* Animated scroll container */}
      <div className="flex gap-8 animate-studio-scroll whitespace-nowrap">
        {/* First set */}
        {items.map((item, idx) => (
          <div key={idx} className="flex items-center gap-8 text-accent-foreground font-bold text-sm md:text-base tracking-wider flex-shrink-0">
            <span>{item}</span>
            <span className="text-lg">✦</span>
          </div>
        ))}
        
        {/* Duplicate set for seamless loop */}
        {items.map((item, idx) => (
          <div key={`dup-${idx}`} className="flex items-center gap-8 text-accent-foreground font-bold text-sm md:text-base tracking-wider flex-shrink-0">
            <span>{item}</span>
            <span className="text-lg">✦</span>
          </div>
        ))}
      </div>

      {/* Gradient overlays for smooth fade */}
      <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-accent to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-accent to-transparent pointer-events-none z-10"></div>
    </div>
  )
}
