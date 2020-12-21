import React from 'react';
import PropTypes from 'prop-types';
import { ImageReferenceType } from 'constants/types';
import imageUrlBuilder from '@sanity/image-url';
import client from 'utils/client';
import Image from 'next/image';
import styles from './styles.module.scss';

const builder = imageUrlBuilder(client);
const urlFor = (source) => {
  return builder.image(source);
};

const TwoColumn = ({
  button, content, icon, image, side, title,
}) => {
  const imageUrl = urlFor(image).width(600).url();
  const iconUrl = urlFor(icon).url();

  return (
    <div className={styles['two-column']}>
      <Image src={imageUrl} layout="fill" objectFit="contain" />
    </div>
  );
};

TwoColumn.propTypes = {
  button: PropTypes.string,
  side: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
  image: ImageReferenceType,
  icon: ImageReferenceType,
};

export default TwoColumn;
