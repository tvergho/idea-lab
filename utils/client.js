import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: 'i2fgqm8n',
  dataset: 'production',
  useCdn: false,
});

export default client;

const builder = imageUrlBuilder(client);
const urlFor = (source) => {
  return builder.image(source);
};

export { urlFor };
