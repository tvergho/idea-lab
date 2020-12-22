/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ImageReferenceType } from 'lib/types';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { urlFor } from 'utils/client';
import useScrollPosition from 'utils/useScrollPosition';
import styles from './styles.module.scss';

const ANIMATION_DURATION = 500;

const PersonItem = ({ image, name, linkedin }) => {
  const imageUrl = image ? urlFor(image).width(300).url() : '/';
  const ref = useRef(null);
  const scrolled = useScrollPosition(ref, 100);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (scrolled) setVisible(true);
  }, [scrolled]);

  const content = () => {
    return (
      <>
        <div className={styles.image}>
          <Image src={imageUrl} layout="responsive" width={300} height={400} objectFit="cover" />
        </div>

        <h5 className={styles.name}>{name}</h5>
      </>
    );
  };

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
      {withLinkedin(content())}
    </motion.div>
  );
};

PersonItem.propTypes = {
  image: ImageReferenceType,
  name: PropTypes.string,
  linkedin: PropTypes.string,
};

export default PersonItem;
