import React from 'react';
import classes from './Feature.module.css';

import { useElementOnScreenOnce } from '../../utils/observers/useElement';

const Feature = ({ className, label, paragraph, svg, imgRight }) => {
  // tabLand class
  const tabLandMediaQuery = window.matchMedia('(max-width: 1200px)');
  const flexOrderClass =
    imgRight && !tabLandMediaQuery.matches ? classes.imgRight : '';

  // observer
  const [featureRef, isFeatureAppeared] = useElementOnScreenOnce({
    root: null,
    threshold: 0.15,
  });

  // dynamic class determiner
  const featureClassDeterminer = () => {
    if (isFeatureAppeared && !imgRight) return 'moveInLeft';
    if (isFeatureAppeared && imgRight) return 'moveInRight';
    else return 'hidden';
  };

  const featureClassRef = featureClassDeterminer();

  return (
    <div
      className={`${classes.container} ${className} ${flexOrderClass} ${featureClassRef}`}
    >
      <div className={classes.imgBox} ref={featureRef}>
        {svg}
      </div>
      <div className={`${classes.contentBox}`}>
        <h2 className={`${classes.heading} heading-2 `}>{label}</h2>
        <p className={classes.paragraph}>{paragraph}</p>
      </div>
    </div>
  );
};

export default Feature;
