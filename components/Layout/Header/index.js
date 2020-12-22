/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { NavLinkType } from 'lib/types';
import PropTypes from 'prop-types';
import useWindowSize from 'utils/useWindowSize';
import styles from './styles.module.scss';
import HeaderLinksDesktop from './HeaderLinksDesktop';
import HeaderLinksMobile from './HeaderLinksMobile';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <a className={styles['no-hover']}>
        <div className={styles.logo}>
          IDEA <span className={styles['second-word']}>Lab</span>
        </div>
      </a>
    </Link>
  );
};

const Header = ({ links }) => {
  const { width } = useWindowSize();
  const isMobile = !(width > 768);

  return (
    <nav className={styles.header}>
      <Logo />
      {isMobile ? <HeaderLinksMobile links={links} /> : <HeaderLinksDesktop links={links} />}
    </nav>
  );
};

Header.propTypes = {
  links: PropTypes.arrayOf(NavLinkType).isRequired,
};

export default Header;
