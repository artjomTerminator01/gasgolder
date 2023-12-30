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

const { card, marqueeContainer, marquee, marquee2, tempMarquee, marqueeBase } = classes;

const Carousel = () => {
  const arr = [
    {
      index: 1,
      title: 'Монтаж и обслуживание емкостей LPG',
      href: '/services',
      icon: gear,
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
    {
      index: 2,
      title: 'Монтаж и обслуживание газовых котлов',
      href: '/services',
      icon: hammer,
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
    {
      index: 3,
      title: 'Монтаж и обслуживание котельных и теплоузлов',
      href: '/services',
      icon: helmet,
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
  ];
  const arr2 = [
    {
      index: 1,
      title: 'Монтаж и обслуживание тепловых насосов всех видов',
      href: '/services',
      icon: smartHome,
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
    {
      index: 2,
      title: 'Сантехнические работы',
      href: '/services',
      icon: helmet2,
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
    {
      index: 3,
      title: 'Монтаж и обслуживание вентиляционных шахт',
      href: '/services',
      icon: climate,
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
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
        {arr2.map((cardData) => (
          <ServiceCard {...cardData} />
        ))}
        {arr.map((cardData) => (
          <ServiceCard {...cardData} />
        ))}
      </div>
    </>
  );
};

export default Carousel;
