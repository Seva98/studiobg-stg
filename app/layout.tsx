import type { Metadata } from 'next';
import './globals.css';
import FirstPage from './firstPage';
import { cn } from '@/lib/utils';
import Footer from './footer';

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
      <body>
        <FirstPage />
        {children}
        <Footer />
      </body>
    </html>
  );
}
