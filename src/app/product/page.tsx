'use client';
import { TechnicalData } from '@/components';
import ImageSwitcher from '@/components/ImageSwitcher';
import Layout from '@/components/Layout';
import classNames from 'classnames';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import products from '../../../data/products.json';
import classes from '../../styles/pages/_product.module.scss';
const { card, linksWrapper } = classes;
import { useSearchParams } from 'next/navigation';

export default function Product() {
  const searchParams = useSearchParams();
  const [product, setProduct] = useState(products[searchParams.get('id')]);
  return (
    <Layout>
      <div className="container mb-32">
        <div className="row">
          <div className={classNames(linksWrapper, 'd-flex flex-align-items-center gap-16')}>
            <Link href={'/'} className="text-decoration-none text-gold">
              Avaleht
            </Link>
            <p>→</p>
            <Link href={'/products'} className="text-decoration-none text-gold">
              Tooted
            </Link>
            <p>→</p>
            <p>{product.title}</p>
          </div>
          <div className="col-lg-6 col-12">
            <div className={classNames(card, 'width-100')}>
              <ImageSwitcher images={product.images} />
            </div>
          </div>
          <TechnicalData
            title={product.title}
            price={product.price}
            text={product.text}
            description={product.description}
          />
        </div>
      </div>
    </Layout>
  );
}
