import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { ANIMATION_DURATION } from './index';
import styles from './styles.module.scss';

const ButtonPart = ({ visible, button, buttonUrl }) => {
  const router = useRouter();

  if (!button) return null;

  return (
    <motion.div
      className={styles['button-animator']}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 15 }}
      transition={{ duration: ANIMATION_DURATION / 1000, ease: 'easeOut', delay: 0.2 }}
    >
      <button onClick={() => { router.push(buttonUrl); }} type="button" className={styles['cta-button']}>{button}</button>
    </motion.div>
  );
};

ButtonPart.propTypes = {
  visible: PropTypes.bool,
  button: PropTypes.string,
  buttonUrl: PropTypes.string,
};

export default ButtonPart;
