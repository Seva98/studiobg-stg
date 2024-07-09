import type { Metadata } from 'next';
import './globals.css';
import FirstPage from './firstPage';
import { cn } from '@/lib/utils';
import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Balance & Glow Studio',
  description: 'Balance & Glow Studio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={cn(poppins.className)}>
        <FirstPage />
        {children}
      </body>
    </html>
  );
}
