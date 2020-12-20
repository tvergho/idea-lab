import React from 'react';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';

const Page = ({ title, description }) => {
  return (
    <>
      <NextSeo
        title={`${title} | IDEA Lab`}
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
