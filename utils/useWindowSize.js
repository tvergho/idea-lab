import React from 'react';

export default function useWindowSize() {
  const isSSR = typeof window === 'undefined';
  const [windowSize, setWindowSize] = React.useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });
  const [isMobile, setIsMobile] = React.useState(windowSize.width <= 768);

  function changeWindowSize() {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    setIsMobile(window.innerWidth <= 768);
  }

  React.useEffect(() => {
    changeWindowSize();
    window.addEventListener('resize', changeWindowSize, { passive: true });

    return () => {
      window.removeEventListener('resize', changeWindowSize);
    };
  }, []);

  return { ...windowSize, isMobile };
}
