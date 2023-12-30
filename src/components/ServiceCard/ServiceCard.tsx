import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import classes from './_serviceCard.module.scss';
import { StaticImageData } from '../../../node_modules/next/image';
const { card, black, white, gold, textBox, iconWrapper, link, linkWhite } = classes;

interface ServiceCardProps {
  index: number;
  title: string;
  href: string;
  subtitle: string;
  icon: StaticImageData;
}
const ServiceCard: FC<ServiceCardProps> = ({ index, title, icon, href, subtitle }) => {
  return (
    <Link href={href} className="text-decoration-none">
      <div className={classNames(card, index == 1 && black, index == 2 && gold, index == 3 && white)}>
        <Image src={icon} width={320} height={320} alt={title} className={iconWrapper} />
        <div className={classNames(textBox, 'd-flex height-100 flex-column justify-content-flex-end overflow-hidden')}>
          <h3 className="text-white m-0 mb-16">{title}</h3>
          <h5 className="text-white m-0">{subtitle}</h5>
          <h6
            className={classNames(
              index == 1 ? 'text-white' : 'text-gas-black',
              ' m-0 mt-8 text-right',
              link,
              index == 2 && linkWhite
            )}
          >
            Vaata lähemalt →
          </h6>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
