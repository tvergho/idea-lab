import React from 'react';
import Page from 'components/Page';
import PropTypes from 'prop-types';
import client from 'utils/client';

const query = '*[_type == "page" && title == "Home"][0]';

const Home = ({ title, description }) => {
  return (
    <>
      <Page
        title={title}
        description={description}
      />
    </>
  );
};

export const getStaticProps = async () => {
  const { title, description } = await client.fetch(query) || {};

  return {
    props: { title, description },
  };
};

Home.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Home;
