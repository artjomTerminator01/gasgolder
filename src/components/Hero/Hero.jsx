'use client';
import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import Typed from 'typed.js';

import classes from './_hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';

import translations from '../../../data/text.json';
import { useLocaleContext } from '../LocaleContextProvider/LocaleContextProvider';
const { gasText, heroWrapper, heroImage, description } = classes;

const Hero = () => {
  const { currentLocale } = useLocaleContext();
  const typedRef = useRef(null);

  const typedTranslations = translations;

  const t = typedTranslations[currentLocale]?.hero || {};

  useEffect(() => {
    const options = {
      strings: t.typedStrings || [
        'We heat all over Estonia!',
        'Your indoor climate dream arrives',
        'Your comfort, our mission',
      ],
      typeSpeed: 60,
      backSpeed: 10,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(typedRef.current, options);
    return () => {
      typed.destroy();
    };
  }, [t.typedStrings]);

  return (
    <div id="wordpress-optimization" className={classNames(heroWrapper, 'container border-top-gray-accent-2')}>
      <div className="row">
        <div className="col-xl-8 col-12">
          <div className={classNames(`pt-lg-96 pt-md-48 pt-32 mb-16  m-0 d-flex flex-column gap-10 position-relative`)}>
            <h1 className={classNames(gasText, 'm-0 text-gas-black text-md-left text-center')} ref={typedRef}></h1>
            <h2 className={classNames(description, 'text-md-left text-center')}>
              {t.description ||
                'If you are looking for a reliable partner in the field of heat pumps, ventilation equipment and cooling systems, you are in the right place. Our passion is to ensure your comfort and cost-effectiveness all year round.'}
            </h2>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-flex-start gap-16">
              <Link href="/services" className="text-decoration-none">
                <button className="buttonRounded">{t.servicesButton || 'Explore Services'}</button>
              </Link>
              <Link href="/products" className="text-decoration-none">
                <button className="buttonRounded">{t.productsButton || 'View Products'}</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="d-xl-flex d-none col-xl-4 col-12 flex-align-items-center position-relative py-16">
          <Image src={'/assets/hero.png'} width={700} height={640} className={heroImage} alt="Gaasikatlad" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
