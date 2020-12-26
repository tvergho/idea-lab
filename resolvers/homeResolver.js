import React from 'react';
import { HeroHome } from 'components/Home';

const homeResolver = (props, extra = {}) => {
  if (!props) return null;
  const { _type, _key } = props;

  switch (_type) {
  case 'heroHome':
    return <HeroHome key={_key} title={props.title} subtitle={props.subtitle} />;
  default:
    return null;
  }
};

export default homeResolver;
