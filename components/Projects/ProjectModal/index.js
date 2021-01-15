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

/**
 * Renders a modal that includes the full details of a project defined in Sanity CMS.
 *
 * @param {boolean} visible Toggles the visibility of the modal. This is a controlled component, but animations are handled automatically.
 * @param {function} toggle Function to toggle the visibility of the modal.
 * @param {string} title Title of the project.
 * @param {arrayOf(object)} content Sanity block content to render in the body of the modal.
 * @param {ImageReferenceType} image Reference to an image associated with the project.
 * @param {arrayOf(MetadataType)} metadata Metadata associated with this project.
 */
const ProjectModal = ({
  visible, toggle, title, content, image, metadata,
}) => {
  const delayedVisible = useDelay(visible, ANIMATION_DURATION);

  // Disables scrolling the page when the modal is visible.
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
