import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { ProjectType } from 'lib/types';
import { motion } from 'framer-motion';
import useScrollPosition from 'utils/useScrollPosition';
import ProjectItem from '../ProjectItem';
import styles from './styles.module.scss';

const ANIMATION_DURATION = 500;

const ProjectSection = ({ title, projects }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const scrolled = useScrollPosition(ref, 100);

  useEffect(() => {
    if (scrolled) setVisible(true);
  });

  return (
    <section className={styles['project-section']} ref={ref}>
      <h2 className={styles.title}>{title}</h2>
      <motion.div
        className={styles.divider}
        animate={{ width: visible ? '70px' : 0 }}
        transition={{ duration: ANIMATION_DURATION / 1000, ease: 'easeOut', delay: 0.2 }}
      />

      {projects && projects.map(({
        title: projectTitle, description, content, image, metadata, _id,
      }) => {
        return <ProjectItem title={projectTitle} description={description} content={content} image={image} metadata={metadata} key={_id} />;
      })}
    </section>
  );
};

ProjectSection.propTypes = {
  title: PropTypes.string,
  projects: PropTypes.arrayOf(ProjectType),
};

export default ProjectSection;
