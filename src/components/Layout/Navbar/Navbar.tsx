import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import React, { FC } from 'react';
import LocaleSwitcher from '../LocaleSwitcher';

import logo from '../../../../public/assets/logo-black.png';
import burger from '../../../../public/icons/burger-menu.svg';

import classes from './_navbar.module.scss';
const { navbarText } = classes;
interface NavbarProps {
  currentLocale: string;
}

const Navbar: FC<NavbarProps> = ({ currentLocale }) => {
  const navLinks = [
    { text: 'Tooted', href: '/products' },
    { text: 'Teenused', href: '/services' },
    { text: 'Kontakt', href: '#contact' },
  ];
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-space-between flex-align-items-center p-16">
            <Link href={'/'} className="cursor-pointer">
              <Image src={logo} width={130} height={60} alt="GasGolder Logo" />
            </Link>
            <div className="d-md-flex d-none flex-row gap-lg-32 justify-content-space-between flex-align-items-center">
              {/* <LocaleSwitcher currentLocale={currentLocale} /> */}
              {navLinks.map((navlink, index) => (
                <Link href={navlink.href} key={index} className="text-decoration-none">
                  <p className={classNames(navbarText, 'text-gas-black m-0 ')}>{navlink.text}</p>
                </Link>
              ))}
            </div>
            <div className="d-md-none">
              <Image src={burger} width={40} height={30} alt="Gagolder" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
