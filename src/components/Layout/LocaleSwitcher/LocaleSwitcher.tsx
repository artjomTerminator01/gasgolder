import React from 'react';
import { setLocale } from '../../../utils/locale';

import classNames from 'classnames';

const LocaleSwitcher = ({ isMobile = false, currentLocale = 'et' }: { isMobile?: boolean; currentLocale: string }) => {
  const toggleLocale = () => {
    currentLocale == 'et' ? setLocale('ru') : setLocale('et');
    window.location.reload();
  };

  return (
    <div className="m-0 p-0 pb-2 cursor-pointer" onClick={() => toggleLocale()}>
      <h4 className={classNames('m-0 p-0 p-8 text-gold')}>{currentLocale == 'et' ? 'RU' : 'EST'}</h4>
    </div>
  );
};

export default LocaleSwitcher;
