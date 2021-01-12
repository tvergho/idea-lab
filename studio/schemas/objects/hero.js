export default {
  title: 'Hero Image',
  name: 'hero',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Subtitle',
      name: 'subtitle',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: 'SVG illusration for the hero image.',
    },
    {
      title: 'Height Constrained',
      name: 'small',
      type: 'boolean',
      description: 'Specify whether this component should take up the entire height of the viewport or just the height to contain the image.',
    },
    {
      title: 'Reverse',
      name: 'reverse',
      type: 'boolean',
      description: 'If checked, the words will appear below the image.',
    },
  ],
};
