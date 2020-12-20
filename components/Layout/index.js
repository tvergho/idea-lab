import React from 'react';
import PropTypes from 'prop-types';
import { NavLinkType } from 'constants/types';
import Header from './Header';
import styles from './styles.module.scss';

const Layout = ({ children, header }) => {
  return (
    <>
      <Header links={header} />
      <main className={styles.content}>
        {children}
      </main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
  header: PropTypes.arrayOf(NavLinkType),
};

export default Layout;
