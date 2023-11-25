'use client';
import React from 'react';
import { setLocale } from '../../../utils/locale';

import classNames from 'classnames';
import { useLocaleContext } from '../../LocaleContextProvider/LocaleContextProvider';

const LocaleSwitcher = ({ isMobile = false }: { isMobile?: boolean }) => {
  const { currentLocale, setCurrentLocale } = useLocaleContext();

  const toggleLocale = () => {
    const locale = currentLocale == 'et' ? 'ru' : 'et';

    setCurrentLocale(locale);
  };

  return (
    <div className="m-0 p-0 pb-2 cursor-pointer" onClick={() => toggleLocale()}>
      <h4 className={classNames('m-0 p-0 p-8 text-gold')}>{currentLocale == 'et' ? 'RU' : 'EST'}</h4>
    </div>
  );
};

export default LocaleSwitcher;
