import React from 'react';
import classes from './Features.module.css';

import { FEATURES } from '../../data/dummy';
import img from '../../assets/img/features/screen.jpg';
import gooeyImg from '../../assets/img/gooey/gooey-circle.png';

import Feature from '../../components/feature/Feature';

const Features = ({ className }) => {
  //media query
  const phoneMediaQuery = window.matchMedia('(max-width: 600px)');

  return (
    <section className={`${classes.container} ${className}`} id="features">
      <div className={classes.subcontainer}>
        {/* Heading */}
        <div className={classes.headingBox}>
          <h1 className={`${classes.heading} heading-1`}>{FEATURES.heading}</h1>
          <p className={classes.subheading}>{FEATURES.subheading}</p>
        </div>

        {/* Content */}
        <div className={classes.contentBox}>
          {FEATURES.items.map((item, i) => {
            if (i % 2) {
              return (
                <Feature
                  key={i}
                  label={item.label}
                  paragraph={item.paragraph}
                  svg={item.svg}
                />
              );
            }

            // to render the odd number item with Right Alignment
            return (
              <Feature
                key={i}
                label={item.label}
                paragraph={item.paragraph}
                svg={item.svg}
                imgRight
              />
            );
          })}

          <img src={img} alt="screen" className={classes.img} />
        </div>
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
    </section>
  );
};

export default Features;
