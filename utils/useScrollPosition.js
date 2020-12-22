import React, { useState, useLayoutEffect } from 'react';

// Custom hook for animation purposes.
// Returns a boolean for whether the user has scrolled past a particular element on the page.
const useScrollPosition = (ref, offset = 0) => {
  const [scrolled, setScrolled] = useState(false);

  const onScroll = () => {
    const pos = ref?.current?.offsetTop;
    const scrollPos = window.scrollY + window.innerHeight;

    if (pos + offset < scrollPos) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useLayoutEffect(() => {
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return scrolled;
};

export default useScrollPosition;
