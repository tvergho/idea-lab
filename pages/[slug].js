import React from 'react';
import client, { getClient } from 'utils/client';
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
        _type == "textBlock" => {
          ...,
          text[]{
            ..., 
            asset->{
              ...,
              "_key": _id
            }
          }
        }
      }
    }
  }
`;

// Addresses a bug whereby expanding references for elements of a grid nulls grid elements that aren't external references.
const expandRefQuery = `
  *[_type == "page" && slug.current == $slug]{
    ..., 
    pageBuilder[]{
      ...,
      projects[]->,
      elements[]{
        ...,
        _type == "grid" => {
          ...,
          elements[]->
        },
        _type == "textBlock" => {
          ...,
          text[]{
            ..., 
            asset->{
              ...,
              "_key": _id
            }
          }
        }
      }
    }
  }
`;

const customPages = ['', '/', 'updates'];
const expandRefPages = ['team', 'projects'];

/**
 * Default page renderer for site pages.
 * Fallback for all slugs that don't match a specific page in the pages folder.
 *
 * @param {string} title Title of the page.
 * @param {string} description Description of the page, for SEO purposes.
 * @param {array} pageBuilder Array of elements to render.
 * @param {boolean} showTitle If true, displays the title at the top of the page.
 * @param {boolean} preview If true, displays the page in preview mode.
 */
const CustomPage = ({
  title = '', description = '', pageBuilder, showTitle, preview,
}) => {
  return (
    <>
      <Page
        title={title}
        description={description}
        pageBuilder={pageBuilder}
        showTitle={showTitle}
        preview={preview}
      />
    </>
  );
};

export const getStaticPaths = async () => {
  const pathsResult = await client.fetch(pathsQuery) || [];
  const paths = pathsResult.filter((item) => !(customPages.includes(item.link))).map((item) => ({ params: { slug: item.link.replace(/\//g, '') } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { preview = false } = context;
  const { slug } = context.params;
  const data = await getClient(preview).fetch(expandRefPages.includes(slug) ? expandRefQuery : query, { slug }) || {};

  const {
    title = null, description = null, pageBuilder = null, showTitle = null,
  } = data[data.length - 1] || {};

  return {
    props: {
      title, description, pageBuilder, showTitle, preview,
    },
  };
};

CustomPage.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pageBuilder: PropTypes.arrayOf(ElementType),
  showTitle: PropTypes.bool,
  preview: PropTypes.bool,
};

export default CustomPage;
