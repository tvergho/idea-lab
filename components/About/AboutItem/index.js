import React from 'react';
import PropTypes from 'prop-types';
import { ImageReferenceType } from 'lib/types';
import Image from 'next/image';
import { urlFor } from 'utils/client';
import styles from './styles.module.scss';

const AboutItem = ({ image, display, description }) => {
  const imageUrl = urlFor(image).width(200).url();

  return (
    <div className={styles['about-item']}>
      <div className={styles.image}>
        <Image src={imageUrl} layout="fixed" width={100} height={100} objectFit="contain" />
      </div>

      <h4 className={styles.display}>{display}</h4>
      <p className={styles.desc}>{description}</p>
    </div>
  );
};

AboutItem.propTypes = {
  display: PropTypes.string,
  description: PropTypes.string,
  image: ImageReferenceType,
};

export default AboutItem;
