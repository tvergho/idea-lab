import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ImageReferenceType, MetadataType } from 'lib/types';
import useDelay from 'utils/useDelay';
import { motion } from 'framer-motion';
import HeaderSection from './HeaderSection';
import MetadataSection from './MetadataSection';
import ContentSection from './ContentSection';
import styles from './styles.module.scss';

export const ANIMATION_DURATION = 300;

const ProjectModal = ({
  visible, toggle, title, content, image, metadata,
}) => {
  const delayedVisible = useDelay(visible, ANIMATION_DURATION);

  useEffect(() => {
    if (visible) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = 'visible';
    }
  }, [visible]);

  const onBackdropClick = (e) => {
    e.stopPropagation();
    toggle();
  };

  if (!delayedVisible) return null;

  const isMetadata = metadata && metadata.length > 0;

  return (
    <>
      <motion.div
        className={styles.modal}
        animate={{ opacity: visible ? 1 : 0 }}
        transition={{ duration: ANIMATION_DURATION / 1000 }}
      >
        <HeaderSection title={title} toggle={toggle} />
        {isMetadata && <MetadataSection metadata={metadata} />}
        <ContentSection image={image} content={content} />
      </motion.div>

      <motion.div
        className={styles.backdrop}
        animate={{ opacity: visible ? 0.5 : 0 }}
        transition={{ duration: ANIMATION_DURATION / 1000 }}
        onMouseDown={onBackdropClick}
      />
    </>
  );
};

ProjectModal.propTypes = {
  visible: PropTypes.bool,
  toggle: PropTypes.func,
  title: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
  image: ImageReferenceType,
  metadata: PropTypes.arrayOf(MetadataType),
};

export default ProjectModal;
