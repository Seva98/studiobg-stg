import { cn } from '@/lib/utils';
import localFont from 'next/font/local';

const emitha = localFont({ src: './emitha.ttf' });

type Variant = 'title' | 'signature';

const Handwritten = ({ children, className, variant = 'title' }: { children: React.ReactNode; className?: string; variant?: Variant }) => {
  return <div className={cn(emitha.className, variant === 'title' ? 'text-9xl' : 'text-7xl', className)}>{children}</div>;
};

export default Handwritten;
