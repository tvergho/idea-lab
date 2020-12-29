import React from 'react';
import Section from 'components/Layout/Section';
import TwoColumn from 'components/TwoColumn';
import { PostBlock } from 'components/Posts';
import { PersonItem } from 'components/Team';
import { AboutItem } from 'components/About';
import UsefulLink from 'components/UsefulLink';
import Grid from 'components/Layout/Grid';
import Contact from 'components/Contact';

const defaultResolver = (props, extra = {}) => {
  if (!props) return null;
  const { _type, _key } = props;

  switch (_type) {
  case 'lightSection':
    return (
      <Section
        elements={props.elements}
        color={props.color}
        title={props.title}
        animatedUnderline={props.animatedUnderline}
        key={_key}
      />
    );
  case 'twoColumn': {
    const {
      button, content, icon, image, side, title, buttonPage, isTextButton,
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
        isTextButton={isTextButton}
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
    switch (elements[0]?._type) {
    case 'person': {
      elements.forEach(({
        image, name, linkedin, subtitle, _id,
      }) => {
        items.push(<PersonItem image={image} name={name} linkedin={linkedin} key={_id} subtitle={subtitle} />);
      });
      return <Grid items={items} key={_key} noEvenSpace />;
    }
    case 'usefulLink': {
      elements.forEach(({
        image, display, url, _key: key,
      }) => {
        items.push(<UsefulLink image={image} display={display} url={url} key={key} />);
      });
      return <Grid items={items} key={_key} />;
    }
    case 'aboutIcon': {
      elements.forEach(({
        image, description, display, _key: key,
      }) => {
        items.push(<AboutItem image={image} display={display} description={description} key={key} />);
      });
      return <Grid items={items} key={_key} noEvenSpace />;
    }
    default:
      return null;
    }
  }
  case 'contactInfo': {
    const {
      email, phone, address1, address2,
    } = props;
    return <Contact email={email} phone={phone} address1={address1} address2={address2} />;
  }
  default:
    return null;
  }
};

export default defaultResolver;
