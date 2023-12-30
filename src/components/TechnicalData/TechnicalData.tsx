'use client';
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import classes from './_technicalData.module.scss';
import FormModal from '../FormModal';
const { pricebox, desTitle, technicalInfo, priceText } = classes;

interface ProductProps {
  title: string;
  price: number;
  text: string;
  description: { title: string; value: string }[];
}

const TechnicalData: React.FC<ProductProps> = ({ title, price, text, description }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && <FormModal closeModal={() => setShowModal(false)} product={{ title: title }} />}
      <div className="col-lg-6 col-12">
        <h3 className="text-gas-black ml-16">{title}</h3>
        <div className={classNames(pricebox, 'p-16 d-flex justify-content-space-between')}>
          <p className="text-gas-black">
            Hind: <span className={classNames('text-gold', priceText)}> {price} €</span> {`(sisaldab käibemaksu)`}
          </p>
          <button className="buttonRounded" onClick={() => setShowModal(true)}>
            Küsi pakkumist
          </button>
        </div>
        <p className="p-16">{text}</p>
        <div className={classNames(technicalInfo, 'p-16')}>
          <h3>Tehnilised andmed</h3>
          {description.map((item, index) => (
            <div className="d-flex" key={index}>
              <p className={classNames(desTitle)}>{item.title + ':'}</p>
              <p>{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TechnicalData;
