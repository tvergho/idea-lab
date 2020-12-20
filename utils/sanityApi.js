import client from './client';

const appendSiteTitle = async (pageTitle) => {
  const data = await client.fetch('*[_type == "siteSettings"][0]');
  if (data == null) return pageTitle;

  return `${pageTitle} | ${data.title}`;
};

export const getPageByTitle = async (title) => {
  const data = await client.fetch('*[_type == "page" && title == $title][0]', { title });
  if (data == null) return {};

  data.title = await appendSiteTitle(data.title);
  return data;
};

export const getPageBySlug = async (slug) => {
  const data = await client.fetch('*[_type == "page" && slug == $slug][0]', { slug });
  if (data == null) return {};

  data.title = await appendSiteTitle(data.title);
  return data;
};
