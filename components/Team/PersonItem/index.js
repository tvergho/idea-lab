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

const PersonItem = ({
  image, name, linkedin, subtitle,
}) => {
  const { preview } = useContext(PageContext);
  const imageUrl = image ? urlFor(image, preview).width(600).height(600).url() : '/';
  const ref = useRef(null);
  const scrolled = useScrollPosition(ref, 180);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (scrolled) setVisible(true);
  }, [scrolled]);

  const content = () => {
    return (
      <>
        <div className={styles.image}>
          <Image src={imageUrl} width={300} height={300} objectFit="cover" aspectConstrained responsive />
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
};

export default PersonItem;
