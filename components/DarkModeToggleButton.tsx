'use client';

import { useEffect, useState } from 'react';

const DarkModeToggleButton = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleColorMode = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    setIsDark(window.matchMedia('(prefers-color-scheme: dark)').matches);
  }, []);

  useEffect(() => {
    isDark ? document.documentElement.classList.add('dark') : document.documentElement.classList.remove('dark');
  }, [isDark]);

  return (
    <button onClick={toggleColorMode} className='relative h-7 w-12 rounded-full bg-blue-light dark:bg-hr-dark'>
      <div
        className='z-10 h-5 w-5 transform rounded-full bg-font-dark shadow-md transition-transform duration-200'
        style={{ transform: isDark ? 'translateX(120%)' : 'translateX(20%)' }}
      />
    </button>
  );
};

export default DarkModeToggleButton;
