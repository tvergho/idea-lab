import React from 'react';
import PropTypes from 'prop-types';
import { NavLinkType } from 'lib/types';
import Header from './Header';
import Footer from './Footer';
import styles from './styles.module.scss';

export const appendSlash = (link) => {
  if (link.indexOf('/') > -1) return link;
  return `/${link}`;
};

const Layout = ({ children, header, footer }) => {
  return (
    <>
      <Header links={header} />
      <main className={styles.content}>
        {children}
      </main>
      <Footer links={footer} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  header: PropTypes.arrayOf(NavLinkType),
  footer: PropTypes.arrayOf(NavLinkType),
};

export default Layout;
