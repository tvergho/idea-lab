export default {
  title: 'Nav Link',
  name: 'navLink',
  type: 'object',
  fields: [
    {
      title: 'Display Text',
      name: 'display',
      type: 'string',
    },
    {
      title: 'Page',
      name: 'page',
      type: 'reference',
      to: [{ type: 'page' }],
    },
    {
      title: 'Dropdown Options',
      name: 'dropdown',
      type: 'array',
      description: 'Optional. A dropdown is only supported for top-level menu items in the header.',
      of: [{ type: 'navLink' }],
    },
  ],
};
