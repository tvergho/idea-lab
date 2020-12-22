import React, { useContext } from 'react';
import GlobalContext from 'context/GlobalContext';
import Link from 'next/link';
import PostGrid from '../PostGrid';
import { ForwardArrow } from './assets';
import styles from './styles.module.scss';

const UPDATES_PAGE = '/updates';

const PostBlock = () => {
  const { recentPosts } = useContext(GlobalContext);

  return (
    <div className={styles['post-container']}>
      <Link href={UPDATES_PAGE}>
        <button className={`transparent opacity-toggle ${styles['see-all']}`} type="button">
          <span>See all</span>
          <ForwardArrow />
        </button>
      </Link>

      <PostGrid posts={recentPosts} />
    </div>
  );
};

export default PostBlock;
