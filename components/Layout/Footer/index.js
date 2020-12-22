/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { NavLinkType } from 'constants/types';
import styles from './styles.module.scss';

const defaultPath = '/';

const Footer = ({ links }) => {
  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.logo}>IDEA <span className={styles['second-word']}>Lab</span></div>
        <div className={styles['second-line']}>Innovation, Development, and Entrepreneurship in Anesthesia</div>
      </div>

      <div className={styles.links}>
        {links && links.map(({ display, link = defaultPath }) => {
          return (
            <Link href={link} passHref key={display}>
              <a className={styles['nav-link']}>{display}</a>
            </Link>
          );
        })}
      </div>
    </footer>
  );
};

Footer.propTypes = {
  links: PropTypes.arrayOf(NavLinkType),
};

export default Footer;
