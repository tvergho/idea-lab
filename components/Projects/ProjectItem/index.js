import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImageReferenceType, MetadataType } from 'lib/types';
import { urlFor } from 'utils/client';
import Image from 'components/Image';
import ProjectModal from '../ProjectModal';
import styles from './styles.module.scss';

const ProjectItem = ({
  title, description, content, image, metadata,
}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const imageUrl = urlFor(image).width(680).height(453).url();

  const toggle = () => { setModalVisible((vis) => !vis); };

  return (
    <>
      <div className={styles['project-item']}>
        <div className={styles['image-container']}><Image src={imageUrl} width={680} height={453} aspectConstrained responsive /></div>

        <div className={styles['text-section']}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{description}</p>
          <button className={styles.button} type="button" onClick={toggle}>Read More</button>
        </div>
      </div>

      <ProjectModal
        title={title}
        content={content}
        image={image}
        metadata={metadata}
        visible={modalVisible}
        toggle={toggle}
      />
    </>
  );
};

ProjectItem.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  content: PropTypes.arrayOf(PropTypes.object),
  image: ImageReferenceType,
  metadata: PropTypes.arrayOf(MetadataType),
};

export default ProjectItem;
