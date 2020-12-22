export default {
  title: 'Section',
  name: 'lightSection',
  type: 'object',
  fields: [
    {
      title: 'Color',
      name: 'color',
      type: 'string',
      options: {
        list: [
          { title: 'Light', value: 'light' },
          { title: 'Emphasis', value: 'emphasis' },
        ],
      },
    },
    {
      title: 'Elements',
      name: 'elements',
      type: 'array',
      of: [
        { type: 'twoColumn' },
        { type: 'customBlock' },
      ],
    },
  ],
  preview: {
    select: {
      color: 'color',
    },
    prepare(selection) {
      const { color } = selection;
      const title = color ? `${color.slice(0, 1).toUpperCase()}${color.slice(1)} Section` : 'Section';
      return {
        title,
      };
    },
  },
};
