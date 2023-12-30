'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import classes from './_imageSwitcher.module.scss';

const { featuredImage, miniImageWpapper, activeMiniImage } = classes;

const ImageSwitcher = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(images[0]);

  return (
    <div>
      <Image
        src={currentImage}
        width={200}
        height={700}
        // alt={product.title}
        className={classNames(featuredImage, 'object-fit-contain width-100')}
      />
      {images.length > 1 && (
        <div className="d-flex justify-content-space-between gap-16 flex-wrap mt-16">
          {images.map((image, index) => (
            <div
              key={index}
              onClick={() => setCurrentImage(image)}
              className={classNames(miniImageWpapper, 'cursor-pointer', image === currentImage && activeMiniImage)}
            >
              <Image
                src={image}
                width={100}
                height={200}
                //   alt={product.title}
                className={classNames('object-fit-contain height-100 width-100')}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageSwitcher;
