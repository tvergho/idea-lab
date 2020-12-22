/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Link from 'next/link';
import { NavLinkType } from 'constants/types';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import useDelay from 'utils/useDelay';
import styles from './styles.module.scss';
import { DropdownArrow } from '../assets';

const ANIMATION_LENGTH = 300;
const defaultPath = '/';

const NavLink = ({ link, display, dropdown }) => {
  const [hovering, setHovering] = useState(false);
  const visible = useDelay(hovering, ANIMATION_LENGTH, false, true, true);
  const isDropdown = !!dropdown && dropdown.length > 0;

  return (
    <div className={styles['nav-link-container']} onMouseEnter={() => { setHovering(true); }} onMouseLeave={() => { setHovering(false); }}>
      <Link href={link} passHref key={display}>
        <a className={styles['nav-link']}>
          {display}
          {isDropdown && <DropdownArrow />}
        </a>
      </Link>
      {isDropdown && visible && <Dropdown links={dropdown} hovering={hovering} />}
    </div>
  );
};

const Dropdown = ({ links, hovering }) => {
  return (
    <motion.div className={styles.dropdown} animate={{ opacity: hovering ? 1 : 0 }} transition={{ duration: ANIMATION_LENGTH / 1000 }}>
      <div className={styles['dropdown-inner']}>
        {links.map(({ link = defaultPath, display }) => {
          return (
            <NavLink link={link} display={display} key={display} />
          );
        })}
      </div>
    </motion.div>
  );
};

const HeaderLinksDesktop = ({ links }) => {
  return (
    <div className={styles.links}>
      {links && links.map(({ link = defaultPath, display, dropdown }) => {
        return (
          <NavLink link={link} display={display} dropdown={dropdown} key={display} />
        );
      })}
    </div>
  );
};

HeaderLinksDesktop.propTypes = {
  links: PropTypes.arrayOf(NavLinkType).isRequired,
};

export default HeaderLinksDesktop;
