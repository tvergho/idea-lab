/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { ImageReferenceType } from 'lib/types';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { urlFor } from 'utils/client';
import styles from './styles.module.scss';

const PersonItem = ({ image, name, linkedin }) => {
  const imageUrl = image ? urlFor(image).width(300).url() : '/';

  const content = () => {
    return (
      <>
        <div className={styles.image}>
          <Image src={imageUrl} layout="responsive" width={300} height={400} objectFit="cover" />
        </div>

        <h5 className={styles.name}>{name}</h5>
      </>
    );
  };

  const withLinkedin = (child) => {
    if (!linkedin) return child;
    else {
      return (
        <a target="_blank" rel="noreferrer" href={linkedin}>{child}</a>
      );
    }
  };

  return (
    <div className={styles.item}>
      {withLinkedin(content())}
    </div>
  );
};

PersonItem.propTypes = {
  image: ImageReferenceType,
  name: PropTypes.string,
  linkedin: PropTypes.string,
};

export default PersonItem;
