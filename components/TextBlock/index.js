import React from 'react';
import PropTypes from 'prop-types';
import TextContent from './TextContent';
import styles from './styles.module.scss';

const TextBlock = ({ content }) => {
  return (
    <section className={styles.container}>
      <div className={styles.block}>
        <TextContent content={content} />
      </div>
    </section>
  );
};

TextBlock.propTypes = {
  content: PropTypes.arrayOf(PropTypes.object),
};

export default TextBlock;
