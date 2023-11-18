import { Carousel, Gallery, Hero, ServiceCard } from '@/components';
import Layout from '@/components/Layout';
import Image, { StaticImageData } from 'next/image';
import React from 'react';

import homeclimate from '../../public/assets/partners/homeclimate.png';
import gaspre from '../../public/assets/partners/gaspre.png';
import propaan from '../../public/assets/partners/propaan.png';
import vekanor from '../../public/assets/partners/vekanor.png';
import onninen from '../../public/assets/partners/onninen.png';
import room from '../../public/assets/room.webp';

import classes from '../styles/pages/_home.module.scss';
const { goldGradient, blueGradient, whyUsText, imageWrapper } = classes;

export default function Home() {
  // const dictionary: {
  //   [key: string]: {
  //     title: string;
  //   };
  // } = {
  //   ru: {
  //     title: 'Home page',
  //   },
  //   et: {
  //     title: 'Kodu leht',
  //   },
  // };

  const partners: string[] = [
    '1wymioATMXCkGX8V_0cplTgQPc9pNUUU4',
    '1g_wAjEtR2gh4GWAhIIbkTcXNbOe2-wzJ',
    '16zJDkQiGquxwjLk3UkL_ds4AFJKuytGO',
    '1_5TmYOAaWCB4QwymFZhy4jmeFaR5hNL3',
    '13aTjcrDShSe77K20WRSbDtzIJ__NEpSo',
  ];

  return (
    <div className="position-relative overflow-hidden z-index-2">
      <div className={goldGradient}></div>
      <div className={blueGradient}></div>
      <Layout currentLocale={'et'}>
        <Hero />
        <div className="container border-top-gold ">
          <div className="row">
            <h1 className="text-center text-gas-black my-64"> Meie teenused</h1>
          </div>
        </div>
        <Carousel />
        <div className="container border-top-gold mt-64 pt-64"></div>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-column gap-16 justify-content-center flex-align-items-center">
              <h1 className="text-center text-gas-black my-16"> Miks meie?</h1>
              <p className={whyUsText}>
                Kui otsite usaldusväärset partenrit soojuspumpade, ventilatsiooniseadmete ja jahutusseadmete alal, siis
                olete õiges kohas. Meie kireks teie mugavuse ja säästlikkuse tagamine aastaringselt. Kui otsite
                usaldusväärset partenrit soojuspumpade, ventilatsiooniseadmete ja jahutusseadmete alal, siis olete õiges
                kohas. Meie kireks teie mugavuse ja säästlikkuse tagamine aastaringselt.
              </p>
            </div>
          </div>
        </div>
        <div className="container border-top-gold mt-64 pt-64"></div>
        <Gallery
          currentLocale="et"
          images={[
            'https://drive.google.com/uc?export=view&id=1X9687ro6h_UNAXFpuEFRr4VAcYO2EJsw',
            'https://drive.google.com/uc?export=view&id=1d92ELN9PNkejFXo9RqHAae2xTLYv_bxz',
            'https://drive.google.com/uc?export=view&id=1krlw2Yd987Tj2mpwtfJZW-rjVuWnJPkq',
            'https://drive.google.com/uc?export=view&id=1zuyzzyEVdY7ywNPgZYoT-2Qs_i1X-TlD',
          ]}
        />
        <div className="container border-top-gold mt-64 pt-64"></div>
        <div className="container mt-32 mb-64">
          <div className="row">
            <h1 className="text-center text-gas-black mb-64">Partnerid</h1>
            <div className="col-12 d-flex gap-24 justify-content-center flex-wrap">
              {partners.map((image: string, index: number) => (
                <Image
                  key={index}
                  src={'https://drive.google.com/uc?export=view&id=' + image}
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
