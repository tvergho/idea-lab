import React from 'react';
import PropTypes from 'prop-types';
import { ElementType } from 'constants/types';
import { defaultResolver } from 'resolvers';
import styles from './styles.module.scss';

const LightSection = ({ elements }) => {
  console.log(elements);
  return (
    <section className={styles['light-section']}>
      {elements.map((element) => {
        return defaultResolver(element);
      })}
    </section>
  );
};

LightSection.propTypes = {
  elements: PropTypes.arrayOf(ElementType),
};

export default LightSection;
