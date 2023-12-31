import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import LocaleSwitcher from '../LocaleSwitcher';

import burger from '../../../../public/icons/burger-menu.svg';
import logo from '../../../../public/assets/logo-black.svg';

import classes from './_navbar.module.scss';
import { useLocaleContext } from '../../LocaleContextProvider/LocaleContextProvider';
const { navbarText } = classes;

const Navbar = () => {
  const { currentLocale } = useLocaleContext();

  const navLinks = [
    { text: currentLocale == 'et' ? 'Tooted' : 'Товары', href: '/products' },
    { text: currentLocale == 'et' ? 'Teenused' : 'Услуги', href: '/services' },
    { text: currentLocale == 'et' ? 'Kontakt' : 'Контакты', href: '#contact' },
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
              <LocaleSwitcher />
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
