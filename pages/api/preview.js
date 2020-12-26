/* eslint-disable no-nested-ternary */
/* eslint-disable consistent-return */
import { clientForPreview } from 'utils/client';

const getPageBySlug = async (slug) => {
  const query = '*[_type == "page" && slug.current == $slug][0]';
  const data = await clientForPreview.fetch(query, { slug });
  return data;
};

const getPostBySlug = async (slug) => {
  const query = '*[_type == "post" && slug.current == $slug][0]';
  const data = await clientForPreview.fetch(query, { slug });
  return data;
};

export default async function handler(req, res) {
  if (
    req.query.secret !== process.env.PREVIEW_SECRET
    || !req.query.slug
  ) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const { slug } = req.query;
  let post = null;
  let page = null;
  page = await getPageBySlug(slug);
  if (!page) post = await getPostBySlug(slug);

  if (!page && !post) {
    return res.status(401).json({ message: 'Invalid slug' });
  }

  res.setPreviewData({});
  res.writeHead(307, { Location: `/${page ? '' : 'posts/'}${page ? (page.slug.current === '/' ? '' : page.slug.current) : post.slug.current}` });
  res.end();
}
