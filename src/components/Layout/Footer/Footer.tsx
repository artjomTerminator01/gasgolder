import classNames from 'classnames';
import React, from 'react';
import Image from 'next/image';
import vectorImage from '../../../../public/assets/hero-vector-union.svg';

import fbLogo from '../../../../public/icons/fb.svg';

import classes from './_footer.module.scss';
import Link from 'next/link';
import { useLocaleContext } from '../../LocaleContextProvider/LocaleContextProvider';
const { wrapper, mapWrapper, contactText, verctorWrapper, bottomBox, goldGradient } = classes;

const Footer = () => {
  const { currentLocale } = useLocaleContext();

  return (
    <div id="contact" className={classNames(wrapper, 'background-gas-black py-32 px-lg-128 px-32 position-relative')}>
      <div className={goldGradient}></div>
      <Image
        src={vectorImage}
        alt="Gas golder"
        width={600}
        height={900}
        className={classNames(verctorWrapper, 'position-absolute ')}
      />
      <div className="container">
        <h2 className="text-gold m-0 mb-32 text-center">Kontaktid</h2>
        <div className="row border-top-gold pt-32">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="d-flex flex-column">
              <div className="d-flex flex-align-items-center gap-16">
                <p className={classNames(contactText, 'text-gold')}>GasGolder OÜ </p>
                <Link
                  href="https://www.facebook.com/gasgolder"
                  target={'_blank'}
                  className="cursor-pointer text-decoration-none"
                >
                  <Image src={fbLogo} alt="GasGolder Facebook" width={40} height={40} />
                </Link>
              </div>
              <div className="d-flex gap-8">
                <p className={classNames(contactText, 'text-gold')}>Rg-kood: </p>
                <p className="text-cream-white">16513517</p>
              </div>
              <div className="d-flex gap-8">
                <p className={classNames(contactText, 'text-gold')}>KMKR: </p>
                <p className="text-cream-white">EE102502723</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="d-flex flex-column">
              <div className="d-flex gap-8">
                <p className={classNames(contactText, 'text-gold')}>Telefon: </p>
                <p className="text-cream-white">+372 5818 0074</p>
              </div>
              <div className="d-flex gap-8">
                <p className={classNames(contactText, 'text-gold')}>E-post: </p>
                <p className="text-cream-white"> info@gasgolder.ee</p>
              </div>
              <div className="d-flex gap-8">
                <p className={classNames(contactText, 'text-gold')}>Lahtiolekuajad: </p>
                <p className="text-cream-white"> E-R 9:00-18:00</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12 mb-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8133.6100210971435!2d27.430561!3d59.359621!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d81871475cfe3b%3A0x648802067fc53145!2sGasGolder%20O%C3%9C!5e0!3m2!1sru!2see!4v1693653198097!5m2!1sru!2see"
              width="400"
              height="250"
              loading="lazy"
              className={mapWrapper}
            ></iframe>
          </div>
          <div className={bottomBox}>
            <div className="d-flex gap-8 flex-column flex-lg-row">
              <p className={classNames(contactText, 'text-gold')}>Kontor ja toodete väljastamine:</p>
              <p className="text-cream-white"> Ida-Viru maakond, Jõhvi vald, Jõhvi linn, Narva mnt 46a, 41536 </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
