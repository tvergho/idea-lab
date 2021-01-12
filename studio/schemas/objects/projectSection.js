export default {
  title: 'Project Section',
  name: 'projectSection',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Projects',
      name: 'projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project' }], name: 'projects' }],
    },
  ],
};
