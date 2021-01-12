import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ElementType } from 'lib/types';
import { motion } from 'framer-motion';
import { defaultResolver } from 'resolvers';
import useScrollPosition from 'utils/useScrollPosition';
import useWindowSize from 'utils/useWindowSize';
import styles from './styles.module.scss';

const ANIMATION_DURATION = 600;

/**
 * Renders a section on the page.
 * Component that corresponds to the 'lightSection' element in Sanity CMS.
 * Can render sub-elements of its own through the default resolver.
 *
 * @param {array} elements Array of elements to be processed and rendered by the default resolver.
 * @param {string} color Sets the background color – light gray ('light') or dark green ('emphasis').
 * @param {string} title Title of the section to display.
 * @param {boolean} animatedUnderline If true, displays an animated underline underneath the title.
 */
const Section = ({
  elements, color, title, children, animatedUnderline,
}) => {
  const [className, setClassName] = useState(styles.section);
  const ref = useRef(null);
  const scrolled = useScrollPosition(ref, 100);
  const { width } = useWindowSize();

  const underlineWidth = width > 1000 ? '15%' : '30%';

  // Allows for dynamic resolution of the CSS styling and background color for the section.
  useEffect(() => {
    switch (color) {
    case 'light':
      setClassName(`${styles.light} ${styles.section}`);
      break;
    case 'emphasis':
      setClassName(`${styles.emphasis} ${styles.section}`);
      break;
    default:
      setClassName(styles.section);
      break;
    }
  }, [color]);

  return (
    <section className={className} ref={ref}>
      {title && <h3 className={styles.header}>{title}</h3>}
      {animatedUnderline && (
        <motion.div
          className={styles.divider}
          initial={{ width: '0px' }}
          animate={{ width: scrolled ? underlineWidth : '0px' }}
          transition={{ duration: ANIMATION_DURATION / 1000, delay: 0.2 }}
        />
      )}
      <div className={styles.container}>
        {children}
        {elements && elements.map((element) => {
          return defaultResolver(element);
        })}
      </div>
    </section>
  );
};

Section.propTypes = {
  elements: PropTypes.arrayOf(ElementType),
  color: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
  animatedUnderline: PropTypes.bool,
};

export default Section;
