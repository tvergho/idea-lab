import React, { useContext } from 'react';
import { NextSeo } from 'next-seo';
import PropTypes from 'prop-types';
import GlobalContext from 'lib/GlobalContext';
import { defaultResolver, combineResolvers } from 'resolvers';
import { ElementType } from 'lib/types';

const Page = ({
  title, description, pageBuilder, resolver,
}) => {
  const { siteTitle } = useContext(GlobalContext);

  return (
    <>
      <NextSeo
        title={`${title} | ${siteTitle}`}
        description={description}
      />

      {pageBuilder && pageBuilder.map((element) => {
        return combineResolvers(resolver, defaultResolver)(element, { fullPage: true });
      })}
    </>
  );
};

Page.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pageBuilder: PropTypes.arrayOf(ElementType),
  resolver: PropTypes.func,
};

export default Page;
