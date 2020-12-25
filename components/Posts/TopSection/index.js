import React from 'react';
import PropTypes from 'prop-types';
import { ImageReferenceType, SlugType } from 'lib/types';
import Section from 'components/Layout/Section';
import calcDate from 'utils/calcDate';
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from 'utils/client';
import styles from './styles.module.scss';

const TopSection = ({
  title, createdAt, image, categories,
}) => {
  const date = calcDate(createdAt);
  const imageUrl = urlFor(image).width(1200).url();

  return (
    <>
      <Section color="emphasis">
        <div className={styles['section-container']}>
          <div className={styles.text}>
            <p>{date}</p>
            <h3>{title}</h3>
            {categories
            && (
              <h6>{categories
                .map(({ title: catTitle, slug }, i) => <Link href={`/category/${slug.current}`}>{i < categories.length - 1 ? `${catTitle}, ` : catTitle}</Link>)}
              </h6>
            )}
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
  categories: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    slug: SlugType,
  })),
};

export default TopSection;
