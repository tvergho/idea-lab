import React from 'react';
import Page from 'components/Page';
import { CategoryType, ImageReferenceType } from 'lib/types';
import client, { getClient } from 'utils/client';
import { TopSection } from 'components/Posts';
import TextContent from 'components/TextBlock/TextContent';
import PropTypes from 'prop-types';
import styles from 'components/Posts/styles.module.scss';

const postsQuery = `
*[_type == "post" && slug.current == $slug]{
  ...,
  "categories": categories[]->{title, slug}
}
`;
const allPostsQuery = '*[_type == "post"] | order(_createdAt desc)';

const PostPage = ({
  title, description, body, image, createdAt, categories, preview,
}) => {
  return (
    <>
      <Page
        title={title}
        description={description}
        preview={preview}
      />
      <TopSection title={title} image={image} createdAt={createdAt} categories={categories} />

      <article className={styles['body-container']}>
        <div className={styles['post-body']}>
          <TextContent content={body} />
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
  const { preview = false } = context;
  const slug = context?.params?.slug;
  const postData = await getClient(preview).fetch(postsQuery, { slug }) || {};
  const {
    title, description, image, body, _createdAt: createdAt, categories,
  } = postData[postData.length - 1];

  return {
    props: {
      title, description, image, body, createdAt, categories, preview,
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
  preview: PropTypes.bool,
};

export default PostPage;
