import PropTypes from 'prop-types';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';

import './Button.scss';

const sizes = {
  normal: 'Button',
  big: 'Button Button--big',
};

export const Button = ({ text, size = 'normal', utilityClasses }) => {
  return (
    <button
      className={`${sizes[size]} ${utilityClasses ? utilityClasses : ''}`}
    >
      {text}
      <Arrow stroke='white' />
    </button>
  );
};

Button.propTypes = {
  /**
   * Button contents
   */
  text: PropTypes.string.isRequired,
  /**
   * Button size
   */
  size: PropTypes.oneOf(Object.keys(sizes)),
  /**
   * Some additional classes like margin, padding e.g.
   */
  utilityClasses: PropTypes.string,
};
