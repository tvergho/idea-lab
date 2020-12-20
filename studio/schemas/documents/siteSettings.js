export default {
  title: 'Site Settings',
  name: 'siteSettings',
  type: 'document',
  fields: [
    {
      title: 'Site Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Header',
      name: 'header',
      type: 'array',
      of: [{ type: 'navLink' }],
    },
  ],
};
