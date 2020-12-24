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
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Animated Underline',
      name: 'animatedUnderline',
      type: 'boolean',
    },
    {
      title: 'Elements',
      name: 'elements',
      type: 'array',
      of: [
        { type: 'twoColumn' },
        { type: 'customBlock' },
        { type: 'grid' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      color: 'color',
    },
    prepare(selection) {
      const { color } = selection;
      let title = color ? `${color.slice(0, 1).toUpperCase()}${color.slice(1)} Section` : 'Section';
      if (selection.title) title = selection.title;
      return {
        title,
      };
    },
  },
};
