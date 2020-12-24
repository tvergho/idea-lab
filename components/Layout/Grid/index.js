import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Grid = ({ items, className, noEvenSpace }) => {
  return (
    <div className={className ? `${styles.grid} ${className}` : styles.grid} style={{ justifyContent: noEvenSpace ? 'flex-start' : 'space-between' }}>
      {items.map((item) => item)}
    </div>
  );
};

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
  noEvenSpace: PropTypes.bool,
};

export default Grid;
