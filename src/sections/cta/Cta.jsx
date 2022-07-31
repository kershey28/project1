import React from 'react';
import classes from './Cta.module.css';

import { CTA } from '../../data/dummy';
import gooeyImg1 from '../../assets/img/gooey/gooey-2.png';
import gooeyImg2 from '../../assets/img/gooey/gooey-circle.png';

import Input from '../../components/input/Input';
import { useElementOnScreenOnce } from '../../utils/observers/useElement';

const Cta = ({ className }) => {
  //media query
  const phoneMediaQuery = window.matchMedia('(max-width: 600px)');

  // observer
  const [headingRef, isHeadingAppeared] = useElementOnScreenOnce({
    root: null,
    threshold: 1,
  });

  // dynamic classes
  const headingClassRef = isHeadingAppeared ? 'moveInRight' : 'hidden';
  const subheadingClassRef = isHeadingAppeared ? 'moveInLeft' : 'hidden';

  return (
    <section className={`${classes.container} ${className}`} id="cta">
      <div className={classes.subcontainer}>
        <div className={classes.headingBox} ref={headingRef}>
          <h1 className={`${classes.heading} ${headingClassRef} heading-1`}>
            {CTA.heading}
          </h1>
          <p className={`${classes.subheading} ${subheadingClassRef}`}>
            {CTA.subheading}
          </p>
        </div>

        <Input className={classes.input} cta={CTA.buttonCta} centerTabLand />
      </div>

      {/* Gooey */}
      {!phoneMediaQuery.matches && (
        <>
          <img src={gooeyImg1} alt="gooey large" className={classes.gooey} />
          <img src={gooeyImg2} alt="gooey circle" className={classes.gooey} />
          <img src={gooeyImg2} alt="gooey circle" className={classes.gooey} />
          <img src={gooeyImg2} alt="gooey circle" className={classes.gooey} />
        </>
      )}
    </section>
  );
};

export default Cta;
