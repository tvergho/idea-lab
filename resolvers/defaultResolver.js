import React from 'react';
import Section from 'components/Layout/Section';
import TwoColumn from 'components/TwoColumn';
import { PostBlock } from 'components/Posts';
import { PersonItem } from 'components/Team';
import Grid from 'components/Layout/Grid';

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
  case 'grid': {
    const { elements } = props;
    const items = [];
    if (!elements || elements.length === 0) return null;
    switch (elements[0]._type) {
    case 'person': {
      elements.forEach(({
        image, name, linkedin, _id,
      }) => {
        items.push(<PersonItem image={image} name={name} linkedin={linkedin} key={_id} />);
      });
      return <Grid items={items} key={_key} />;
    }
    default:
      return null;
    }
  }
  default:
    return null;
  }
};

export default defaultResolver;
