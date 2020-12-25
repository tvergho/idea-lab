/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import { SlugType, ImageReferenceType } from 'lib/types';
import { urlFor } from 'utils/client';
import Image from 'next/image';
import Link from 'next/link';
import { appendPostsEnding } from 'utils/slugParsers';
import calcDate from 'utils/calcDate';
import styles from './styles.module.scss';

const PostItem = ({
  createdAt, slug, image, description, title,
}) => {
  const imageUrl = image ? urlFor(image).width(700).url() : '/';
  const toUrl = appendPostsEnding(slug?.current) || '/';

  return (
    <div className={styles['post-item']}>
      <Link href={toUrl} passHref>
        <a className={styles['post-link']}>
          <div className={styles.image}>
            <Image src={imageUrl} layout="responsive" width={350} height={233} objectFit="cover" />
          </div>

          <h4 className={styles.title}>{title}</h4>
        </a>
      </Link>
      <p className={styles.desc}>{description}</p>
      <h6 className={styles.date}>{calcDate(createdAt)}</h6>
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
