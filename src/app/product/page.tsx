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
  const [product, setProduct] = useState<{
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
  }>();
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get('id');
    const index = id !== null ? parseInt(id, 10) : 0; // Convert to a number, default to 0
    const product = products[index];
    if (product) {
      setProduct(product);
    }
  }, [searchParams]);
  return (
    <Layout>
      <div className="container mb-32">
        <div className="row">
          {product && (
            <>
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
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
