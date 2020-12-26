import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ImageReferenceType, CategoryType } from 'lib/types';
import PageContext from 'lib/PageContext';
import Section from 'components/Layout/Section';
import calcDate from 'utils/calcDate';
import Image from 'components/Image';
import { urlFor } from 'utils/client';
import Categories from '../Categories';
import styles from './styles.module.scss';

const TopSection = ({
  title, createdAt, image, categories,
}) => {
  const { preview } = useContext(PageContext);
  const date = calcDate(createdAt);
  const imageUrl = urlFor(image, preview).width(1200).url();

  return (
    <>
      <Section color="emphasis">
        <div className={styles['section-container']}>
          <div className={styles.text}>
            <p>{date}</p>
            <h3>{title}</h3>
            <Categories categories={categories} />
          </div>
        </div>
      </Section>

      <section className={styles['image-background']}>
        <div className={styles['image-container']}>
          <div className={styles.image}>
            <Image src={imageUrl} objectFit="contain" responsive />
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
  categories: PropTypes.arrayOf(CategoryType),
};

export default TopSection;
