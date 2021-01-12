import React from 'react';
import PropTypes from 'prop-types';
import { MetadataType } from 'lib/types';
import { urlFor } from 'utils/client';
import Image from 'components/Image';
import styles from './styles.module.scss';

const MetadataItem = ({ icon, label, value }) => {
  const iconUrl = urlFor(icon).width(30).url();

  return (
    <div className={styles['metadata-item']}>
      <Image width={30} height={30} src={iconUrl} />
      <div className={styles['metadata-text']}><span style={{ fontWeight: 600 }}>{`${label}: `}</span>{value}</div>
    </div>
  );
};

const MetadataSection = ({ metadata }) => {
  return (
    <div className={styles.metadata}>
      {metadata.map(({ icon, label, value }) => (<MetadataItem icon={icon} label={label} value={value} />))}
    </div>
  );
};

MetadataSection.propTypes = {
  metadata: PropTypes.arrayOf(MetadataType),
};

export default MetadataSection;
