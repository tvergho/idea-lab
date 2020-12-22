import React, { useContext } from 'react';
import { NextSeo } from 'next-seo';
import GlobalContext from 'context/GlobalContext';
import PageNotFound from '../public/page-not-found.svg';

const FourZeroFour = () => {
  const { siteTitle } = useContext(GlobalContext);

  return (
    <>
      <NextSeo
        title={`404 | ${siteTitle}`}
        description="Page not found."
      />
      <h2>404 Error</h2>
      <h4>Page not found.</h4>
      <PageNotFound className="page-not-found" />
    </>
  );
};

export default FourZeroFour;
