export default {
  title: 'Light-Colored Section',
  name: 'lightSection',
  type: 'object',
  fields: [
    {
      title: 'Elements',
      name: 'elements',
      type: 'array',
      of: [
        { type: 'twoColumn' },
      ],
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Light-Colored Section',
      };
    },
  },
};
