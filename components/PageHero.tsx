import { cn } from '@/lib/utils';
import { SectionLabel } from './SectionLabel';

interface PageHeroProps {
  label?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  centered?: boolean;
}

export function PageHero({ label, title, description, className, centered = true }: PageHeroProps) {
  return (
    <section
      className={cn(
        'relative py-24 md:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden studio-section',
        className
      )}
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className={cn('max-w-4xl mx-auto', centered && 'text-center')}>
        {label && (
          <div className={cn('mb-8', centered && 'flex justify-center')}>
            <SectionLabel>{label}</SectionLabel>
          </div>
        )}
        <h1 className="font-display text-5xl md:text-7xl font-light tracking-tight mb-6 text-balance leading-[1.05]">
          {title}
        </h1>
        {description && (
          <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
