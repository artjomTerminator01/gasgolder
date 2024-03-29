'use client';
import { Service } from '@/components';
import Layout from '@/components/Layout';
import Image from 'next/image';
import React from 'react';
import classes from '../../styles/pages/_home.module.scss';

import smartHome from '../../../public/assets/services/smartHome.png';
import climate from '../../../public/assets/services/climate.png';
import gear from '../../../public/assets/services/gear.png';
import hammer from '../../../public/assets/services/hammer.png';
import helmet from '../../../public/assets/services/helmet.png';
import helmet2 from '../../../public/assets/services/helmet2.png';
const { serviceIconWrapper } = classes;

export default function Home() {
  const services = [
    { icon: gear, title: 'Монтаж и обслуживание емкостей LPG' },
    { icon: hammer, title: 'Монтаж и обслуживание газовых котлов' },
    { icon: helmet, title: 'Монтаж и обслуживание котельных и теплоузлов' },
    { icon: smartHome, title: 'Монтаж и обслуживание тепловых насосов всех видов' },
    { icon: helmet2, title: 'Сантехнические работы' },
    { icon: climate, title: 'Монтаж и обслуживание вентиляционных шахт' },
  ];

  return (
    <div className="position-relative overflow-hidden z-index-2">
      <Layout>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h1>Teenused</h1>
              <h3>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime distinctio eos impedit a ipsam enim
                dolorem ab rerum facilis sit tempore sapiente tenetur deserunt aliquam ea repellat quia, recusandae
                temporibus!
              </h3>
            </div>
            <div className="container border-top-gold mt-lg-64 mt-32 pt-64"></div>
            <div className="col-lg-4 offset-lg-2">
              {services.slice(0, 3).map((service, index) => (
                <div key={index} className="d-flex gap-16 flex-align-items-center">
                  <Image
                    src={service.icon}
                    className={serviceIconWrapper}
                    height={150}
                    width={150}
                    alt="Gasgolder teenus"
                  />
                  <h4>{service.title}</h4>
                </div>
              ))}
            </div>
            <div className="col-lg-4">
              {services.slice(3, 6).map((service, index) => (
                <div key={index} className="d-flex gap-16 flex-align-items-center">
                  <Image
                    src={service.icon}
                    className={serviceIconWrapper}
                    height={150}
                    width={150}
                    alt="Gasgolder teenus"
                  />
                  <h4>{service.title}</h4>
                </div>
              ))}
            </div>
            <div className="container border-top-gold mt-64 pt-64"></div>
            <div className="d-flex flex-column gap-lg-128 gap-32 mb-64">
              {services.map((service, index) => (
                <Service
                  key={index}
                  title={service.title}
                  icon={service.icon}
                  description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime distinctio eos impedit a ipsam enim
              dolorem ab rerum facilis sit tempore sapiente tenetur deserunt aliquam ea repellat quia, recusandae
              temporibus!"
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
