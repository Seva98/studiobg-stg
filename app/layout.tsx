import type { Metadata } from 'next';
import './globals.css';
import FirstPage from './firstPage';
import { cn } from '@/lib/utils';
import Footer from './footer';
import Script from 'next/script';

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
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=AW-16679365058" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16679365058');
          `}
        </Script>
      </head>
      <body>
        <FirstPage />
        {children}
        <Footer />
      </body>
    </html>
  );
}
