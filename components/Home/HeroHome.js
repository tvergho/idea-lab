import React from 'react';
import PropTypes from 'prop-types';
import Hero from 'components/Layout/Hero';
import HeroIllustration from '../../public/home-hero.svg';

const HeroHome = ({ title, subtitle }) => {
  return (
    <Hero title={title} subtitle={subtitle} illustration={HeroIllustration} />
  );
};

HeroHome.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.arrayOf(PropTypes.object),
};

export default HeroHome;
