import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Grid = ({ items, className, noEvenSpace }) => {
  let finalClass = styles.grid;
  if (className) finalClass += ` ${className}`;
  if (noEvenSpace) finalClass += ` ${styles['no-even-space']}`;
  return (
    <div className={finalClass}>
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
