'use client';
import React from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { useLocaleContext } from '../../components/LocaleContextProvider/LocaleContextProvider';
import Service from '@/components/Service';

import smartHome from '../../../public/assets/services/smartHome.png';
import climate from '../../../public/assets/services/climate.png';
import gear from '../../../public/assets/services/gear.png';
import hammer from '../../../public/assets/services/hammer.png';
import helmet from '../../../public/assets/services/helmet.png';
import helmet2 from '../../../public/assets/services/helmet2.png';
import classes from '../../styles/pages/_home.module.scss';
const { serviceIconWrapper } = classes;

export default function Home() {
  const { currentLocale } = useLocaleContext();

  // Use any to avoid TypeScript errors
  const typedTranslations: any = require('../../../data/text.json');

  // Fetch translations based on currentLocale
  const t = typedTranslations[currentLocale]?.servicesPage || {};

  const services = [
    { icon: gear, title: t.services[0].title, text: t.services[0].text, price: 1000 },
    { icon: hammer, title: t.services[1].title, text: t.services[1].text, price: 1000 },
    { icon: helmet, title: t.services[2].title, text: t.services[2].text, price: 1000 },
    { icon: smartHome, title: t.services[3].title, text: t.services[3].text, price: 1000 },
    { icon: helmet2, title: t.services[4].title, text: t.services[4].text, price: 1000 },
    { icon: climate, title: t.services[5].title, text: t.services[5].text, price: 1000 },
  ];

  return (
    <div className="position-relative overflow-hidden z-index-2">
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1>{t.title || 'Teenused'}</h1>
              <h3>
                {t.description ||
                  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime distinctio eos impedit a ipsam enim dolorem ab rerum facilis sit tempore sapiente tenetur deserunt aliquam ea repellat quia, recusandae temporibus!'}
              </h3>
            </div>
            <div className="container border-top-gold mt-lg-64 mt-32 pt-64"></div>
            <div className="col-lg-4 offset-lg-2">
              {services.slice(0, 3).map((service, index) => (
                <a
                  key={index}
                  className="d-flex gap-16 flex-align-items-center text-decoration-none text-gas-black"
                  href={`#${index}`}
                >
                  <Image
                    src={service.icon}
                    className={serviceIconWrapper}
                    height={150}
                    width={150}
                    alt="Gasgolder teenus"
                  />
                  <h4>{service.title}</h4>
                </a>
              ))}
            </div>
            <div className="col-lg-4">
              {services.slice(3, 6).map((service, index) => (
                <a
                  key={index}
                  className="d-flex gap-16 flex-align-items-center text-decoration-none text-gas-black"
                  href={`#${index + 3}`}
                >
                  <Image
                    src={service.icon}
                    className={serviceIconWrapper}
                    height={150}
                    width={150}
                    alt="Gasgolder teenus"
                  />
                  <h4>{service.title}</h4>
                </a>
              ))}
            </div>
            <div className="container border-top-gold mt-64 pt-64"></div>
            <div className="d-flex flex-column gap-lg-128 gap-32 mb-64">
              {services.map((service, index) => (
                <Service
                  key={index}
                  title={service.title}
                  icon={service.icon}
                  description={service.text}
                  index={index}
                  price={service.price}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
