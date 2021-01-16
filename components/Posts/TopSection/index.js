import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ImageReferenceType, CategoryType } from 'lib/types';
import PageContext from 'lib/PageContext';
import Section from 'components/Layout/Section';
import calcDate from 'utils/calcDate';
import Image from 'components/Image';
import { urlFor, dimensionsFor } from 'utils/client';
import Categories from '../Categories';
import styles from './styles.module.scss';

/**
 * Renders the section at the top of an individual post page with a dark green background.
 *
 * @param {string} title Title of the post.
 * @param {string} createdAt Date of the post's creation. Must be in a format that is parseable by the default Javascript Date constructor.
 * @param {ImageReferenceType} image Featured image to display.
 * @param {arrayOf(CategoryType)} categories List of categories associated with this post.
 */
const TopSection = ({
  title, createdAt, image, categories,
}) => {
  const { preview } = useContext(PageContext);
  const date = calcDate(createdAt);
  const imageUrl = urlFor(image, preview).width(840).url();
  const [width, height] = dimensionsFor(image);

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
            <Image src={imageUrl} width={width} height={height} objectFit="contain" aspectConstrained />
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
