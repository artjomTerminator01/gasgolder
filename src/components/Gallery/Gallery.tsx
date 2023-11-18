'use client';
import React, { useState, useEffect, useRef } from 'react';

import Image, { StaticImageData } from 'next/image';
import classNames from 'classnames';
// import { NavigationButton } from '@/gui-components';
import arrow from '../../../public/icons/arrow.svg';

import classes from './_gallery.module.scss';
const { slider, slidesWrapper, imageWrapper, navigation, rotated, navButton } = classes;

interface GalleryProps {
  images: string[];
  type?: string;
  slidePercentageWidth?: number;
  mobileModifier?: number;
  fullWidth?: boolean;
  currentLocale: string;
  galleryImageAlt?: string;
}

const Gallery: React.FC<GalleryProps> = ({
  images,
  type = 'image',
  slidePercentageWidth = 2 / 3,
  mobileModifier = 768,
  fullWidth = true,
  currentLocale = 'et',
  galleryImageAlt = 'devtailor',
}) => {
  const [elementWidth, setElementWidth] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [sliderFullWidth, setSliderFullWidth] = useState(0);
  const [sliderVisibleWidth, setSliderVisibleWidth] = useState(0);
  const [activeSlide, setActiveSlide] = useState(fullWidth ? Math.floor(images.length / 2) : 0);

  const elementRef = useRef<HTMLDivElement>(null);

  const isSmallScreen = () => {
    return sliderVisibleWidth < mobileModifier;
  };

  const setSliderWidths = () => {
    const visibleWidth = document.body.clientWidth;
    const elementWidth = visibleWidth < mobileModifier ? visibleWidth : visibleWidth * slidePercentageWidth;
    setSliderVisibleWidth(visibleWidth);
    setElementWidth(elementWidth);
    setSliderFullWidth(elementWidth * images.length);
  };

  const nextSlide = () => {
    let nextActiveSlide = activeSlide + 1;
    if (nextActiveSlide > images.length - 1) {
      nextActiveSlide = 0;
    }
    setActiveSlide(nextActiveSlide);
    setSliderPosition(-((100 / images.length) * nextActiveSlide));
  };

  const prevSlide = () => {
    let prevActiveSlide = activeSlide - 1;
    if (prevActiveSlide < 0) {
      prevActiveSlide = images.length - 1;
    }
    setActiveSlide(prevActiveSlide);
    setSliderPosition(-((100 / images.length) * prevActiveSlide));
  };

  useEffect(() => {
    const handleResize = () => {
      setSliderWidths();
      setSliderPosition(-((100 / images.length) * activeSlide));
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div ref={elementRef}>
      <div className="d-flex position-relarive flex-align-items-center mb-64">
        {images.length > 1 && (
          <div
            className={classNames(
              navigation,
              'd-flex justify-content-space-between position-absolute px-md-56 px-10 z-index-2'
            )}
          >
            <Image
              className={classNames(rotated, navButton)}
              onClick={prevSlide}
              src={arrow}
              height={20}
              width={20}
              alt="prev image"
            />
            <Image className={navButton} onClick={nextSlide} src={arrow} height={20} width={20} alt="next image" />
          </div>
        )}
        <div className={classNames(slider, type === 'card' && 'background-dark-red py-lg-80 py-24')}>
          <div
            className={slidesWrapper}
            style={{
              transform: `translateX(${sliderPosition}%)`,
              width: `${sliderFullWidth}px`,
            }}
          >
            {images.map((image: string, index: number) => (
              <div key={index}>
                <Image
                  src={image}
                  width={isSmallScreen() ? elementWidth - 8 : elementWidth - 40}
                  height={isSmallScreen() ? elementWidth * 1.17 : (elementWidth - 40) / 1.3}
                  alt={galleryImageAlt}
                  className={imageWrapper}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
