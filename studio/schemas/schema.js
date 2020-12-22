import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import { page, siteSettings, post } from './documents';
import {
  navLink, heroHome, lightSection, twoColumn, customBlock,
} from './objects';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    page,
    siteSettings,
    post,
    navLink,
    heroHome,
    lightSection,
    twoColumn,
    customBlock,
  ]),
});
