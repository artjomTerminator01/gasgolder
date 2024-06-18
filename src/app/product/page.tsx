'use client';

import { TechnicalData } from '@/components';
import ImageSwitcher from '@/components/ImageSwitcher';
import Layout from '@/components/Layout';
import classNames from 'classnames';
import Link from 'next/link';
import React, { useEffect, useState, Suspense } from 'react';
import classes from '../../styles/pages/_product.module.scss';
const { card, linksWrapper } = classes;
import { useSearchParams } from 'next/navigation';
import { useLocaleContext } from '../../components/LocaleContextProvider/LocaleContextProvider';

interface Product {
  index: number;
  title: string;
  price: number;
  description: {
    title: string;
    value: string;
  }[];
  text: string;
  images: string[];
  remote: boolean;
  energyClass: string;
}

interface Products {
  [key: string]: Product;
}

function ProductContent() {
  const { currentLocale } = useLocaleContext();
  const [product, setProduct] = useState<Product | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get('id');
    const index = id !== null ? parseInt(id, 10) : 0;
    const products: Products[] = require('../../../data/products.json');

    const product = products[index][currentLocale];
    if (product) {
      setProduct(product);
    }
  }, [searchParams, currentLocale]);

  if (!product) {
    return null; // or a loading spinner
  }

  return (
    <>
      <div className={classNames(linksWrapper, 'd-flex flex-align-items-center gap-16')}>
        <Link href="/" className="text-decoration-none text-gold">
          {currentLocale == 'ru' ? 'Главная страница' : 'Avaleht'}
        </Link>
        <p>→</p>
        <Link href="/products" className="text-decoration-none text-gold">
          {currentLocale == 'ru' ? 'Товары' : 'Tooted'}
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
    </>
  );
}

export default function Product() {
  return (
    <Layout>
      <div className="container mb-32">
        <div className="row">
          <Suspense fallback={<div>Loading...</div>}>
            <ProductContent />
          </Suspense>
        </div>
      </div>
    </Layout>
  );
}
