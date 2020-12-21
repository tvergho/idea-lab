import React from 'react';
import LightSection from 'components/LightSection';
import TwoColumn from 'components/TwoColumn';

const defaultResolver = (props) => {
  const { _type, _key } = props;

  switch (_type) {
  case 'lightSection':
    return <LightSection elements={props.elements} key={_key} />;
  case 'twoColumn': {
    const {
      button, content, icon, image, side, title,
    } = props;
    return (
      <TwoColumn
        button={button}
        content={content}
        icon={icon}
        image={image}
        side={side}
        title={title}
        key={_key}
      />
    );
  }
  default:
    return null;
  }
};

export default defaultResolver;
