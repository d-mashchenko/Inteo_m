import PropTypes from 'prop-types';
import arrow from '../../assets/icons/arrow.svg';

export const Button = ({ children, size, utilityClasses }) => {
  const sizes = {
    normal: 'text-xs px-5 py-3',
    big: 'text-sm px-6 py-4',
  };

  return (
    <button
      className={`${sizes[size]} flex items-center font-semibold uppercase bg-primary-600 text-white ${utilityClasses}`}
    >
      {children}
      <img className='ml-1' src={arrow} alt='arrow' />
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string.isRequired,
  utilityClasses: PropTypes.string,
};
