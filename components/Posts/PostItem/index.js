/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { SlugType, ImageReferenceType } from 'constants/types';
import { urlFor } from 'utils/client';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';

const calcDate = (date) => {
  const dateObj = new Date(date);

  const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(dateObj);
  const mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(dateObj);
  const da = new Intl.DateTimeFormat('en', { day: 'numeric' }).format(dateObj);

  return `${mo} ${da}, ${ye}`;
};

const PostItem = ({
  createdAt, slug, image, description, title,
}) => {
  const imageUrl = image ? urlFor(image).width(350).url() : '/';
  const toUrl = slug?.current || '/';

  return (
    <div className={styles['post-item']}>
      <Link href={toUrl} passHref>
        <a>
          <div className={styles.image}>
            <Image src={imageUrl} layout="responsive" width={350} height={233} objectFit="cover" />
          </div>

          <div className={styles.text}>
            <h4>{title}</h4>
            <p>{description}</p>
            <h6>{calcDate(createdAt)}</h6>
          </div>
        </a>
      </Link>
    </div>
  );
};

PostItem.propTypes = {
  createdAt: PropTypes.string,
  slug: SlugType,
  image: ImageReferenceType,
  description: PropTypes.string,
  title: PropTypes.string,
};

export default PostItem;
