import React from 'react';
import classes from './Input.module.css';

import ButtonCTA from '../buttons/ButtonCTA';

const Input = ({ className, cta, centerTabLand }) => {
  // center alignment class
  const centerClass = centerTabLand ? classes.centerTabLand : '';

  return (
    <div className={`${classes.container} ${className} ${centerClass}`}>
      <div className={classes.inputBox}>
        <input
          type="text"
          className={classes.input}
          id="email"
          placeholder="Email address"
        />
        <label htmlFor="email" className={classes.label}>
          Email address
        </label>
      </div>
      <ButtonCTA text={cta} className={classes.btn} />
    </div>
  );
};

export default Input;
