import { useParams } from 'next/navigation';
import React, { FC, ReactNode } from 'react';
import Footer from './Footer';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: ReactNode;
  currentLocale: string;
}

const Layout: FC<LayoutProps> = ({ children, currentLocale }) => {
  return (
    <>
      <Navbar currentLocale={currentLocale} />
      {children}
      <Footer currentLocale={currentLocale} />
    </>
  );
};

export default Layout;
