'use client';
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import classes from './_carousel.module.scss';
import ServiceCard from '../ServiceCard';
const { card, marqueeContainer, marquee, marquee2, tempMarquee, marqueeBase } = classes;

const Carousel = () => {
  const arr = [
    {
      index: 1,
      title: 'Монтаж и обслуживание емкостей LPG',
      href: '/services',
      iconIndex: 0,
      subtitle: 'Захуярим вам лучший конциционер по самой ахуенной цене',
    },
    {
      index: 2,
      title: 'Монтаж и обслуживание газовых котлов',
      href: '/services',
      iconIndex: 2,
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
    {
      index: 3,
      title: 'Title 3',
      href: '/services',
      iconIndex: 1,
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
    // Add more card data here
  ];
  const arr2 = [
    {
      index: 1,
      title: 'Установка кондиционеров',
      href: '/services',
      iconIndex: 0,
      subtitle: 'Захуярим вам лучший конциционер по самой ахуенной цене',
    },
    {
      index: 2,
      title: 'Сантехнические работы',
      href: '/services',
      iconIndex: 2,
      subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit...',
    },
    {
      index: 3,
      title: 'Title 3',
      href: '/services',
      iconIndex: 1,
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
    <div className={classNames('position-relative d-none d-sm-block', marqueeContainer)}>
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
  );
};

export default Carousel;
