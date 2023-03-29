import './globals.css';

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
      <body>{children}</body>
    </html>
  );
};

export default HomeLayout;
