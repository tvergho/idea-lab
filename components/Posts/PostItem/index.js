/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import PageContext from 'lib/PageContext';
import { SlugType, ImageReferenceType, CategoryType } from 'lib/types';
import { urlFor, dimensionsFor } from 'utils/client';
import Image from 'components/Image';
import Link from 'next/link';
import { appendPrefix } from 'utils/slugParsers';
import calcDate from 'utils/calcDate';
import Categories from '../Categories';
import styles from './styles.module.scss';

const PostItem = ({
  createdAt, slug, image, description, title, categories,
}) => {
  const { preview } = useContext(PageContext);
  const [width, height] = dimensionsFor(image);
  const imageUrl = image ? urlFor(image, preview).width(700).url() : '/';
  const toUrl = appendPrefix(slug?.current, 'posts') || '/';

  return (
    <div className={styles['post-item']}>
      <Link href={toUrl} passHref>
        <a className={styles['post-link']}>
          <div className={styles.image}>
            <Image src={imageUrl} width={width} height={height} responsive fullHeight objectFit="cover" />
          </div>

          <h4 className={styles.title}>{title}</h4>
        </a>
      </Link>
      <p className={styles.desc}>{description}</p>
      <h6 className={styles.date}>{calcDate(createdAt)}</h6>
      {categories && <div className={styles.divider} />}
      <Categories categories={categories} className={styles.categories} />
    </div>
  );
};

PostItem.propTypes = {
  createdAt: PropTypes.string,
  slug: SlugType,
  image: ImageReferenceType,
  description: PropTypes.string,
  title: PropTypes.string,
  categories: PropTypes.arrayOf(CategoryType),
};

export default PostItem;
