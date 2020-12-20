/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { NavLinkType } from 'constants/types';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Header = ({ links }) => {
  const defaultPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  return (
    <nav className={styles.header}>
      <div className={styles.logo}>IDEA <span className={styles['second-word']}>Lab</span></div>

      <div className={styles.links}>
        {links.map(({ link = defaultPath, display, dropdown }) => {
          return (
            <Link href={link} passHref><a>{display}</a></Link>
          );
        })}
      </div>
    </nav>
  );
};

Header.propTypes = {
  links: PropTypes.arrayOf(NavLinkType),
};

export default Header;
