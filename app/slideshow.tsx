'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const Slideshow = () => {
  const images = [
    {
      src: '/foto/276A7679.jpg',
      alt: 'První obrázek slideshow',
    },
    {
      src: '/foto/276A7510.jpg',
      alt: 'Druhý obrázek slideshow',
    },
    {
      src: '/foto/276A7580.jpg',
      alt: 'Třetí obrázek slideshow',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full hidden sm:h-[50vh] md:h-[calc(100vh-64px)] top-16 sm:block">
      {images.map((image, index) => (
        <div key={index} className={`absolute top-16 w-full h-[85%] transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
          <Image src={image.src} width={1024} height={1024} alt={image.alt} className=" h-full block absolute w-full opacity-90 object-cover" />
        </div>
      ))}
      <div className="absolute bottom-8 md:bottom-28 left-1/2 transform -translate-x-1/2 space-x-2 flex">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-[#68443c]' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
