'use client';

import { Carousel, Gallery, Hero } from '@/components';
import Layout from '@/components/Layout';
import Image from 'next/image';
import React from 'react';
import { useLocaleContext } from '../components/LocaleContextProvider/LocaleContextProvider';

import classes from '../styles/pages/_home.module.scss';
import translations from '../../data/text.json';

const { goldGradient, blueGradient, whyUsText, imageWrapper } = classes;

export default function Home() {
  const partners: string[] = ['homeclimate.png', 'onninen.png', 'gaspre.png', 'propaan.png', 'vekanor.png'];
  const { currentLocale } = useLocaleContext();

  const typedTranslations: any = translations;

  const t = typedTranslations[currentLocale]?.home || {};

  return (
    <div className="position-relative overflow-hidden z-index-2">
      <Layout>
        <Hero />
        <div className="container border-top-gold ">
          <div className="row">
            <h1 className="text-center text-gas-black my-64">{t.ourServices || 'Our Services'}</h1>
          </div>
        </div>
        <Carousel />
        <div className="container border-top-gold mt-64 pt-64"></div>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-column gap-16 justify-content-center flex-align-items-center">
              <h1 className="text-center text-gas-black my-16">{t.whyUs || 'Why Us?'}</h1>
              <p className={whyUsText}>
                {t.whyUsText ||
                  'If you are looking for a reliable partner in the field of heat pumps, ventilation equipment and cooling systems, you are in the right place. Our passion is to ensure your comfort and cost-effectiveness all year round. If you are looking for a reliable partner in the field of heat pumps, ventilation equipment and cooling systems, you are in the right place. Our passion is to ensure your comfort and cost-effectiveness all year round.'}
              </p>
            </div>
          </div>
        </div>
        <div className="container border-top-gold mt-64 pt-64"></div>
        <Gallery
          currentLocale={currentLocale}
          images={[
            '/assets/carousel/1.webp',
            '/assets/carousel/2.webp',
            '/assets/carousel/3.webp',
            '/assets/carousel/4.webp',
            '/assets/carousel/5.webp',
            '/assets/carousel/6.webp',
          ]}
        />
        <div className="container border-top-gold mt-64 pt-64"></div>
        <div className="container mt-32 mb-64">
          <div className="row">
            <h1 className="text-center text-gas-black mb-64">{t.partners || 'Partners'}</h1>
            <div className="col-12 d-flex gap-24 justify-content-center flex-wrap">
              {partners.map((image: string, index: number) => (
                <Image
                  key={index}
                  src={`/assets/partners/${image}`}
                  height={100}
                  width={220}
                  alt="GasGolder partner"
                  className={imageWrapper}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
