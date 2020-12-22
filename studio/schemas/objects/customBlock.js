export default {
  title: 'Custom Block',
  name: 'customBlock',
  type: 'object',
  fields: [
    {
      title: 'Type',
      name: 'type',
      type: 'string',
      options: {
        list: [
          { title: 'Press Releases', value: 'Press Releases' },
        ],
      },
    },
  ],
};
