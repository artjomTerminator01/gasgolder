'use client';
import { Carousel, Gallery, Hero, Service, ServiceCard } from '@/components';
import Layout from '@/components/Layout';
import Image,from 'next/image';
import React, { useEffect, useState } from 'react';

import hexagon from '../../../public/icons/hexagon.svg';
import snowIcon from '../../../public/icons/snow-icon.svg';
import settings from '../../../public/icons/settings.svg';

import classes from '../../styles/pages/_home.module.scss';
import { getLocale } from '../../utils/locale';
const { goldGradient, blueGradient, serviceIconWrapper } = classes;

export default function Home() {
  const [currentLocale, setCurrentLocale] = useState('et');

  useEffect(() => {
    const locale = getLocale();
    setCurrentLocale(locale);
  }, []);

  const services = [
    { icon: hexagon, title: 'Монтаж и обслуживание емкостей LPG' },
    { icon: settings, title: 'Монтаж и обслуживание газовых котлов' },
    { icon: snowIcon, title: 'Установка кондиционеров' },
    { icon: hexagon, title: 'Монтаж и обслуживание емкостей LPG' },
    { icon: settings, title: 'Монтаж и обслуживание газовых котлов' },
    { icon: snowIcon, title: 'Установка кондиционеров' },
  ];

  return (
    <div className="position-relative overflow-hidden z-index-2">
      {/* <div className={goldGradient}></div>
      <div className={blueGradient}></div> */}
      <Layout currentLocale={currentLocale}>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <h1>Teenused</h1>
              <h3>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime distinctio eos impedit a ipsam enim
                dolorem ab rerum facilis sit tempore sapiente tenetur deserunt aliquam ea repellat quia, recusandae
                temporibus!
              </h3>
            </div>
            <div className="container border-top-gold mt-64 pt-64"></div>
            <div className="col-4 offset-2">
              {services.slice(0, 3).map((service, index) => (
                <div key={index} className="d-flex gap-16 flex-align-items-center">
                  <Image
                    src={service.icon}
                    className={serviceIconWrapper}
                    height={40}
                    width={40}
                    alt="Gasgolder teenus"
                  />
                  <h4>{service.title}</h4>
                </div>
              ))}
            </div>
            <div className="col-4">
              {services.slice(3, 6).map((service, index) => (
                <div key={index} className="d-flex gap-16 flex-align-items-center">
                  <Image
                    src={service.icon}
                    className={serviceIconWrapper}
                    height={40}
                    width={40}
                    alt="Gasgolder teenus"
                  />
                  <h4>{service.title}</h4>
                </div>
              ))}
            </div>
            <div className="container border-top-gold mt-64 pt-64"></div>
            <div className="d-flex flex-column gap-128 mb-64">
              {services.map((service, index) => (
                <Service
                  key={index}
                  title={service.title}
                  icon={service.icon}
                  description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime distinctio eos impedit a ipsam enim
              dolorem ab rerum facilis sit tempore sapiente tenetur deserunt aliquam ea repellat quia, recusandae
              temporibus!"
                  index={index}
                  direction={index % 2 == 0 ? 'left' : 'right'}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
