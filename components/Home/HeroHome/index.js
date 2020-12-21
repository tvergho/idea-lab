import React from 'react';
import PropTypes from 'prop-types';
import HeroIllustration from '../../../public/home-hero.svg';
import styles from './styles.module.scss';

const HeroHome = ({ title, subtitle }) => {
  return (
    <section className={styles['hero-section']}>
      <div className={styles['hero-text']}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>

      <HeroIllustration />
    </section>
  );
};

HeroHome.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default HeroHome;
