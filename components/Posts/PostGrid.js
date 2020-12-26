import React from 'react';
import PropTypes from 'prop-types';
import { PostType } from 'lib/types';
import Grid from 'components/Layout/Grid';
import PostItem from './PostItem';

const PostGrid = ({ posts }) => {
  const postItems = [];
  if (!posts) return null;

  posts.forEach(({
    _createdAt, slug, image, description, title, categories,
  }) => {
    postItems.push(<PostItem
      createdAt={_createdAt}
      slug={slug}
      image={image}
      description={description}
      title={title}
      key={_createdAt}
      categories={categories.length > 0 && categories[0]?.slug?.current ? categories : null}
    />);
  });

  return (
    <Grid items={postItems} noEvenSpace />
  );
};

PostGrid.propTypes = {
  posts: PropTypes.arrayOf(PostType),
};

export default PostGrid;
