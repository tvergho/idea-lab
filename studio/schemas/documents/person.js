export default {
  title: 'Person',
  name: 'person',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
      description: 'Titles/short bio of this person (optional).',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Description',
      description: 'Longer description displayed on hover.',
    },
    {
      name: 'linkedin',
      type: 'url',
      title: 'Linkedin Profile',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      options: { hotspot: true },
    },
  ],
};
