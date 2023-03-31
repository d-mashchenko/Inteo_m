import PropTypes from 'prop-types';

import './Title.scss';

const sizes = {
  xs: 'Title--xs',
  sm: 'Title--sm',
  smFooter: 'Title--smFooter',
  md: 'Title--md',
  lg: 'Title--lg',
  xl: 'Title--xl',
};

export const Title = ({ children, size, utilityClasses }) => {
  return (
    <div className={`${sizes[size]} ${utilityClasses ? utilityClasses : ''}`}>
      {children}
    </div>
  );
};

Title.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)).isRequired,
  utilityClasses: PropTypes.string,
};
