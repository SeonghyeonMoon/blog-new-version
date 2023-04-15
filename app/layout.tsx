import './globals.css';
import { Roboto } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Moon',
    template: 'Moon | %s',
  },
  description: "Moon's blog",
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='ko'>
      <body className={roboto.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default HomeLayout;
