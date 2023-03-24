import PropTypes from 'prop-types';

import './BaseText.scss';

const sizes = {
  xs: 'text-sm leading-6',
  sm: 'text-sm leading-6 sm:text-lg sm:leading-8',
  md: 'text-base leading-6 sm:text-lg sm:leading-8',
  lg: 'text-lg leading-8',
  xl: 'text-lg leading-8 sm:text-xl sm:leading-8',
};

export const BaseText = ({ content, size, utilityClasses }) => {
  return <p className={`${sizes[size]} ${utilityClasses}`}>{content}</p>;
};

BaseText.propTypes = {
  content: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired,
  utilityClasses: PropTypes.string,
};
