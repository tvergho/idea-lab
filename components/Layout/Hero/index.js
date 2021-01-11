import React from 'react';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import styles from './styles.module.scss';

const Hero = ({
  title, subtitle, illustration: Illustration, small, reverse,
}) => {
  const renderAsSpan = () => {
    const words = title.split(' ');
    return words.map((word) => (word === 'Lab' ? <span style={{ color: '#055B39' }} key={word}>{`${word} `}</span> : <span key={word}>{`${word} `}</span>));
  };

  return (
    <section
      className={small ? `${styles['hero-section']} ${styles.small}` : styles['hero-section']}
      style={{ flexDirection: reverse ? 'column-reverse' : 'column', justifyContent: reverse ? 'flex-end' : 'flex-start' }}
    >
      <div className={styles['hero-text']}>
        <h1 className={styles.title}>{renderAsSpan()}</h1>
        <div className={styles.subtitle}>
          <BlockContent className={styles.subtitle} blocks={subtitle} />
        </div>
      </div>

      <Illustration />
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.arrayOf(PropTypes.object),
  illustration: PropTypes.elementType,
  small: PropTypes.bool,
  reverse: PropTypes.bool,
};

export default Hero;
