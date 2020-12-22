import React from 'react';
import client from 'utils/client';
import PropTypes from 'prop-types';
import Page from 'components/Page';
import { ElementType } from 'constants/types';

const pathsQuery = `
  *[_type == "page"]{
    "link": slug.current
  }
`;
const query = `
  *[_type == "page" && slug.current == $slug]{
    ..., 
    pageBuilder[]{
      ...,
      elements[]{
        ...,
        _type == "grid" => {
          ...,
          elements[]->
        }
      }
    }
  }[0]
`;

const CustomPage = ({ title, description, pageBuilder }) => {
  return (
    <>
      <Page
        title={title}
        description={description}
        pageBuilder={pageBuilder}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const pathsResult = await client.fetch(pathsQuery) || [];
  const paths = pathsResult.map((item) => ({ params: { slug: item.link } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const data = await client.fetch(query, { slug }) || {};
  const { title, description, pageBuilder } = data;

  return {
    props: { title, description, pageBuilder },
  };
};

CustomPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pageBuilder: PropTypes.arrayOf(ElementType),
};

export default CustomPage;
