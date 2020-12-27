import React from 'react';
import Page from 'components/Page';
import PropTypes from 'prop-types';
import { getClient } from 'utils/client';
import { homeResolver } from 'resolvers';
import { ElementType } from 'lib/types';

const query = '*[_type == "page" && slug.current == "/"]';

const Home = ({
  title = '', description = '', pageBuilder, preview,
}) => {
  return (
    <>
      <Page
        title={title}
        description={description}
        pageBuilder={pageBuilder}
        resolver={homeResolver}
        preview={preview}
      />
    </>
  );
};

export const getStaticProps = async (context) => {
  const { preview = false } = context;
  const data = await getClient(preview).fetch(query) || {};
  const { title = null, description = null, pageBuilder = null } = data[data.length - 1] || {};

  return {
    props: {
      title, description, pageBuilder, preview,
    },
  };
};

Home.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pageBuilder: PropTypes.arrayOf(ElementType),
  preview: PropTypes.bool,
};

export default Home;
