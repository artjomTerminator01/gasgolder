import { Carousel, Gallery, Hero, Product, Service, ServiceCard } from '@/components';
import Layout from '@/components/Layout';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

import hexagon from '../../../public/icons/hexagon.svg';
import snowIcon from '../../../public/icons/snow-icon.svg';
import settings from '../../../public/icons/settings.svg';

import classes from '../../styles/pages/_home.module.scss';
const { goldGradient, blueGradient, serviceIconWrapper } = classes;

import ac from '../../../public/assets/conditioner.png';

export default function Home() {
  const dictionary: {
    [key: string]: {
      title: string;
    };
  } = {
    ru: {
      title: 'Home page',
    },
    et: {
      title: 'Kodu leht',
    },
  };

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
      <Layout currentLocale={'et'}>
        <div className="container mb-64">
          <div className="row">
            <div className="col-8">
              <h1>Tooted</h1>
              <h3>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime distinctio eos impedit a ipsam enim
                dolorem ab rerum facilis sit tempore sapiente tenetur deserunt aliquam ea repellat quia, recusandae
                temporibus!
              </h3>
            </div>
            <div className="container border-top-gold mt-64 pt-64"></div>
            <div className="col-12 col-lg-6 col-xl-4 mb-64 height-100 ">
              <Product
                image={ac}
                name={'Daikin Altherma 3 GEO inverter-tüüpi maasoojuspump EGSAH06D9W koos 180 l tarbeveeboileriga'}
                description={['Küttevõimsus: 7,5 kW']}
                price={2000}
                productHref="/product/0"
                remote={true}
                energyClass="A++"
              />
            </div>
            <div className="col-12 col-lg-6 col-xl-4 mb-64 height-100">
              <Product
                image={ac}
                name={'Daikin Altherma 3 GEO inverter-tüüpi maasoojuspump EGSAH06D9W koos 180 l tarbeveeboileriga'}
                description={['Küttevõimsus: 7,5 kW', ' Köetav pind: kuni 180 m²']}
                price={2000}
                productHref="/"
                remote={true}
                energyClass="A++"
              />
            </div>
            <div className="col-12 col-lg-6 col-xl-4 mb-64 height-100">
              <Product
                image={ac}
                name={'Daikin Altherma 3 GEO inverter-tüüpi maasoojuspump EGSAH06D9W koos 180 l tarbeveeboileriga'}
                description={['Küttevõimsus: 7,5 kW', ' Köetav pind: kuni 180 m²']}
                price={2000}
                productHref="/"
                remote={true}
                energyClass="A++"
              />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
