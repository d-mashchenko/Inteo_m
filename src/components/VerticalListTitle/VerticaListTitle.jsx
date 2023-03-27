import PropTypes from 'prop-types';

import './VerticalListTitle.scss';

export const VerticalListTitle = ({ text }) => {
  return <p className='VerticalListTitle'>{text}</p>;
};

VerticalListTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
