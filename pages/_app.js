import React from 'react';
import Layout from 'components/Layout';
import ConfigContext from 'context/ConfigContext';
import client from 'utils/client';
import PropTypes from 'prop-types';
import { NavLinkType } from 'constants/types';
import 'styles/global.scss';

const query = `
  *[_type == "siteSettings"]{
    title,
    "header": header[]{
      display,
      "link": page->slug.current,
      dropdown[]{
        display,
        "link": page->slug.current,
      }
    }
  }[0]
  `;

function MyApp({
  Component, pageProps, title, header,
}) {
  return (
    <ConfigContext.Provider value={{ siteTitle: title }}>
      <Layout header={header}>
        <Component {...pageProps} />
      </Layout>
    </ConfigContext.Provider>
  );
}

MyApp.getInitialProps = async () => {
  const { title, header } = await client.fetch(query) || {};

  return {
    title,
    header,
  };
};

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  title: PropTypes.string,
  header: PropTypes.arrayOf(NavLinkType),
};

export default MyApp;
