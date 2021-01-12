import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

/**
 * Displays the provided React elements in a flexbox responsive grid.
 * Individual items are responsible for managing their own width responsively.
 *
 * @param {array} items Array of elements to render.
 * @param {string} className Optional class name to be applied to the grid container.
 * @param {boolean} noEvenSpace If true, items in the last incomplete row do not exhibit the default flexbox behavior of expanding to take up the remaining space.
 */
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
