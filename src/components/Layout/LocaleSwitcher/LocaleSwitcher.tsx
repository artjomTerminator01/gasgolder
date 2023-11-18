'use client';

import React from 'react';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import classNames from 'classnames';

const LocaleSwitcher = ({ currentLocale, isMobile = false }: { currentLocale: string; isMobile?: boolean }) => {
  const curretPath = usePathname();

  return (
    <Link
      className="text-decoration-none m-0 p-0 pb-2"
      href={currentLocale == 'ru' ? `/et/${curretPath.slice(3)}` : `/ru${curretPath.slice(3)}`}
    >
      <h4 className={classNames('m-0 p-0 p-8 text-gold')}>{currentLocale == 'ru' ? 'EST' : 'RU'}</h4>
    </Link>
  );
};

export default LocaleSwitcher;
