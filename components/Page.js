import React, { useContext } from 'react';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import ConfigContext from 'context/ConfigContext';

const Page = ({ title, description }) => {
  const { siteTitle } = useContext(ConfigContext);

  return (
    <>
      <NextSeo
        title={`${title} | ${siteTitle}`}
        description={description}
      />
    </>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Page;
