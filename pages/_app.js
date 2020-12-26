import React from 'react';
import Layout from 'components/Layout';
import GlobalContext from 'lib/GlobalContext';
import client from 'utils/client';
import useRouterScroll from 'utils/useRouterScroll';
import PropTypes from 'prop-types';
import { NavLinkType, PostType } from 'lib/types';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import 'styles/global.scss';
import 'styles/hamburgers.scss';

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
    },
    "footer": footer[]{
      display,
      "link": page->slug.current
    }
  }[0]
`;

const postsQuery = `
  *[_type == "post"] | order(_createdAt desc)[0..2]
`;

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#00693E',
      dark: '#12312B',
    },
  },
  typography: {
    fontFamily: [
      'AvenirNext',
      'Avenir Next',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

function MyApp({
  Component, pageProps, title, header, footer, recentPosts,
}) {
  useRouterScroll();

  return (
    <ThemeProvider theme={theme}>
      <GlobalContext.Provider value={{ siteTitle: title, recentPosts }}>
        <Layout header={header} footer={footer}>
          <Component {...pageProps} />
        </Layout>
      </GlobalContext.Provider>
    </ThemeProvider>
  );
}

MyApp.getInitialProps = async (context) => {
  const { title, header, footer } = await client.fetch(query) || {};
  const recentPosts = await client.fetch(postsQuery) || [];

  return {
    title,
    header,
    footer,
    recentPosts,
  };
};

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  title: PropTypes.string,
  header: PropTypes.arrayOf(NavLinkType),
  footer: PropTypes.arrayOf(NavLinkType),
  recentPosts: PropTypes.arrayOf(PostType),
};

export default MyApp;
