import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { MagnifyingGlass } from './assets';
import styles from './styles.module.scss';

const useStyles = makeStyles({
  root: {
    fontSize: '0.85rem',
  },
});

const SearchBar = ({ search, value, onChange }) => {
  const classes = useStyles();

  return (
    <div className={styles.search}>
      <div className={styles['text-container']}>
        <TextField
          label="Search press releases..."
          fullWidth
          size="small"
          InputLabelProps={{ className: classes.root }}
          inputProps={{ className: classes.root }}
          value={value}
          onChange={(e) => { onChange(e.target.value); }}
          onKeyPress={(e) => { if (e.key === 'Enter') search(); }}
        />
      </div>

      <button className={`transparent ${styles.icon} ${styles['icon-fill']}`} type="button" onClick={() => { search(); }}>
        <MagnifyingGlass />
      </button>
    </div>
  );
};

export default SearchBar;
