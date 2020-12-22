import React from 'react';
import PropTypes from 'prop-types';
import { ElementType } from 'constants/types';
import { defaultResolver } from 'resolvers';
import styles from './styles.module.scss';

const Section = ({ elements, color }) => {
  const className = () => {
    switch (color) {
    case 'light':
      return `${styles.light} ${styles.section}`;
    case 'emphasis':
      return `${styles.emphasis} ${styles.section}`;
    default:
      return styles.section;
    }
  };

  return (
    <section className={className()}>
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
