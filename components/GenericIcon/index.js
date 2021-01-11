import React from 'react';
import PropTypes from 'prop-types';
import { ImageReferenceType } from 'lib/types';
import { urlFor } from 'utils/client';
import Image from 'components/Image';
import BlockContent from '@sanity/block-content-to-react';
import styles from './styles.module.scss';

const GenericIcon = ({ title, description, image }) => {
  const imageUrl = urlFor(image).height(440).url();

  return (
    <div className={styles['generic-icon']}>
      <Image src={imageUrl} height={220} width="100%" objectFit="contain" />

      <h3 className={styles.title}>{title}</h3>
      <div className={styles.description}>
        <BlockContent blocks={description} />
      </div>
    </div>
  );
};

GenericIcon.propTypes = {
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.object),
  image: ImageReferenceType,
};

export default GenericIcon;
