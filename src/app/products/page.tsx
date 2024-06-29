'use client';

import { Product } from '@/components';
import Layout from '@/components/Layout';
import React from 'react';
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

export default function Home() {
  const { currentLocale } = useLocaleContext();
  const products: Products[] = require('../../../data/products.json');

  const typedTranslations: any = require('../../../data/text.json');

  const t = typedTranslations[currentLocale]?.productsPage || {};

  return (
    <div className="position-relative overflow-hidden z-index-2">
      <Layout>
        <div className="container mb-64">
          <div className="row">
            <div className="col-lg-8">
              <h1>{t.title || 'Products'}</h1>
              <h3>{t.description} </h3>
            </div>
            <div className="container border-top-gold mt-64 pt-64"></div>
            {products.map((product, index) => {
              const localeProductInfo = product[currentLocale];
              return (
                <div className="col-12 col-lg-6 col-xl-4 mb-64 height-100" key={index}>
                  <Product
                    image={localeProductInfo.images[0]}
                    name={localeProductInfo.title}
                    description={localeProductInfo.description.map(
                      (desc: { title: any; value: any }) => `${desc.title}: ${desc.value}`
                    )}
                    price={localeProductInfo.price}
                    productHref={`/product?id=${index}`}
                    remote={localeProductInfo.remote}
                    energyClass={localeProductInfo.energyClass}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </div>
  );
}
