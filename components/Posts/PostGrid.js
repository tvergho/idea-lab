import React from 'react';
import PropTypes from 'prop-types';
import { PostType } from 'lib/types';
import Grid from 'components/Layout/Grid';
import PostItem from './PostItem';

const PostGrid = ({ posts }) => {
  if (!posts) return null;

  const postItems = posts.map(({
    _createdAt, slug, image, description, title, categories,
  }) => {
    return (
      <PostItem
        createdAt={_createdAt}
        slug={slug}
        image={image}
        description={description}
        title={title}
        key={_createdAt}
        categories={categories.length > 0 && categories[0]?.slug?.current ? categories : null}
      />
    );
  });

  return (
    <Grid items={postItems} noEvenSpace />
  );
};

PostGrid.propTypes = {
  posts: PropTypes.arrayOf(PostType),
};

export default PostGrid;
