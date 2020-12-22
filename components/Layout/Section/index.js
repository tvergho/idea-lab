import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ElementType } from 'constants/types';
import { defaultResolver } from 'resolvers';
import styles from './styles.module.scss';

const Section = ({ elements, color }) => {
  const [className, setClassName] = useState(styles.section);

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
    <section className={className}>
      <div className={styles.container}>
        {elements.map((element) => {
          return defaultResolver(element);
        })}
      </div>
    </section>
  );
};

Section.propTypes = {
  elements: PropTypes.arrayOf(ElementType),
  color: PropTypes.string,
};

export default Section;
