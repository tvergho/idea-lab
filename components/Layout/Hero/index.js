import React from 'react';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import { ImageReferenceType } from 'lib/types';
import { urlFor } from 'utils/client';
import Image from 'components/Image';
import styles from './styles.module.scss';

// Note: direct SVG illustration support is deprecated. Pass in a Sanity ImageReference instead.
const Hero = ({
  title, subtitle, illustration: Illustration, small, reverse, width = '100%', height = '100%', image,
}) => {
  let imageUrl = '';
  if (image) imageUrl = urlFor(image).url();

  // Function to add a lighter shade to the word 'Lab' to emulate the IDEA Lab logo colors.
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

      {Illustration && <Illustration width={width} height={height} />}
      {image && <div className={styles['image-container']}><Image src={imageUrl} /></div>}
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.arrayOf(PropTypes.object),
  illustration: PropTypes.elementType,
  small: PropTypes.bool,
  reverse: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  image: ImageReferenceType,
};

export default Hero;
