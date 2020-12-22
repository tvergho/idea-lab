import React from 'react';
import Layout from 'components/Layout';
import GlobalContext from 'context/GlobalContext';
import client from 'utils/client';
import PropTypes from 'prop-types';
import { NavLinkType, PostType } from 'constants/types';
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

const postsQuery = `
  *[_type == "post"] | order(_createdAt desc)[0..2]
`;

function MyApp({
  Component, pageProps, title, header, recentPosts,
}) {
  return (
    <GlobalContext.Provider value={{ siteTitle: title, recentPosts }}>
      <Layout header={header}>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext.Provider>
  );
}

MyApp.getInitialProps = async () => {
  const { title, header } = await client.fetch(query) || {};
  const recentPosts = await client.fetch(postsQuery) || [];

  return {
    title,
    header,
    recentPosts,
  };
};

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  title: PropTypes.string,
  header: PropTypes.arrayOf(NavLinkType),
  recentPosts: PropTypes.arrayOf(PostType),
};

export default MyApp;
