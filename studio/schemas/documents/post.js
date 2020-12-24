export default {
  title: 'Post',
  name: 'post',
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
      description: 'Short one-sentence summary of the post.',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Ending of the URL for this page.',
      options: {
        source: 'title',
        slugify: (input) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200),
      },
      validation: (Rule) => Rule.required().error('A unique URL is required.'),
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: 'Aspect ratio should be roughly 3x2.',
    },
    {
      name: 'body',
      title: 'Post Body',
      type: 'array',
      of: [{ type: 'block' }],
    },
  ],
};
