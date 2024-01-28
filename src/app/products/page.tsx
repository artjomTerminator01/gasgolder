'use client';

import { Product } from '@/components';
import Layout from '@/components/Layout';
import React from 'react';
import products from '../../../data/products.json';
import { useLocaleContext } from '../../components/LocaleContextProvider/LocaleContextProvider';

export default function Home() {
  const { currentLocale } = useLocaleContext();

  return (
    <div className="position-relative overflow-hidden z-index-2">
      <Layout>
        <div className="container mb-64">
          <div className="row">
            <div className="col-lg-8">
              <h1>Tooted</h1>
              <h3>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime distinctio eos impedit a ipsam enim
                dolorem ab rerum facilis sit tempore sapiente tenetur deserunt aliquam ea repellat quia, recusandae
                temporibus!
              </h3>
            </div>
            <div className="container border-top-gold mt-64 pt-64"></div>
            {products.map((product, index) => {
              const localeProductInfo = product[currentLocale];
              return (
                <div className="col-12 col-lg-6 col-xl-4 mb-64 height-100">
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
