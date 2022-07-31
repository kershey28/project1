import React from 'react';
import classes from './Hero.module.css';

import { HERO } from '../../data/dummy';
import imgReg from '../../assets/img/hero/phone.png';
import imgSmall from '../../assets/img/hero/phone-small.png';
import gooeyImg1 from '../../assets/img/gooey/gooey-1.png';
import gooeyImg2 from '../../assets/img/gooey/gooey-circle.png';

import Input from '../../components/input/Input';
import { useElementOnScreenOnce } from '../../utils/observers/useElement';

const Hero = ({ className }, ref) => {
  // Image switcher optimization
  const phoneMediaQuery = window.matchMedia('(max-width: 600px)');
  const img = phoneMediaQuery.matches ? imgSmall : imgReg;

  // observer
  const [imgRef, isImgAppeared] = useElementOnScreenOnce({
    root: null,
    threshold: 1,
  });

  //dynamic classes
  const imgClassRef = isImgAppeared ? 'moveInBottom' : 'hidden';
  const headingIntroClass = phoneMediaQuery.matches ? 'moveInBottom' : '';
  const subheadingIntroClass = phoneMediaQuery.matches ? 'textClip' : '';

  return (
    <header className={`${classes.container} ${className}`} ref={ref} id="hero">
      <div className={classes.subcontainer}>
        {/* Image */}
        <div className={`${classes.imgBox} ${imgClassRef}`} ref={imgRef}>
          <img src={img} alt="phone" className={classes.img} />
        </div>

        {/* Content */}
        <div className={classes.contentBox}>
          <h1 className={`${classes.heading}  ${headingIntroClass} heading-1`}>
            {HERO.heading}
          </h1>
          <div className={`${classes.paragraphBox} ${subheadingIntroClass}`}>
            <p className={classes.p1}>{HERO.p1}</p>
            <p className={classes.p2}>{HERO.p2}</p>
            <p className={classes.p3}>{HERO.p3}</p>
          </div>
          <div className={classes.ctaBox}>
            <p className={classes.ctaText}>{HERO.ctaText}</p>
            <Input cta={HERO.buttonCta} className={classes.input} />
            <p className={classes.ctaCaption}>{HERO.caption}</p>
          </div>
        </div>
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
    </header>
  );
};

export default React.forwardRef(Hero);
