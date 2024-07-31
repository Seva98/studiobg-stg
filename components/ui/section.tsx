import { cn } from '@/lib/utils';
import React from 'react';

type Props = {
  padding?: 'md' | 'lg';
};

const Section = ({ children, className, padding = 'md', ...props }: Props & React.HTMLProps<HTMLDivElement>) => {
  return (
    <section className={cn('min-h-screen relative', padding === 'md' ? 'p-6' : 'p-16', className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
