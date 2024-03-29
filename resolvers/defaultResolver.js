import React from 'react';
import Section from 'components/Layout/Section';
import TwoColumn from 'components/TwoColumn';
import { PostBlock } from 'components/Posts';
import { PersonItem } from 'components/Team';
import { AboutItem, QuadrupleAim } from 'components/About';
import { ProjectSection } from 'components/Projects';
import Hero from 'components/Layout/Hero';
import GenericIcon from 'components/GenericIcon';
import UsefulLink from 'components/UsefulLink';
import Grid from 'components/Layout/Grid';
import Contact from 'components/Contact';
import TextBlock from 'components/TextBlock';

/**
 * Function that matches Sanity CMS objects with the corresponding React elements.
 * If an object is not defined in both Sanity CMS and the resolver, it will not be rendered.
 * Can be combined with other resolvers that correspond to particular pages.
 *
 * @param {object} props Props to be passed along to the React element.
 * @param {object} extra Optional properties that can be passed along from the parent element which invokes this resolver.
 */
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
    case 'Quadruple Aim':
      return <QuadrupleAim key={_key} />;
    default:
      return null;
    }
  }
  case 'grid': {
    const { elements } = props;
    if (!elements || elements.length === 0) return null;
    switch (elements[0]?._type) {
    case 'person': {
      const items = elements.map(({
        image, name, linkedin, subtitle, description, _id,
      }) => {
        return (<PersonItem image={image} name={name} linkedin={linkedin} key={_id} subtitle={subtitle} description={description} />);
      });
      return <Grid items={items} key={_key} noEvenSpace />;
    }
    case 'usefulLink': {
      const items = elements.map(({
        image, display, url, _key: key,
      }) => {
        return (<UsefulLink image={image} display={display} url={url} key={key} />);
      });
      return <Grid items={items} key={_key} />;
    }
    case 'aboutIcon': {
      const items = elements.map(({
        image, description, display, _key: key,
      }) => {
        return (<AboutItem image={image} display={display} description={description} key={key} />);
      });
      return <Grid items={items} key={_key} noEvenSpace />;
    }
    case 'genericIcon': {
      const items = elements.map(({
        title, description, icon, _key: key,
      }) => {
        return (<GenericIcon image={icon} title={title} description={description} key={key} />);
      });
      return <Grid items={items} key={_key} noEvenSpace />;
    }
    default:
      return null;
    }
  }
  case 'contactInfo': {
    const {
      email, phone, address1, address2, _key: key,
    } = props;
    return <Contact email={email} phone={phone} address1={address1} address2={address2} key={key} />;
  }
  case 'textBlock': {
    const { text, _key: key } = props;
    return <TextBlock content={text} key={key} />;
  }
  case 'hero': {
    const {
      title, subtitle, image, small, reverse, _key: key,
    } = props;
    return <Hero key={key} title={title} subtitle={subtitle} image={image} small={small} reverse={reverse} />;
  }
  case 'projectSection': {
    const { _key: key, projects, title } = props;
    return <ProjectSection key={key} projects={projects} title={title} />;
  }
  default:
    return null;
  }
};

export default defaultResolver;
