'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname.split('/')[1]);
  }, []);

  return (
    <nav>
      <ul className='flex gap-3'>
        <li className={`${pathname === '/about' && 'opacity-30'}`}>
          <Link href='/'>Post</Link>
        </li>
        <li className={`${pathname !== '/about' && 'opacity-30'}`}>
          <Link href='about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
