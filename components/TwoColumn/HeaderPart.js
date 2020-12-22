import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { ANIMATION_DURATION } from './index';
import styles from './styles.module.scss';

const HeaderPart = ({ visible, iconUrl, title }) => {
  return (
    <motion.div
      className={styles['header-animator']}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 15 }}
      transition={{ duration: ANIMATION_DURATION / 1000, ease: 'easeOut', delay: 0.1 }}
    >
      <div className={styles['text-row']}>
        {!!iconUrl && (
          <div className={styles.icon}>
            <Image src={iconUrl} layout="fixed" width={55} height={55} />
          </div>
        )}
        <h2 className={styles.title}>{title}</h2>
      </div>

      <div className={styles.divider} />
    </motion.div>
  );
};

HeaderPart.propTypes = {
  visible: PropTypes.bool,
  iconUrl: PropTypes.string,
  title: PropTypes.string,
};

export default HeaderPart;
