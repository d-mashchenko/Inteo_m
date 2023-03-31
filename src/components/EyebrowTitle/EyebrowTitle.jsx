import PropTypes from 'prop-types';

import './EyeBrowTitle.scss';

const browPlaces = {
  before: 'EyeBrowTitle--before',
  after: 'EyeBrowTitle--after',
};

const colors = {
  primary: 'EyeBrowTitle--primary',
  neutral: 'EyeBrowTitle--neutral',
};

export const EyebrowTitle = ({ content, browPlace, color, utilityClasses }) => {
  return (
    <h4
      className={`EyeBrowTitle ${browPlaces[browPlace]} ${colors[color]} ${
        utilityClasses ? utilityClasses : ''
      }`}
    >
      {content}
    </h4>
  );
};

EyebrowTitle.propTypes = {
  content: PropTypes.string.isRequired,
  browPlace: PropTypes.oneOf(Object.keys(browPlaces)).isRequired,
  color: PropTypes.oneOf(Object.keys(colors)).isRequired,
  utilityClasses: PropTypes.string,
};
