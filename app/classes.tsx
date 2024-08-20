'use client';

import { useEffect, useRef, useState } from 'react';
import Typography from '@/components/ui/typography';
import Section from '@/components/ui/section';
import Image from 'next/image';
import Link from 'next/link';

const Classes: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 },
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const links = [
    { href: '/reformer#Reformer', text: 'Reformer' },
    { href: '/barre#Barre', text: 'Barre' },
    { href: '/pilates#Pilates', text: 'Pilates' },
    { href: '/yoga#Yoga', text: 'Yoga' },
  ];

  return (
    <Section className="bg-ternary grid grid-cols-1 md:grid-cols-[4fr_2fr] gap-12 text-[#68443c]" id="Lekce" ref={sectionRef}>
      <div className="flex flex-col gap-16 uppercase justify-center border-l-4 h-fit my-auto pl-4 border-[#68443c]">
        <Typography variant="h1" className="pt-4">
          Lekce
        </Typography>
        <div className="flex flex-col pl-8 pb-4">
          {links.map((link, index) => (
            <Link href={link.href} key={link.text}>
              <Typography
                variant="h3"
                className={`transform transition-all duration-700 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-1/2 opacity-0'}`}
                style={{
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms', // Staggered delay
                }}
              >
                {link.text}
              </Typography>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <Image src="/other/studio.jpg" width={928} height={1232} alt="Studio" className="min-h-[90vh] relative -top-6 object-cover overflow-hidden" />
      </div>
    </Section>
  );
};

export default Classes;
