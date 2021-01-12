export default {
  title: 'Metadata Item',
  name: 'metadataItem',
  type: 'object',
  fields: [
    {
      title: 'Label',
      name: 'label',
      type: 'string',
      description: 'Label associated with this metadata (e.g. Institution, Staff).',
    },
    {
      title: 'Value',
      name: 'value',
      type: 'string',
      description: 'Content associated with this metadata.',
    },
    {
      title: 'Icon',
      name: 'icon',
      type: 'image',
      description: 'Optional. Icon associated with this item.',
    },
  ],
  preview: {
    select: {
      title: 'label',
      subtitle: 'value',
      media: 'icon',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection;
      return {
        title,
        subtitle,
        media,
      };
    },
  },
};
