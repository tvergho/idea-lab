import React from 'react';
import Page from 'components/Page';
import PropTypes from 'prop-types';
import client from 'utils/client';

const pageQuery = '*[_type == "page" && slug.current == "updates"][0]';
const postsQuery = '*[_type == "post"] | order(_createdAt desc)[$start..$end]';
const allPostsQuery = '*[_type == "post"] | order(_createdAt desc)';

const Updates = ({ title = '', description = '', showTitle = true }) => {
  return (
    <>
      <Page
        title={title}
        description={description}
        showTitle={showTitle}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const posts = await client.fetch(allPostsQuery) || [];
  const numPages = Math.ceil(posts.length / 10);
  const paths = Array.from(Array(numPages).keys()).map((num) => ({ params: { page: [(num + 1).toString()] } }));
  paths.push({ params: { page: [] } });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const pageData = await client.fetch(pageQuery) || {};
  const { title = null, description = null, showTitle = null } = pageData;

  let pageNum = 1;
  const page = context?.params?.page;
  if (page) pageNum = parseInt(page[0], 10);
  if (!pageNum) pageNum = 1;

  const start = (pageNum - 1) * 10;
  const posts = await client.fetch(postsQuery, { start, end: start + 9 });

  return {
    props: {
      title, description, showTitle, posts,
    },
  };
};

Updates.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  showTitle: PropTypes.bool,
};

export default Updates;
