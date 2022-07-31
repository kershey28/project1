import classes from './ButtonCTA.module.css';

import { useElementOnScreenOnce } from '../../utils/observers/useElement';

const ButtonCTA = ({ className, text, onClick }) => {
  // observer
  const [buttonRef, isButtonAppeared] = useElementOnScreenOnce({
    root: null,
    threshold: 1,
  });

  // dynamic class
  const classButtonRef = isButtonAppeared ? 'buttonCta' : 'hidden';

  return (
    <button
      className={`${classes.container} ${className} ${classButtonRef}`}
      type="button"
      onClick={onClick}
      ref={buttonRef}
    >
      {text}
    </button>
  );
};

export default ButtonCTA;
