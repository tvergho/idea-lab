import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import {
  page, siteSettings, post, person, category, project,
} from './documents';
import {
  navLink, lightSection, twoColumn, customBlock, grid, usefulLink, contactInfo, aboutIcon, textBlock, genericIcon, hero, metadataItem, projectSection,
} from './objects';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    page,
    siteSettings,
    post,
    person,
    category,
    project,
    navLink,
    lightSection,
    twoColumn,
    customBlock,
    grid,
    usefulLink,
    contactInfo,
    aboutIcon,
    textBlock,
    genericIcon,
    hero,
    metadataItem,
    projectSection,
  ]),
});
