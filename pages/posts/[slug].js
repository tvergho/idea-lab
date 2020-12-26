import React from 'react';
import Page from 'components/Page';
import { CategoryType, ImageReferenceType, SlugType } from 'lib/types';
import client from 'utils/client';
import { TopSection } from 'components/Posts';
import BlockContent from '@sanity/block-content-to-react';
import PropTypes from 'prop-types';
import styles from 'components/Posts/styles.module.scss';

const postsQuery = `
*[_type == "post" && slug.current == $slug][0]{
  ...,
  "categories": categories[]->{title, slug}
}
`;
const allPostsQuery = '*[_type == "post"] | order(_createdAt desc)';

const PostPage = ({
  title, description, body, image, createdAt, categories,
}) => {
  return (
    <>
      <Page
        title={title}
        description={description}
      />
      <TopSection title={title} image={image} createdAt={createdAt} categories={categories} />

      <article className={styles['body-container']}>
        <div className={styles['post-body']}>
          <BlockContent blocks={body} />
        </div>
      </article>
    </>
  );
};

export const getStaticPaths = async () => {
  const posts = await client.fetch(allPostsQuery) || [];
  const paths = posts.map((post) => ({ params: { slug: post.slug.current } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const slug = context?.params?.slug;
  const postData = await client.fetch(postsQuery, { slug }) || {};
  const {
    title, description, image, body, _createdAt: createdAt, categories,
  } = postData;

  return {
    props: {
      title, description, image, body, createdAt, categories,
    },
  };
};

PostPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  body: PropTypes.arrayOf(PropTypes.object),
  image: ImageReferenceType,
  createdAt: PropTypes.string,
  categories: PropTypes.arrayOf(CategoryType),
};

export default PostPage;
