import React from 'react';
import PropTypes from 'prop-types';
import Hero from 'components/Layout/Hero';
import HeroIllustration from '../../public/about-hero.svg';

const HeroAbout = ({ title, subtitle }) => {
  return (
    <Hero title={title} subtitle={subtitle} illustration={HeroIllustration} small reverse />
  );
};

HeroAbout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.arrayOf(PropTypes.object),
};

export default HeroAbout;
