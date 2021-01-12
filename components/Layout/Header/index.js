/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
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
  const [headerVisible, setHeaderVisible] = useState(true);
  const [backdropVisible, setBackdropVisible] = useState(false);
  const lastPos = useRef(0); // Instance variable to keep track of the last scroll position.

  // Controlls the scrolling behavior of the header.
  const onScroll = () => {
    const scrollPos = window.scrollY;

    // Moves the header out of view if the user continues to scroll down on the page.
    if (scrollPos > 100 && scrollPos > lastPos.current) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }

    lastPos.current = window.scrollY;
  };

  useEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const visible = headerVisible || backdropVisible;

  return (
    <div className={visible ? styles['header-container'] : `${styles['header-container']} ${styles['scroll-up']}`}>
      <nav className={visible ? styles.header : `${styles.header} ${styles['scroll-up']}`}>
        <Logo />
        {isMobile ? <HeaderLinksMobile links={links} visible={backdropVisible} setVisible={setBackdropVisible} /> : <HeaderLinksDesktop links={links} />}
      </nav>
    </div>
  );
};

Header.propTypes = {
  links: PropTypes.arrayOf(NavLinkType).isRequired,
};

export default Header;
