import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  padding?: 'md' | 'lg';
  withLogo?: boolean;
  className?: string;
  children: React.ReactNode;
};

const Section = React.forwardRef<HTMLElement, Props & React.HTMLProps<HTMLDivElement>>(({ children, className, padding = 'md', withLogo, ...props }, ref) => {
  return (
    <section ref={ref} className={cn('min-h-screen relative', padding === 'md' ? 'p-6' : 'p-16', className)} {...props}>
      {children}
    </section>
  );
});

Section.displayName = 'Section';

export default Section;
