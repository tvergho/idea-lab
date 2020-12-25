export const appendPrefix = (slug, prefix) => {
  let modifiedSlug = slug;
  modifiedSlug = modifiedSlug.replace(`${prefix}/`, '');
  modifiedSlug = modifiedSlug.replace(/\//g, '');
  modifiedSlug = `/${prefix}/${modifiedSlug}`;
  return modifiedSlug;
};

export const appendSlash = (link) => {
  if (link.indexOf('/') > -1) return link;
  return `/${link}`;
};

export const isSvg = (link) => {
  return link.includes('svg');
};
