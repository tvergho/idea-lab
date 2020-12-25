import React from 'react';
import PropTypes from 'prop-types';
import { ImageReferenceType } from 'lib/types';
import Section from 'components/Layout/Section';
import calcDate from 'utils/calcDate';
import Image from 'next/image';
import { urlFor } from 'utils/client';
import styles from './styles.module.scss';

const TopSection = ({ title, createdAt, image }) => {
  const date = calcDate(createdAt);
  const imageUrl = urlFor(image).width(1200).url();

  return (
    <>
      <Section color="emphasis">
        <div className={styles['section-container']}>
          <div className={styles.text}>
            <p>{date}</p>
            <h3>{title}</h3>
            <h6>Press Releases</h6>
          </div>
        </div>
      </Section>

      <section className={styles['image-background']}>
        <div className={styles['image-container']}>
          <div className={styles.image}>
            <Image src={imageUrl} objectFit="contain" layout="responsive" width={700} height={466} />
          </div>
        </div>
      </section>
    </>
  );
};

TopSection.propTypes = {
  title: PropTypes.string,
  createdAt: PropTypes.string,
  image: ImageReferenceType,
};

export default TopSection;
