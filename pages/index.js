import React from 'react';
import Page from 'components/Page';
import PropTypes from 'prop-types';
import client from 'utils/client';
import { homeResolver } from 'resolvers';
import { ElementType } from 'lib/types';

const query = '*[_type == "page" && title == "Home"][0]';

const Home = ({ title, description, pageBuilder }) => {
  return (
    <>
      <Page
        title={title}
        description={description}
        pageBuilder={pageBuilder}
        resolver={homeResolver}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const data = await client.fetch(query) || {};
  const { title, description, pageBuilder } = data;

  return {
    props: { title, description, pageBuilder },
  };
};

Home.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pageBuilder: PropTypes.arrayOf(ElementType),
};

export default Home;
