import React from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';
import { ANIMATION_DURATION } from './index';
import styles from './styles.module.scss';

const ContentPart = ({ visible, content }) => {
  return (
    <motion.div
      className={styles.content}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 15 }}
      transition={{ duration: ANIMATION_DURATION / 1000, ease: 'easeOut', delay: 0.2 }}
    >
      {typeof content === 'string' ? <p>{content}</p> : <BlockContent blocks={content} />}
    </motion.div>
  );
};

ContentPart.propTypes = {
  visible: PropTypes.bool,
  content: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.object), PropTypes.string]),
};

export default ContentPart;
