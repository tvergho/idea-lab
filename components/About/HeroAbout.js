import React from 'react';
import PropTypes from 'prop-types';
import Hero from 'components/Layout/Hero';
import HeroIllustration from '../../public/about-hero.svg';

const HeroAbout = ({ title, subtitle }) => {
  const AboutIllustration = () => {
    return <HeroIllustration width="100%" height="100%" />;
  };

  return (
    <Hero title={title} subtitle={subtitle} illustration={AboutIllustration} small reverse />
  );
};

HeroAbout.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.arrayOf(PropTypes.object),
};

export default HeroAbout;
