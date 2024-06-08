'use client';
import classNames from 'classnames';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import LocaleSwitcher from '../LocaleSwitcher';

import burger from '../../../../public/icons/burger-menu.svg';
import logo from '../../../../public/assets/logo-black.svg';

import translations from '../../../../data/text.json';
import { useLocaleContext } from '../../LocaleContextProvider/LocaleContextProvider';

import classes from './_navbar.module.scss';
const { navbarText } = classes;

const Navbar = () => {
  const { currentLocale } = useLocaleContext();
  const [showBurger, setShowBurger] = useState(false);
  const typedTranslations: any = translations;

  const t = typedTranslations[currentLocale].navbar || {};

  const navLinks = [
    { text: t.products || 'Products', href: '/products' },
    { text: t.services || 'Services', href: '/services' },
    { text: t.contact || 'Contact', href: '#contact' },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="d-flex justify-content-space-between flex-align-items-center p-16">
            <Link href={'/'} className="cursor-pointer">
              <Image src={logo} width={130} height={60} alt="GasGolder Logo" />
            </Link>
            <div className="d-lg-flex d-none flex-row gap-lg-32 justify-content-space-between flex-align-items-center">
              <LocaleSwitcher />
              {navLinks.map((navlink, index) => (
                <Link href={navlink.href} key={index} className="text-decoration-none">
                  <p className={classNames(navbarText, 'text-gas-black m-0 ')}>{navlink.text}</p>
                </Link>
              ))}
            </div>
            <div className="d-flex align-items-center d-lg-none">
              <LocaleSwitcher />
              <Image
                src={burger}
                width={40}
                height={30}
                alt="Gagolder"
                className="mt-6"
                onClick={() => setShowBurger(!showBurger)}
              />
            </div>
          </div>
        </div>
      </div>
      {showBurger && (
        <div className="d-flex justify-content-center align-items-center flex-column d-md-none">
          {navLinks.map((navlink, index) => (
            <Link href={navlink.href} key={index} className="text-decoration-none">
              <p className={classNames(navbarText, 'text-gas-black text-center m-0 ')}>{navlink.text}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
