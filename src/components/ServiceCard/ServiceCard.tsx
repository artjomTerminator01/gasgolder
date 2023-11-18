import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import hexagon from '../../../public/icons/hexagon.svg';
import snowIcon from '../../../public/icons/snow-icon.svg';
import settings from '../../../public/icons/settings.svg';
import classes from './_serviceCard.module.scss';
const { card, black, white, gold, textBox, icon, link, linkWhite } = classes;

interface ServiceCardProps {
  index: number;
  title: string;
  href: string;
  subtitle: string;
  iconIndex: number;
}
const ServiceCard: FC<ServiceCardProps> = ({ index, title, iconIndex, href, subtitle }) => {
  const iconsArr = [hexagon, snowIcon, settings];
  return (
    <Link href={href} className="text-decoration-none">
      <div className={classNames(card, index == 1 && black, index == 2 && gold, index == 3 && white)}>
        <Image src={iconsArr[iconIndex]} width={320} height={320} alt={title} className={icon} />
        <div className={classNames(textBox, 'd-flex height-100 flex-column justify-content-flex-end overflow-hidden')}>
          <h3 className="text-white m-0 mb-16">{title}</h3>
          <h5 className="text-white m-0">{subtitle}</h5>
          <h6
            className={classNames(
              iconIndex == 1 ? 'text-gas-black' : 'text-white',
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
