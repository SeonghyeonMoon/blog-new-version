import Link from 'next/link';
import Navigation from './Navigation';
import DarkModeToggleButton from './DarkModeToggleButton';

const Header = () => {
  return (
    <header className='sticky top-0 z-10 backdrop-blur-sm'>
      <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-4'>
        <Link href='/'>
          <h1 className='text-3xl'>Moon</h1>
        </Link>
        <Navigation />
        <DarkModeToggleButton />
      </div>
    </header>
  );
};

export default Header;
