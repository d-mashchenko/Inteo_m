import PropTypes from 'prop-types';

import './BaseText.scss';

const sizes = {
  xs: 'BaseText--xs',
  sm: 'BaseText--sm',
  md: 'BaseText--md',
  lg: 'BaseText--lg',
  xl: 'BaseText--xl',
};

export const BaseText = ({ content, size, utilityClasses }) => {
  return (
    <p className={`${sizes[size]} ${utilityClasses ? utilityClasses : ''}`}>
      {content}
    </p>
  );
};

BaseText.propTypes = {
  content: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)).isRequired,
  utilityClasses: PropTypes.string,
};
