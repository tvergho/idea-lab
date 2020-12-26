import React, { useContext } from 'react';
import PageContext from 'lib/PageContext';
import PropTypes from 'prop-types';
import { ImageReferenceType } from 'lib/types';
import Image from 'components/Image';
import { urlFor } from 'utils/client';
import styles from './styles.module.scss';

const UsefulLink = ({ display, url, image }) => {
  const { preview } = useContext(PageContext);
  const imageUrl = image ? urlFor(image, preview).width(800).url() : '/';
  return (
    <div className={styles['useful-link']}>
      <a href={url} className="no-hover" target="_blank" rel="noreferrer">
        <div className={styles.image}>
          <Image src={imageUrl} width="100%" height={250} objectFit="cover" />
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
