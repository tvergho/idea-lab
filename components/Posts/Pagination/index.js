/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { ForwardArrow, BackArrow } from './assets';
import styles from './styles.module.scss';

const Pagination = ({ page, numPages }) => {
  const router = useRouter();
  const nextPage = () => {
    router.push(`/updates/${page + 1}`);
  };

  const prevPage = () => {
    router.push(`/updates/${page - 1}`);
  };

  return (
    <div className={styles.pagination}>
      {page > 1 && <button className={`transparent ${styles['nav-button']}`} type="button" onClick={prevPage}><BackArrow /></button>}
      <p>{`Page ${page} of ${numPages}`}</p>
      {page < numPages && <button className={`transparent ${styles['nav-button']}`} type="button" onClick={nextPage}><ForwardArrow /></button>}
    </div>
  );
};

Pagination.propTypes = {
  numPages: PropTypes.number,
};

export default Pagination;
