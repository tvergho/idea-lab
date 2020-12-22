import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Grid = ({ items, className }) => {
  return (
    <div className={className ? `${styles.grid} ${className}` : styles.grid}>
      {items.map((item) => item)}
    </div>
  );
};

Grid.propTypes = {
  items: PropTypes.arrayOf(PropTypes.node),
  className: PropTypes.string,
};

export default Grid;
