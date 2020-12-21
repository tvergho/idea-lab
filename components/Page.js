import React, { useContext } from 'react';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import ConfigContext from 'context/ConfigContext';
import { defaultResolver, combineResolvers } from 'resolvers';

const Page = ({
  title, description, pageBuilder, resolver,
}) => {
  const { siteTitle } = useContext(ConfigContext);

  return (
    <>
      <NextSeo
        title={`${title} | ${siteTitle}`}
        description={description}
      />

      {pageBuilder && pageBuilder.map((item) => {
        return combineResolvers(resolver, defaultResolver)(item);
      })}
    </>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pageBuilder: PropTypes.arrayOf(PropTypes.shape({
    _key: PropTypes.string,
    _type: PropTypes.string,
  })),
  resolver: PropTypes.func,
};

export default Page;
