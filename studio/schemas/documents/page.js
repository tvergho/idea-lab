export default {
  title: 'Page',
  name: 'page',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      description: 'This description populates meta-tags on the webpage.',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Ending of the URL.',
      options: {
        slugify: (input) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200),
      },
    },
    {
      name: 'pageBuilder',
      type: 'array',
      title: 'Page Builder',
      of: [
        { type: 'heroHome' },
        { type: 'heroAbout' },
        { type: 'lightSection' },
        { type: 'twoColumn' },
        { type: 'grid' },
        { type: 'contactInfo' },
      ],
    },
    {
      name: 'showTitle',
      type: 'boolean',
      title: 'Show Title',
      description: 'Show the title at the top of the page.',
    },
  ],
};
