/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { CloseButton } from './assets';
import { ANIMATION_DURATION } from './index';
import styles from './styles.module.scss';

const HeaderSection = ({ title, toggle }) => {
  return (
    <>
      <button className={`transparent ${styles['close-button']}`} type="button" onClick={toggle}><CloseButton /></button>

      <h2 className={styles.title}>{title}</h2>
      <motion.div
        className={styles.underline}
        animate={{ width: '70%' }}
        transition={{ delay: (ANIMATION_DURATION - 100) / 1000, duration: (ANIMATION_DURATION + 200) / 1000, ease: 'easeOut' }}
      />
    </>
  );
};

HeaderSection.propTypes = {
  title: PropTypes.string,
  toggle: PropTypes.func,
};

export default HeaderSection;
