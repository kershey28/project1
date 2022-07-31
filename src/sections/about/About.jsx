import React from 'react';
import classes from './About.module.css';

import { ABOUT } from '../../data/dummy';
import phoneImg from '../../assets/img/about/phone.png';
import screenshot1Img from '../../assets/img/about/screenshot-1.jpg';
import screenshot2Img from '../../assets/img/about/screenshot-2.jpg';

import { useElementOnScreenOnce } from '../../utils/observers/useElement';

const About = ({ className }) => {
  // observers
  const [headingRef, isHeadingAppeared] = useElementOnScreenOnce({
    root: null,
    threshold: 1,
  });

  const [paragraph1Ref, isParagraph1Appeared] = useElementOnScreenOnce({
    root: null,
    threshold: 1,
  });

  const [paragraph2Ref, isParagraph2Appeared] = useElementOnScreenOnce({
    root: null,
    threshold: 1,
  });

  //dynamic classes
  const headingClassRef = isHeadingAppeared ? 'moveInBottom' : 'hidden';
  const paragraph1ClassRef = isParagraph1Appeared ? 'textClip' : 'hidden';
  const paragraph2ClassRef = isParagraph2Appeared ? 'textClip' : 'hidden';

  return (
    <section className={`${classes.container} ${className}`} id="about">
      <div className={classes.subcontainer}>
        <h1
          className={`${classes.heading} heading-1 ${headingClassRef}`}
          ref={headingRef}
        >
          {ABOUT.heading}
        </h1>
        <p
          className={`${classes.p1} ${paragraph1ClassRef}`}
          ref={paragraph1Ref}
        >
          {ABOUT.p1}
        </p>
        <p
          className={`${classes.p2} ${paragraph2ClassRef}`}
          ref={paragraph2Ref}
        >
          {ABOUT.p2}
        </p>
        <div className={classes.imgBox}>
          <img src={phoneImg} alt="phone" className={classes.phoneImg} />
          <img
            src={screenshot1Img}
            alt="screenshot 1"
            className={classes.screenshotImg1}
          />
          <img
            src={screenshot2Img}
            alt="screenshot 2"
            className={classes.screenshotImg2}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
