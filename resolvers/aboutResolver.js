import React from 'react';
import { HeroAbout } from 'components/About';

const aboutResolver = (props, extra = {}) => {
  const { _type, _key } = props;

  switch (_type) {
  case 'heroAbout':
    return <HeroAbout key={_key} title={props.title} subtitle={props.subtitle} />;
  default:
    return null;
  }
};

export default aboutResolver;
