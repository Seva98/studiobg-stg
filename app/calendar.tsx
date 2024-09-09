'use client';
import { useEffect, useState } from 'react';

const Calendar = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Dynamically load the list.js script
    const script1 = document.createElement('script');
    script1.src = 'https://zenamu.com/calendar/list.js';
    script1.crossOrigin = 'anonymous';
    script1.onload = () => setIsLoaded(true);
    document.body.appendChild(script1);

    // Dynamically load the workshops.js script
    // const script2 = document.createElement('script');
    // script2.src = 'https://zenamu.com/calendar/workshops.js';
    // script2.crossOrigin = 'anonymous';
    // document.body.appendChild(script2);

    // // Dynamically load the courses.js script
    // const script3 = document.createElement('script');
    // script3.src = 'https://zenamu.com/calendar/courses.js';
    // script3.crossOrigin = 'anonymous';
    // document.body.appendChild(script3);

    // Cleanup scripts when the component is unmounted
    return () => {
      document.body.removeChild(script1);
      // document.body.removeChild(script2);
      // document.body.removeChild(script3);
    };
  }, []);

  return (
    <>
      <div id="zenamu-calendar" calendar-id="59d35f2081b9da062ef0daf743867a07"></div>
      {!isLoaded && <div className="min-h-[400px] flex items-center justify-center">Načítám rozvrh lekcí...</div>}
    </>
  );
};

export default Calendar;
