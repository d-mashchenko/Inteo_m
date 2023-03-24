import PropTypes from 'prop-types';
import arrow from '../../assets/icons/arrow.svg';

const sizes = {
  normal: 'text-xs px-5 py-3',
  big: 'text-sm px-6 py-4',
};

export const Button = ({ text, size, utilityClasses }) => {
  return (
    <button
      className={`${sizes[size]} flex items-center bg-primary-600 font-semibold uppercase text-white ${utilityClasses}`}
    >
      {text}
      <img className='ml-1' src={arrow} alt='arrow' />
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['normal', 'big']).isRequired,
  utilityClasses: PropTypes.string,
};
