import React, { FC } from 'react';
import Image, { StaticImageData } from 'next/image';

import classes from './_service.module.scss';
import classNames from 'classnames';
const {
  rectangle,
  mainText,
  iconWrapper,
  price,
  primaryCard,
  secondaryCard,
  tertiaryCard,
  primaryText,
  secondaryText,
  tertiaryText,
} = classes;

interface ServiceProps {
  title: string;
  icon: StaticImageData;
  description: string;
  index: number;
  direction: 'left' | 'right';
}
const Service: FC<ServiceProps> = ({ title, icon, description, index, direction }) => {
  const getBackground = (index: number) => [primaryCard, secondaryCard, tertiaryCard][index % 3];
  const getText = (index: number) => [primaryText, secondaryText, tertiaryText][index % 3];

  return (
    <div className="row d-flex flex-align-items-center">
      <div className={classNames(index % 2 == 0 && 'order-2', 'col-5 d-flex justify-content-flex-end')}>
        <div className={classNames('position-relative', rectangle, getBackground(index))}>
          <h1 className="text-white p-32 m-0 z-index-2">LPG</h1>
          <Image
            src={icon}
            height={250}
            width={250}
            className={classNames('position-absolute', iconWrapper)}
            alt="Gasgolder teenus"
          />
        </div>
      </div>
      <div className={classNames(index % 2 == 0 && 'order-1', 'offset-1 col-4')}>
        <h2 className={mainText}>{title}</h2>
        <p>{description}</p>
        <div className="d-flex gap-24">
          <h4 className={classNames(price, getText(index))}>Alates 1000€</h4>
          <button className={classNames('buttonRounded m-16', getBackground(index))}>Võta ühendust</button>
        </div>
      </div>
    </div>
  );
};

export default Service;
