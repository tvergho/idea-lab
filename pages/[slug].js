import React from 'react';
import client from 'utils/client';
import PropTypes from 'prop-types';
import Page from 'components/Page';
import { ElementType } from 'lib/types';

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

const CustomPage = ({
  title = '', description = '', pageBuilder, showTitle,
}) => {
  return (
    <>
      <Page
        title={title}
        description={description}
        pageBuilder={pageBuilder}
        showTitle={showTitle}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const pathsResult = await client.fetch(pathsQuery) || [];
  const paths = pathsResult.map((item) => ({ params: { slug: item.link.replace(/\//g, '') } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const data = await client.fetch(query, { slug }) || {};
  const {
    title = null, description = null, pageBuilder = null, showTitle = null,
  } = data;

  return {
    props: {
      title, description, pageBuilder, showTitle,
    },
  };
};

CustomPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pageBuilder: PropTypes.arrayOf(ElementType),
  showTitle: PropTypes.bool,
};

export default CustomPage;
