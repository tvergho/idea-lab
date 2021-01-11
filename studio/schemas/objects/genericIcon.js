export default {
  title: 'Generic Icon',
  name: 'genericIcon',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'image',
      description: 'Icon associated with this item.',
    },
  ],
};
