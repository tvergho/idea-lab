import React from 'react';
import PropTypes from 'prop-types';
import { PostType } from 'constants/types';
import Grid from 'components/Layout/Grid';
import PostItem from './PostItem';

const PostGrid = ({ posts }) => {
  const postItems = [];
  if (!posts) return null;

  posts.forEach(({
    _createdAt, slug, image, description, title,
  }) => {
    postItems.push(<PostItem createdAt={_createdAt} slug={slug} image={image} description={description} title={title} key={title} />);
  });

  return (
    <Grid items={postItems} />
  );
};

PostGrid.propTypes = {
  posts: PropTypes.arrayOf(PostType),
};

export default PostGrid;
