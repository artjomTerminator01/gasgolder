import Image, { StaticImageData } from 'next/image';
import React, { FC } from 'react';
import classNames from 'classnames';
import wifi from '../../../public/icons/wifi.svg';

import classes from './_product.module.scss';
import Link from 'next/link';
const { card, productImage, imageWrapper, priceWrapper, wifiWrapper, link } = classes;

interface ProductProps {
  image: string;
  name: string;
  price: number;
  description: string[];
  productHref: string;
  remote?: boolean;
  energyClass?: string;
}

const Product: FC<ProductProps> = ({ image, name, price, description, productHref, remote, energyClass }) => {
  return (
    <Link href={productHref} className="text-decoration-none text-gas-black">
      <div className={classNames('p-16 pb-0 text-center position-relative background-white', card)}>
        <p className={classNames('position-absolute p-12 pr-8 background-gold text-white', priceWrapper)}>
          {price + ' €'}
        </p>
        <div className={imageWrapper}>
          <Image src={image} width={300} height={400} alt={name} className={productImage} />
        </div>
        <h5 className="text-gas-black m-0 p-0">{name}</h5>
        <div className="border-top-gas-black my-16 o-30"></div>
        <div className="d-flex flex-column justtify-content-flex-start gap-16">
          {description.map((line, index) => (
            <p key={index} className="text-gas-black m-0 p-0 o-80 text-left">
              {line}
            </p>
          ))}
        </div>
        <div className="border-top-gas-black my-16 o-30"></div>
        <div className="d-flex justify-content-space-between">
          <p className={classNames(link, 'p-0 m-0')}>Vaata lähemalt →</p>
          <div className="d-flex justify-content-flex-end gap-16">
            {remote && <Image src={wifi} height={20} width={20} alt="remote" className={wifiWrapper} />}
            {energyClass && <p className="p-0 m-0 text-gold">{energyClass}</p>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Product;
