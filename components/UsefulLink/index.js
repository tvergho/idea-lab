import React from 'react';
import PropTypes from 'prop-types';
import { ImageReferenceType } from 'lib/types';
import Image from 'next/image';
import { urlFor } from 'utils/client';
import styles from './styles.module.scss';

const UsefulLink = ({ display, url, image }) => {
  const imageUrl = image ? urlFor(image).width(800).url() : '/';
  return (
    <div className={styles['useful-link']}>
      <a href={url} className="no-hover" target="_blank" rel="noreferrer">
        <div className={styles.image}>
          <Image layout="responsive" src={imageUrl} width={300} height={250} objectFit="cover" />
        </div>

        <p>{display}</p>
        <h6>{url}</h6>
      </a>
    </div>
  );
};

UsefulLink.propTypes = {
  display: PropTypes.string,
  url: PropTypes.string,
  image: ImageReferenceType,
};

export default UsefulLink;
