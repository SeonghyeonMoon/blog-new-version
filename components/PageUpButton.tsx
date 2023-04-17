'use client';

import { useEffect, useState } from 'react';
import { SlArrowUp } from 'react-icons/sl';

const PageUpButton = () => {
  const [height, setHeight] = useState(0);

  const handleScroll = () => {
    setHeight(window.scrollY);
  };

  const movePageTop = () => {
    if (height < 300) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button onClick={movePageTop} className='fixed left-1/2 bottom-8'>
      <SlArrowUp
        className={`animate-bounce cursor-pointer text-xl font-bold text-font-light transition-opacity dark:text-font-dark ${
          height < 300 ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </button>
  );
};

export default PageUpButton;
