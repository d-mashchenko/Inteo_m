import PropTypes from 'prop-types';

export const Title = ({ children, size, utilityClasses }) => {
  const sizes = {
    xs: 'text-2xl leading-8 sm:text-4xl sm:leading-[48px]',
    sm: 'text-3xl leading-10 sm:text-4xl sm:leading-[48px]',
    smFooter: 'text-3xl leading-10 sm:text-5xl sm:leading-[60px]',
    md: 'text-4xl leading-[48px] sm:text-6xl sm:leading-[72px] sm:tracking-tight',
    lg: 'text-5xl leading-[60px] sm:text-6xl sm:leading-[72px] sm:tracking-tight',
    xl: 'text-5xl leading-[60px] sm:text-7xl sm:leading-[96px] sm:tracking-tight font-medium',
  };

  return (
    <div
      className={`${sizes[size]} font-playfair text-neutral-900 ${utilityClasses}`}
    >
      {children}
    </div>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string.isRequired,
  utilityClasses: PropTypes.string,
};
