import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import {
  page, siteSettings, post, person, category,
} from './documents';
import {
  navLink, heroHome, lightSection, twoColumn, customBlock, grid, usefulLink, contactInfo, heroAbout, aboutIcon,
} from './objects';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    page,
    siteSettings,
    post,
    person,
    category,
    navLink,
    heroHome,
    lightSection,
    twoColumn,
    customBlock,
    grid,
    usefulLink,
    contactInfo,
    heroAbout,
    aboutIcon,
  ]),
});
