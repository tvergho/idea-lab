export default {
  title: 'Useful Link',
  name: 'usefulLink',
  type: 'object',
  fields: [
    {
      title: 'Display Text',
      name: 'display',
      type: 'string',
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: 'Screenshot of the website landing page.',
    },
  ],
};
