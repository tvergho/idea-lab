import React, { useContext } from 'react';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import ConfigContext from 'context/ConfigContext';

const defaultResolver = (props) => {
  const { _type } = props;

  switch (_type) {
  default:
    return null;
  }
};

const Page = ({
  title, description, pageBuilder, resolver,
}) => {
  const { siteTitle } = useContext(ConfigContext);

  const combineResolvers = (item) => {
    let element = null;

    if (resolver) element = resolver(item);
    if (!element) element = defaultResolver(item);

    return element;
  };

  return (
    <>
      <NextSeo
        title={`${title} | ${siteTitle}`}
        description={description}
      />

      {pageBuilder && pageBuilder.map((item) => {
        return combineResolvers(item);
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
