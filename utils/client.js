import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const client = sanityClient({
  projectId: 'i2fgqm8n',
  dataset: 'production',
  useCdn: true,
});

const clientForPreview = sanityClient({
  projectId: 'i2fgqm8n',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_READ_TOKEN,
});

const getClient = (preview) => {
  return preview ? clientForPreview : client;
};

const urlFor = (source, preview = false) => {
  const builder = imageUrlBuilder(getClient(preview));
  return builder.image(source);
};

export default client;
export { urlFor, clientForPreview, getClient };
