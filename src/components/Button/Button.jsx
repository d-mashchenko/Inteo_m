import PropTypes from 'prop-types';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';

import './Button.scss';

const sizes = {
  normal: 'Button',
  big: 'Button Button--big',
};

export const Button = ({ text, size, utilityClasses }) => {
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
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['normal', 'big']).isRequired,
  utilityClasses: PropTypes.string,
};
