import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Image from 'components/Image';
import { isSvg } from 'utils/slugParsers';
import { ANIMATION_DURATION } from './index';
import styles from './styles.module.scss';

const ImagePart = ({ visible, fullPage, imageUrl }) => {
  return (
    <motion.div
      className={styles['main-image']}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: (ANIMATION_DURATION + 200) / 1000, ease: 'easeOut' }}
      style={{ width: fullPage ? '50%' : '45%' }}
    >
      <Image src={imageUrl} width="100%" height="auto" objectFit={fullPage || isSvg(imageUrl) ? 'contain' : 'cover'} />
    </motion.div>
  );
};

ImagePart.propTypes = {
  visible: PropTypes.bool,
  fullPage: PropTypes.bool,
  imageUrl: PropTypes.string,
};

export default ImagePart;
