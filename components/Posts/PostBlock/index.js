import React, {useContext} from 'react';
import PostGrid from '../PostGrid';
import GlobalContext from 'context/GlobalContext';
import styles from './styles.module.scss';

const PostBlock = () => {
  const { recentPosts } = useContext(GlobalContext);

  return (
    <div className={styles['post-container']}>
      <div className={styles.header}>
        <h3>Press Releases</h3>
      </div>
      <PostGrid posts={recentPosts} />
    </div>
  );
};

export default PostBlock;
