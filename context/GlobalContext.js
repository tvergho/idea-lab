import { createContext } from 'react';

const GlobalContext = createContext({
  siteTitle: 'IDEA Lab',
  recentPosts: [],
});

export default GlobalContext;
