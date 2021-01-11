export default {
  title: 'Grid',
  name: 'grid',
  type: 'object',
  fields: [
    {
      title: 'Elements',
      name: 'elements',
      type: 'array',
      of: [
        { type: 'reference', to: [{ type: 'person' }], name: 'people' },
        { type: 'usefulLink' },
        { type: 'aboutIcon' },
        { type: 'genericIcon' },
      ],
    },
  ],
  preview: {
    prepare() {
      const title = 'Grid';
      return {
        title,
      };
    },
  },
};
