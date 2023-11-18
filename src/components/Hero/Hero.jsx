'use client';
import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import Typed from 'typed.js';

import conditioner from '../../../public/assets/hero.png';
import classes from './_hero.module.scss';
import Image from 'next/image';
import Link from 'next/link';

const { gasText, heroWrapper, heroImage, description } = classes;

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ['Kütame üle Eesti!', 'Meist saabub teie sisekliima unistus', 'Teie mugavus, meie missioon '],
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
  });

  return (
    <div id="wordpress-optimization" className={classNames(heroWrapper, 'container border-top-gray-accent-2')}>
      <div className="row">
        <div className="col-xl-8 col-12">
          <div className={classNames(`pt-lg-96 pt-md-48 pt-32 mb-16  m-0 d-flex flex-column gap-10 position-relative`)}>
            <h1 className={classNames(gasText, 'm-0 text-gas-black')} ref={typedRef}></h1>
            <h2 className={description}>
              Kui otsite usaldusväärset partenrit soojuspumpade, ventilatsiooniseadmete ja jahutusseadmete alal, siis
              olete õiges kohas. Meie kireks teie mugavuse ja säästlikkuse tagamine aastaringselt.
            </h2>
            <div className="d-flex flex-wrap justify-content-center justify-content-md-flex-start gap-16">
              <Link href="/services" className="text-decoration-none">
                <button className="buttonRounded">Tutvu teenustega</button>
              </Link>
              <Link href="/products" className="text-decoration-none">
                <button className="buttonRounded">Vaata tooteid</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="d-xl-flex d-none col-xl-4 col-12 flex-align-items-center position-relative py-16">
          <Image
            src={'https://drive.google.com/uc?export=view&id=1Br5gbfulSvAvPecWnryRHGeSH1Ri3-jk'}
            width={700}
            height={640}
            className={heroImage}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
