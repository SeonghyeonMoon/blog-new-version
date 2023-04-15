import Link from 'next/link';

type Props = {
  pathname: string;
};

const Navigation = ({ pathname }: Props) => {
  return (
    <nav>
      <ul className='flex gap-3'>
        <li className={`${pathname !== 'home' && pathname !== 'post' && 'opacity-30'}`}>
          <Link href='/'>Post</Link>
        </li>
        <li className={`${pathname !== 'about' && 'opacity-30'}`}>
          <Link href='about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
