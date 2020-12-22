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
      name: 'linkedin',
      type: 'url',
      title: 'Linkedin Profile',
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
  ],
};
