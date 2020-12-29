export default {
  title: 'Custom Text',
  name: 'textBlock',
  type: 'object',
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Custom Text',
      };
    },
  },
};
