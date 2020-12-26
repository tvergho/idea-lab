import React from 'react';
import Page from 'components/Page';
import client from 'utils/client';
import { PostType } from 'lib/types';
import { PostGrid } from 'components/Posts';
import PropTypes from 'prop-types';
import styles from 'components/Posts/styles.module.scss';

const postsQuery = `*[_type == "post" && $slug in categories[]->slug.current] | order(_createdAt desc){
  ...,
  "categories": categories[]->{title, slug}
}`; // Returns a list of posts for the current category.
const categoriesQuery = '*[_type == "category"]{"link": slug.current}'; // Returns the slugs of all the categories.
const titleQuery = '*[_type == "category" && slug.current == $slug]{title, "link": slug.current}[0]'; // Returns info about one specific category.

const CategoryPage = ({ title, posts }) => {
  return (
    <>
      <Page title={title} showTitle />
      <div className={styles['post-container']}>
        <PostGrid posts={posts} />
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const categories = await client.fetch(categoriesQuery) || [];
  const paths = categories.map((cat) => ({ params: { category: cat.link } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context?.params?.category;

  const posts = await client.fetch(postsQuery, { slug });
  const { title = null } = await client.fetch(titleQuery, { slug });

  return {
    props: {
      posts,
      title,
    },
  };
};

CategoryPage.propTypes = {
  title: PropTypes.string,
  posts: PropTypes.arrayOf(PostType),
};

export default CategoryPage;
