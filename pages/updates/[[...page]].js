import React, { useState, useEffect, useLayoutEffect } from 'react';
import Page from 'components/Page';
import PropTypes from 'prop-types';
import { PostType } from 'lib/types';
import {
  FeaturedPost, PostGrid, SearchBar, Pagination,
} from 'components/Posts';
import client from 'utils/client';
import { useRouter } from 'next/router';
import styles from 'components/Posts/styles.module.scss';

const pageQuery = '*[_type == "page" && slug.current == "updates"][0]';
const postsQuery = `*[_type == "post"] | order(_createdAt desc){
  ...,
  "categories": categories[]->{title, slug}
}[$start..$end]`;
const featuredPostQuery = '*[_type == "post"] | order(_createdAt desc)[0]';
const allPostsQuery = '*[_type == "post"] | order(_createdAt desc)';
const searchQuery = '*[_type == "post" && [title, description, body] match $query]';

const ITEMS_ON_PAGE = 15;

/**
 * Controls display and pagination for the updates page, which displays a list of all posts and press releases on the site.
 * Valid URL paths are /updates, /updates/1, /updates/2, etc.
 *
 * @param {string} title Title of the page.
 * @param {string} description Description of the page, for SEO purposes.
 * @param {showTitle} showTitle Override the default to show the title at the top of the page.
 * @param {array} posts Array of Posts to display on the page.
 * @param {PostType} featuredPost Most recent post, to display as the featured post at the top of the page.
 * @param {number} numPages Total number of pages for all the posts.
 * @param {number} pageNum Current page number being displayed.
 */
const Updates = ({
  title = '', description = '', showTitle = true, posts, featuredPost, numPages, pageNum,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchPosts, setSearchPosts] = useState([]);
  const [useSearch, setUseSearch] = useState(false); // If true, overrides the posts prop and displays searchPosts instead.
  const [searched, setSearched] = useState(false); // A search has already been conducted on this page.
  const router = useRouter();

  const search = async (query) => {
    const term = query || searchTerm;
    router.push(`/updates?query=${term}`, undefined, { shallow: true }); // Update the URL in the address bar without reloading the page.
    const result = await client.fetch(searchQuery, { query: term }) || [];
    setSearchPosts(result);

    setSearched(true);
    setUseSearch(true);
  };

  // Trigger a search on page load based upon the URL.
  useEffect(() => {
    // Only trigger a new search if there's a query in the URL that differs from the current search term.
    if (router?.query?.query && router?.query?.query !== searchTerm) {
      const { query } = router.query;
      router.push(`/updates?query=${query}`, undefined, { shallow: true });
      setUseSearch(true);
      setSearchTerm(query);
      search(query);
    }
  }, [router]);

  // Clears the search and reverts to the default of displaying posts chronologically when the search term is cleared.
  useLayoutEffect(() => {
    if (searchTerm.length === 0 && searched) {
      router.push('/updates', undefined, { shallow: true });
      setSearchPosts([]);
      setUseSearch(false);
    }
  }, [searchTerm]);

  const isSearch = useSearch || searchPosts.length > 0;

  return (
    <>
      <Page
        title={title}
        description={description}
        showTitle={showTitle}
      />
      <FeaturedPost
        title={featuredPost.title}
        image={featuredPost.image}
        slug={featuredPost.slug}
        description={featuredPost.description}
      />
      <div className={styles.header}>
        <SearchBar value={searchTerm} onChange={setSearchTerm} search={search} />
        <Pagination numPages={isSearch ? 1 : numPages} page={pageNum} />
      </div>
      <div className={styles['post-container']}>
        <PostGrid posts={isSearch ? searchPosts : posts} />
        <Pagination numPages={isSearch ? 1 : numPages} page={pageNum} />
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const posts = await client.fetch(allPostsQuery) || [];
  const numPages = Math.ceil(posts.length / ITEMS_ON_PAGE);
  const paths = Array.from(Array(numPages).keys()).map((num) => ({ params: { page: [(num + 1).toString()] } }));
  paths.push({ params: { page: [] } });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const pageData = await client.fetch(pageQuery) || {};
  const { title = null, description = null, showTitle = null } = pageData;

  let pageNum = 1;
  const page = context?.params?.page;
  if (page) pageNum = parseInt(page[0], 10);
  if (!pageNum) pageNum = 1;

  const start = ((pageNum - 1) * ITEMS_ON_PAGE) + 1;
  const posts = await client.fetch(postsQuery, { start: Math.max(1, start), end: start + (ITEMS_ON_PAGE - 1) });
  const featuredPost = await client.fetch(featuredPostQuery);

  const allPosts = await client.fetch(allPostsQuery) || [];
  const numPages = Math.ceil(allPosts.length / ITEMS_ON_PAGE);

  return {
    props: {
      title, description, showTitle, posts, featuredPost, numPages, pageNum,
    },
  };
};

Updates.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  showTitle: PropTypes.bool,
  posts: PropTypes.arrayOf(PostType),
  featuredPost: PostType,
  numPages: PropTypes.number,
  pageNum: PropTypes.number,
};

export default Updates;
