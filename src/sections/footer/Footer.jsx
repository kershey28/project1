import React from 'react';
import classes from './Footer.module.css';

import { FOOTER, NAVIGATION } from '../../data/dummy';
import gooeyImg from '../../assets/img/gooey/gooey-circle.png';

import { useElementOnScreenOnce } from '../../utils/observers/useElement';

const Footer = ({ className }) => {
  // media query
  const phoneMediaQuery = window.matchMedia('(max-width: 600px)');

  // observer
  const [logoRef, isLogoAppeared] = useElementOnScreenOnce({
    root: null,
    threshold: 1,
  });

  //dynamic class
  const logoClassRef = isLogoAppeared ? 'moveInBottom' : 'hidden';

  return (
    <footer className={`${classes.container} ${className}`}>
      <div className={classes.subcontainer}>
        <div className={classes.contentBox}>
          <img
            src={NAVIGATION.logo}
            alt="logo"
            className={`${classes.img} ${logoClassRef}`}
            ref={logoRef}
          />
          <ul className={classes.list}>
            <li className={classes.item}>
              <a href="https://kershey.netlify.app/" className={classes.link}>
                {NAVIGATION.items[0]}
              </a>
            </li>
            <li className={classes.item}>
              <a href="https://kershey.netlify.app/" className={classes.link}>
                {NAVIGATION.items[1]}
              </a>
            </li>
            <li className={classes.item}>
              <a href="https://kershey.netlify.app/" className={classes.link}>
                {NAVIGATION.items[2]}
              </a>
            </li>
          </ul>
        </div>
        <p className={classes.copyright}>{FOOTER}</p>
      </div>

      {/* Gooey */}
      {!phoneMediaQuery.matches && (
        <>
          <img src={gooeyImg} alt="gooey large" className={classes.gooey} />
          <img src={gooeyImg} alt="gooey circle" className={classes.gooey} />
          <img src={gooeyImg} alt="gooey circle" className={classes.gooey} />
          <img src={gooeyImg} alt="gooey circle" className={classes.gooey} />
        </>
      )}
    </footer>
  );
};

export default Footer;
