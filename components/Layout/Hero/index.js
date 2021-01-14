import React from 'react';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import { ImageReferenceType } from 'lib/types';
import { urlFor, dimensionsFor } from 'utils/client';
import Image from 'components/Image';
import styles from './styles.module.scss';

// Note: direct SVG illustration support is deprecated. Pass in a Sanity ImageReference instead.

/**
 * Component for displaying a hero image at the top of a page.
 *
 * @param {string} title Header to display as the main text for this hero image.
 * @param {string} subtitle Subheader to display under the main title.
 * @param {boolean} small If true, the component takes up only the space needed instead of the entire viewport.
 * @param {boolean} reverse If true, the text is displayed below the main image.
 * @param {ImageReferenceType} image Reference to a Sanity ImageReference to display.
 */
const Hero = ({
  title, subtitle, illustration: Illustration, small, reverse, image,
}) => {
  let imageUrl = '';
  if (image) imageUrl = urlFor(image).url();

  const [width, height] = dimensionsFor(image);

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
      {image && <div className={styles['image-container']}><Image src={imageUrl} width={width} height={height} /></div>}
    </section>
  );
};

Hero.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.arrayOf(PropTypes.object),
  illustration: PropTypes.elementType,
  small: PropTypes.bool,
  reverse: PropTypes.bool,
  image: ImageReferenceType,
};

export default Hero;
