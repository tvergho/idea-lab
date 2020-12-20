import React from 'react';
import Page from 'components/Page';
import { getHomeData } from 'utils/sanityApi';

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
  const { title, description } = await getHomeData();

  return {
    props: { title, description },
  };
};

export default Home;
