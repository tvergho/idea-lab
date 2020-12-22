export default {
  title: 'Contact Info',
  name: 'contactInfo',
  type: 'object',
  fields: [
    {
      title: 'Email',
      name: 'email',
      type: 'string',
    },
    {
      title: 'Phone',
      name: 'phone',
      type: 'string',
    },
    {
      title: 'Address Line 1',
      name: 'address1',
      type: 'string',
    },
    {
      title: 'Address Line 2',
      name: 'address2',
      type: 'string',
    },
  ],
  preview: {
    prepare() {
      return {
        title: 'Contact Info',
      };
    },
  },
};
