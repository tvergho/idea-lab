export const appendPostsEnding = (slug) => {
  let modifiedSlug = slug;
  modifiedSlug = modifiedSlug.replace('posts/', '');
  modifiedSlug = modifiedSlug.replace(/\//g, '');
  modifiedSlug = `/posts/${modifiedSlug}`;
  return modifiedSlug;
};

export const appendSlash = (link) => {
  if (link.indexOf('/') > -1) return link;
  return `/${link}`;
};

export const isSvg = (link) => {
  return link.includes('svg');
};
