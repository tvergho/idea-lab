export default {
  title: 'Project',
  name: 'project',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'string',
      title: 'Desription',
      description: 'Short, one-sentence summary of the project.',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      description: 'Aim for a 3x2 aspect ratio.',
      options: { hotspot: true },
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }],
      description: 'More detailed description of project objectives, mission, progress, etc.',
    },
    {
      name: 'metadata',
      title: 'Metadata',
      type: 'array',
      of: [{ type: 'metadataItem' }],
    },
  ],
};
