/* eslint-disable no-undef */
const projectUrl = __DEV__ ? 'http://localhost:3000' : 'https://dartmouthidealab.netlify.app/';
const secret = process.env.SANITY_STUDIO_PREVIEW_SECRET;

export default function resolveProductionUrl(document) {
  if (document._type === 'page' || document._type === 'post') {
    return `${projectUrl}/api/preview?secret=${secret}&slug=${document.slug.current}`;
  }
  return undefined;
}
