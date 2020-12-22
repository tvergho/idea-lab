import React from 'react';
import Section from 'components/Layout/Section';
import TwoColumn from 'components/TwoColumn';
import { PostBlock } from 'components/Posts';

const defaultResolver = (props, extra = {}) => {
  const { _type, _key } = props;

  switch (_type) {
  case 'lightSection':
    return <Section elements={props.elements} color={props.color} title={props.title} key={_key} />;
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
        fullPage={extra.fullPage}
      />
    );
  }
  case 'customBlock': {
    const { type } = props;
    switch (type) {
    case 'Press Releases':
      return <PostBlock key={_key} />;
    default:
      return null;
    }
  }
  default:
    return null;
  }
};

export default defaultResolver;
