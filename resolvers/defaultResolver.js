import React from 'react';
import Section from 'components/Section';
import TwoColumn from 'components/TwoColumn';

const defaultResolver = (props) => {
  const { _type, _key } = props;

  switch (_type) {
  case 'lightSection':
    return <Section elements={props.elements} color={props.color} key={_key} />;
  case 'twoColumn': {
    const {
      button, content, icon, image, side, title, buttonPage,
    } = props;
    return (
      <TwoColumn
        button={button}
        content={content}
        icon={icon}
        image={image}
        side={side}
        title={title}
        buttonPage={buttonPage}
        key={_key}
      />
    );
  }
  default:
    return null;
  }
};

export default defaultResolver;
