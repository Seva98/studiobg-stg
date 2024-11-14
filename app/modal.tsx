'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const tenMinutes = 10 * 60 * 1000;
    const lastDisplayed = getCookie('modal_last_displayed');

    // Check if the modal was last displayed more than 10 minutes ago
    if (!lastDisplayed || Date.now() - parseInt(lastDisplayed) > tenMinutes) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        setCookie('modal_last_displayed', Date.now().toString(), 1 / 144); // expires in 10 minutes
      }, 3000);

      return () => clearTimeout(timer); // Clear timeout on unmount
    }
  }, []);

  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  };

  const getCookie = (name: string) => {
    const nameEQ = name + '=';
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  };

  const closeOverlay = () => setIsOpen(false);

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4 cursor-pointer" onClick={closeOverlay}>
        <div className="relative max-w-full max-h-full mx-auto p-4 flex justify-center items-center" onClick={(e) => e.stopPropagation()}>
          <div className="hidden md:flex relative w-full h-full max-w-full max-h-full justify-center items-center">
            <Image
              src="/modal.jpg"
              alt="Selected Material Image"
              layout="intrinsic"
              width={1748}
              height={1241}
              className="object-contain"
              style={{ maxHeight: 'calc(100vh - 20vh)', maxWidth: 'calc(100vw - 5px)' }}
              onClick={closeOverlay}
            />
          </div>
          <div className="flex md:hidden relative w-full h-full max-w-full max-h-full justify-center items-center">
            <Image
              src="/modal2.jpg"
              alt="Selected Material Image"
              layout="intrinsic"
              width={299}
              height={1239}
              className="object-contain"
              style={{ maxHeight: 'calc(100vh - 20vh)', maxWidth: 'calc(100vw - 5px)' }}
              onClick={closeOverlay}
            />
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
