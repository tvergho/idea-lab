import React from 'react';
import PropTypes from 'prop-types';
import { ImageReferenceType, SlugType } from 'lib/types';
import Section from 'components/Layout/Section';
import TwoColumn from 'components/TwoColumn';
import { appendPrefix } from 'utils/slugParsers';
import styles from './styles.module.scss';

const FeaturedPost = ({
  title, description, image, slug,
}) => {
  const normalizedSlug = { ...slug, current: appendPrefix(slug.current, 'posts') };

  return (
    <Section color="emphasis">
      <h4 className={styles.header}>Updates</h4>
      <div className={styles['main-content']}>
        <TwoColumn
          title={title}
          image={image}
          fullPage
          side="right"
          content={description}
          button="Read more"
          isTextButton
          buttonPage={normalizedSlug}
          linkTitle
        />
      </div>
    </Section>
  );
};

FeaturedPost.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: ImageReferenceType,
  slug: SlugType,
};

export default FeaturedPost;
