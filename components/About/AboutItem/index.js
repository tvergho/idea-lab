import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PageContext from 'lib/PageContext';
import { ImageReferenceType } from 'lib/types';
import Image from 'components/Image';
import { urlFor } from 'utils/client';
import styles from './styles.module.scss';

const AboutItem = ({ image, display, description }) => {
  const { preview } = useContext(PageContext);
  const imageUrl = urlFor(image, preview).width(100).url();

  return (
    <div className={styles['about-item']}>
      <div className={styles.image}>
        <Image src={imageUrl} width={100} height={100} objectFit="contain" />
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
