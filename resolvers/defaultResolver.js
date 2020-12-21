import React from 'react';

const defaultResolver = (props) => {
  const { _type } = props;

  switch (_type) {
  default:
    return null;
  }
};

export default defaultResolver;
