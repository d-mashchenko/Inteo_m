import PropTypes from 'prop-types';

export const BaseText = ({ content, size, utilityClasses }) => {
  const sizes = {
    xs: 'text-sm leading-6',
    sm: 'text-sm leading-6 sm:text-lg sm:leading-8',
    md: 'text-base leading-6 sm:text-lg sm:leading-8',
    lg: 'text-lg leading-8',
    xl: 'text-lg leading-8 sm:text-xl sm:leading-8',
  };

  return (
    <p
      className={`${sizes[size]} font-outfit font-light text-neutral-700 ${utilityClasses}`}
    >
      {content}
    </p>
  );
};

BaseText.propTypes = {
  content: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  utilityClasses: PropTypes.string,
};
