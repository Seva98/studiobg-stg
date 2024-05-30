import { cn } from '@/lib/utils';
import React from 'react';

const Section = ({ children, className, ...props }: {} & React.HTMLProps<HTMLDivElement>) => {
  return (
    <section className={cn('p-6 min-h-screen relative ', className)} {...props}>
      {children}
    </section>
  );
};

export default Section;
