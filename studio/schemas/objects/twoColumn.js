export default {
  title: 'Two Column Layout',
  name: 'twoColumn',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'image',
      description: 'Upload a SVG square icon.',
    },
    {
      title: 'Button Text',
      name: 'button',
      type: 'string',
    },
    {
      title: 'Button Link',
      name: 'buttonPage',
      type: 'slug',
      description: 'URL slug for the page that the button links to. Must be paired with a value for the button text field.',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: { hotspot: true },
      description: 'Aspect ratio should be roughly 3x2.',
    },
    {
      title: 'Image Side',
      name: 'side',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Right', value: 'right' },
        ],
      },
    },
  ],
};
