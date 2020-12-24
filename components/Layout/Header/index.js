/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useCallback } from 'react';
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
  const [visible, setVisible] = useState(true);
  let lastPos = 0;

  const onScroll = () => {
    const scrollPos = window.scrollY;

    if (scrollPos > 100 && scrollPos > lastPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    lastPos = window.scrollY;
  };

  useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={visible ? styles['header-container'] : `${styles['header-container']} ${styles['scroll-up']}`}>
      <nav className={visible ? styles.header : `${styles.header} ${styles['scroll-up']}`}>
        <Logo />
        {isMobile ? <HeaderLinksMobile links={links} /> : <HeaderLinksDesktop links={links} />}
      </nav>
    </div>
  );
};

Header.propTypes = {
  links: PropTypes.arrayOf(NavLinkType).isRequired,
};

export default Header;
