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

// Returns the correct client based upon the provided preview variable.
const getClient = (preview) => {
  return preview ? clientForPreview : client;
};

// Given an image asset reference, returns an object that can be transformed into an image URL with .url().
const urlFor = (source, preview = false) => {
  const builder = imageUrlBuilder(getClient(preview));
  return builder.image(source);
};

// Returns the original width and height of an image asset.
const dimensionsFor = (imageAsset) => {
  if (!imageAsset?.asset?._ref) return [0, 0];

  const split = imageAsset.asset._ref.split('-');
  const dimensions = split[2].split('x');
  return [parseInt(dimensions[0], 10), parseInt(dimensions[1], 10)];
};

export default client;
export {
  urlFor, clientForPreview, getClient, dimensionsFor,
};
