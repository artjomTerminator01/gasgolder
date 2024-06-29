'use client';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import classes from './_carousel.module.scss';
import ServiceCard from '../ServiceCard';
import smartHome from '../../../public/assets/services/smartHome.png';
import climate from '../../../public/assets/services/climate.png';
import gear from '../../../public/assets/services/gear.png';
import hammer from '../../../public/assets/services/hammer.png';
import helmet from '../../../public/assets/services/helmet.png';
import helmet2 from '../../../public/assets/services/helmet2.png';

import translations from '../../../data/text.json';
import { useLocaleContext } from '../LocaleContextProvider/LocaleContextProvider';

const { card, marqueeContainer, marquee, marquee2, tempMarquee, marqueeBase } = classes;

const Carousel = () => {
  const { currentLocale } = useLocaleContext();

  // Use any to avoid TypeScript errors
  const typedTranslations: any = translations;

  // Fetch translations based on currentLocale
  const t = typedTranslations[currentLocale]?.carousel || {};

  const arr = [
    {
      index: 1,
      title: t.service1Title || 'Монтаж и обслуживание емкостей LPG',
      href: '/services#0',
      icon: gear,
      subtitle: t.service1Subtitle || '',
    },
    {
      index: 2,
      title: t.service2Title || 'Монтаж и обслуживание газовых котлов',
      href: '/services#1',
      icon: hammer,
      subtitle: t.service2Subtitle || '',
    },
    {
      index: 3,
      title: t.service3Title || 'Монтаж и обслуживание котельных и теплоузлов',
      href: '/services#2',
      icon: helmet,
      subtitle: t.service3Subtitle || '',
    },
  ];
  const arr2 = [
    {
      index: 1,
      title: t.service4Title || 'Монтаж и обслуживание тепловых насосов всех видов',
      href: '/services#3',
      icon: smartHome,
      subtitle: t.service4Subtitle || '',
    },
    {
      index: 2,
      title: t.service5Title || 'Сантехнические работы',
      href: '/services#4',
      icon: helmet2,
      subtitle: t.service5Subtitle || '',
    },
    {
      index: 3,
      title: t.service6Title || 'Монтаж и обслуживание вентиляционных шахт',
      href: '/services#5',
      icon: climate,
      subtitle: t.service6Subtitle || '',
    },
  ];
  const [removeMarquee2, setRemoveMarquee2] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setRemoveMarquee2(true);
    }, 40000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <div className={classNames('position-relative d-none d-lg-block', marqueeContainer)}>
        <div
          className={classNames('d-flex justify-content-around', tempMarquee, marqueeBase, removeMarquee2 && 'd-none')}
        >
          {arr2.map((cardData) => (
            <div className={card} key={cardData.index + 3}>
              <ServiceCard {...cardData} />
            </div>
          ))}
        </div>
        <div className={classNames('d-flex', marqueeBase, marquee)}>
          {arr.map((cardData) => (
            <div className={card} key={cardData.index}>
              <ServiceCard {...cardData} />
            </div>
          ))}
        </div>
        <div className={classNames('d-flex justify-content-around', marquee, marqueeBase, marquee2)}>
          {arr2.map((cardData) => (
            <div className={card} key={cardData.index + 3}>
              <ServiceCard {...cardData} />
            </div>
          ))}
        </div>
      </div>
      <div className="d-flex flex-column align-items-center gap-16 d-lg-none p-16">
        {arr2.map((cardData, index) => (
          <ServiceCard {...cardData} key={index} />
        ))}
        {arr.map((cardData, index) => (
          <ServiceCard {...cardData} key={index} />
        ))}
      </div>
    </>
  );
};

export default Carousel;
