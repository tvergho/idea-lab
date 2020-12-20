import React from 'react';
import Page from 'components/Page';
import PropTypes from 'prop-types';
import { getPageByTitle } from 'utils/sanityApi';

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
  const { title, description } = await getPageByTitle('Home');

  return {
    props: { title, description },
  };
};

Home.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Home;
