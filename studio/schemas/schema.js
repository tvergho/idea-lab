import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import { page, siteSettings } from './documents';
import { navLink } from './objects';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    page,
    siteSettings,
    navLink,
  ]),
});
