import { cn } from '@/lib/utils';

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionLabel({ children, className }: SectionLabelProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.25em] uppercase text-accent',
        className
      )}
    >
      <span className="w-8 h-px bg-accent/60" />
      {children}
      <span className="w-8 h-px bg-accent/60" />
    </span>
  );
}
