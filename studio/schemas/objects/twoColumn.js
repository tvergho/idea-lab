export default {
  title: 'Two Column Layout',
  name: 'twoColumn',
  type: 'object',
  fieldsets: [
    { name: 'button', title: 'Button Settings' },
  ],
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
      fieldset: 'button',
    },
    {
      title: 'Button Link',
      name: 'buttonPage',
      type: 'slug',
      description: 'URL slug for the page that the button links to. Must be paired with a value for the button text field.',
      fieldset: 'button',
    },
    {
      title: 'Text Button',
      name: 'isTextButton',
      type: 'boolean',
      description: 'Button renders as a text-only link.',
      fieldset: 'button',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: 'Aspect ratio should be roughly 5x4.',
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
