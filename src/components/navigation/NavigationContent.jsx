import React, { useState, useRef, useEffect } from 'react';
import classes from './NavigationContent.module.css';

const NavigationContent = (
  { className, logo, logoWhite, link1, link2, link3 },
  ref
) => {
  const navRef = ref;
  const burgerRef = useRef(null);
  const [isBurgerOpened, setBurgerOpened] = useState(false);

  const burgerClickHandler = () => {
    setBurgerOpened(prevState => !prevState.check);
  };

  const navLinkHandler = e => {
    e.preventDefault();

    // Close the Nav Menu after clicking
    setBurgerOpened(false);

    // Scroll into Section
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (!isBurgerOpened) burgerRef.current.checked = false;
    if (isBurgerOpened) burgerRef.current.checked = true;
  }, [isBurgerOpened]);

  return (
    <div
      className={`${className} ${classes.navigation} ${classes.burger} `}
      ref={navRef}
    >
      <span className={`${classes.navigation__link} ${classes.burger__link} `}>
        <img
          src={logoWhite}
          className={classes.burger__logoOutside}
          alt="Oqulo logo"
        />
      </span>

      <input
        type="checkbox"
        className={classes.burger__checkbox}
        id="navi-toggle"
        ref={burgerRef}
        onClick={burgerClickHandler}
      />
      <label
        className={`${classes.navigation__tab} ${classes.burger__button} ${className}`}
        htmlFor="navi-toggle"
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          className={classes.burger__svg}
        >
          <path
            className={`${classes.burger__line} ${classes.burger__line1}`}
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path
            className={`${classes.burger__line} ${classes.burger__line2}`}
            d="M 20,50 H 80"
          />
          <path
            className={`${classes.burger__line} ${classes.burger__line3}`}
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>

        <nav
          className={`${classes.navigation__content} ${classes.burger__content}`}
        >
          <div
            className={`${classes['navigation__logo-box']} ${classes['burger__logo-box']} ${classes.logo}`}
          >
            <span
              className={`${classes.navigation__link} ${classes.burger__link} `}
            >
              <img
                src={logoWhite}
                alt="Oqulo logo"
                className={classes.navigation__logo}
              />
            </span>
          </div>

          <ul className={`${classes.navigation__list} ${classes.burger__list}`}>
            <li
              className={`${classes.navigation__item} ${classes.burger__item}`}
            >
              <a
                className={`${classes.navigation__link} ${classes.burger__link} `}
                href="#about"
                onClick={navLinkHandler}
              >
                {link1}
              </a>
            </li>
            <li
              className={`${classes.navigation__item} ${classes.burger__item}`}
            >
              <a
                className={`${classes.navigation__link} ${classes.burger__link} `}
                href="#features"
                onClick={navLinkHandler}
              >
                {link2}
              </a>
            </li>
            <li
              className={`${classes.navigation__item} ${classes.burger__item}`}
            >
              <a
                className={`${classes.navigation__link} ${classes.burger__link} `}
                href="#cta"
                onClick={navLinkHandler}
              >
                {link3}
              </a>
            </li>
          </ul>
        </nav>
      </label>
    </div>
  );
};

export default React.forwardRef(NavigationContent);
