'use client';
import React, { FC, useState } from 'react';
import Image, { StaticImageData } from 'next/image';

import classes from './_service.module.scss';
import classNames from 'classnames';
import FormModal from '../FormModal/index';

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
  // direction: 'left' | 'right';
}
const Service: FC<ServiceProps> = ({ title, icon, description, index }) => {
  const getBackground = (index: number) => [primaryCard, secondaryCard, tertiaryCard][index % 3];
  const getText = (index: number) => [primaryText, secondaryText, tertiaryText][index % 3];
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="row d-flex flex-align-items-center flex-column flex-lg-row position-relative">
      {showModal && <FormModal closeModal={() => setShowModal(false)} product={{ title: title }} />}
      <div className={classNames(index % 2 == 0 && 'order-2', 'col-lg-5 d-flex justify-content-flex-end')}>
        <div className={classNames(rectangle, getBackground(index))}>
          <Image
            src={icon}
            height={350}
            width={350}
            className={classNames('position-absolute', iconWrapper)}
            alt="Gasgolder teenus"
          />
        </div>
      </div>
      <div className={classNames(index % 2 == 0 && 'order-lg-1', 'offset-lg-1 col-lg-4')}>
        <h2 className={mainText}>{title}</h2>
        <p>{description}</p>
        <div className="d-flex gap-12">
          <h4 className={classNames(price, getText(index))}>Alates 1000€</h4>
          <button className={classNames('buttonRounded m-16', getBackground(index))} onClick={() => setShowModal(true)}>
            Võta ühendust
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;
