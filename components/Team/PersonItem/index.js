/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {
  useState, useEffect, useRef, useContext,
} from 'react';
import PageContext from 'lib/PageContext';
import { motion } from 'framer-motion';
import { ImageReferenceType } from 'lib/types';
import PropTypes from 'prop-types';
import Image from 'components/Image';
import { urlFor } from 'utils/client';
import useScrollPosition from 'utils/useScrollPosition';
import styles from './styles.module.scss';

const ANIMATION_DURATION = 500;

/**
 * Item that displays with a circular profile picture and name on the team page.
 * Corresponds to a Person in Sanity CMS.
 *
 * @param {ImageReferenceType} image Image to display for the profile. Will display as a square aspect ratio, should set crop and hotspot accordingly.
 * @param {string} name Name to display underneath the image.
 * @param {string} linkedin Optional URL to open on click.
 * @param {string} subtitle Short phrase to display underneath the name.
 * @param {string} description Displays upon hover on the desktop version of the site.
 */
const PersonItem = ({
  image, name, linkedin, subtitle, description,
}) => {
  const { preview } = useContext(PageContext);
  const imageUrl = image ? urlFor(image, preview).width(300).height(300).url() : '/';
  const ref = useRef(null);
  const scrolled = useScrollPosition(ref, 180);
  const [visible, setVisible] = useState(false);

  // Animates the component to fade in upon scrolling to its position on the page.
  useEffect(() => {
    if (scrolled) setVisible(true);
  }, [scrolled]);

  const content = () => {
    return (
      <>
        <div className={styles.image}>
          <Image src={imageUrl} width={300} height={300} objectFit="cover" aspectConstrained responsive />
          {description && <div className={styles.description}>{description}</div>}
        </div>

        <h5 className={styles.name}>{name}</h5>
        <motion.div
          className={styles.divider}
          initial={{ width: 0 }}
          animate={{ width: visible ? '25%' : 0 }}
          transition={{ duration: (ANIMATION_DURATION) / 1000, ease: 'easeOut', delay: 0.7 }}
        />
        {subtitle && <h6 className={styles.subtitle}>{subtitle}</h6>}
      </>
    );
  };

  // Only wraps the component in an <a> tag if a URL is actually provided.
  const withLinkedin = (child) => {
    if (!linkedin) return child;
    else {
      return (
        <a target="_blank" rel="noreferrer" href={linkedin}>{child}</a>
      );
    }
  };

  return (
    <motion.div
      className={styles.item}
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: (ANIMATION_DURATION) / 1000, ease: 'easeOut' }}
      ref={ref}
    >
      <div className={styles['opacity-control']}>
        {withLinkedin(content())}
      </div>
    </motion.div>
  );
};

PersonItem.propTypes = {
  image: ImageReferenceType,
  name: PropTypes.string,
  linkedin: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
};

export default PersonItem;
