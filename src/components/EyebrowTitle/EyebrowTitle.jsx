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

export const EyebrowTitle = ({
  content,
  browPlace = 'before',
  color = 'primary',
  utilityClasses,
}) => {
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
  /**
   * Component contents
   */
  content: PropTypes.string.isRequired,
  /**
   * Position of pseudoelement (line)
   */
  browPlace: PropTypes.oneOf(Object.keys(browPlaces)),
  /**
   * Component color
   */
  color: PropTypes.oneOf(Object.keys(colors)),
  /**
   * Some additional classes like margin, padding e.g.
   */
  utilityClasses: PropTypes.string,
};
