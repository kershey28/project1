import { useState, useRef, useEffect } from 'react';

import NavigationContent from './NavigationContent';
import { NAVIGATION } from '../../data/dummy';

const Navigation = ({ headerRef }) => {
  // Sticky Navigation
  const navRef = useRef(null);
  const [isNavAppeared, setNavAppeared] = useState(true);
  const classRef = isNavAppeared ? 'navSticky' : 'navAbsolute';

  useEffect(() => {
    const navHeight = navRef.current.getBoundingClientRect().height;

    // functionality
    const stickyNav = entries => {
      const [entry] = entries;

      if (!entry.isIntersecting) {
        setNavAppeared(true);
      } else setNavAppeared(false);
    };

    //observer;
    const navigationObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
      rootMargin: `-${navHeight}px`,
    });

    navigationObserver.observe(headerRef.current);
  }, [classRef, headerRef]);

  return (
    <>
      <NavigationContent
        link1={NAVIGATION.items[0]}
        link2={NAVIGATION.items[1]}
        link3={NAVIGATION.items[2]}
        logo={NAVIGATION.logo}
        logoWhite={NAVIGATION.logoWhite}
        ref={navRef}
        className={classRef}
      />
    </>
  );
};

export default Navigation;
