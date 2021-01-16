import React from 'react';
import PropTypes from 'prop-types';
import { ImageReferenceType } from 'lib/types';
import { urlFor } from 'utils/client';
import BlockContent from '@sanity/block-content-to-react';
import Image from 'components/Image';
import styles from './styles.module.scss';

const ContentSection = ({ image, content }) => {
  const imageUrl = urlFor(image).width(680).height(453).url();

  return (
    <div className={styles.content}>
      <div className={styles['image-container']}>
        <Image src={imageUrl} width={680} height={453} aspectConstrained responsive objectFit="cover" />
      </div>
      <div className={styles['text-container']}>
        <BlockContent blocks={content} />
      </div>
    </div>
  );
};

ContentSection.propTypes = {
  image: ImageReferenceType,
  content: PropTypes.arrayOf(PropTypes.content),
};

export default ContentSection;
