import PropTypes from 'prop-types';

const browPlaces = {
  before: 'before:w-16 before:h-[1px] before:inline-block before:mr-4',
  after: 'after:w-16 after:h-[1px] after:inline-block after:ml-4',
};

const colors = {
  primary: 'text-primary-600 before:bg-primary-600 after:bg-primary-600',
  neutral: 'text-neutral-700 before:bg-neutral-700 after:bg-neutral-700',
};

export const EyebrowTitle = ({ content, browPlace, color, utilityClasses }) => {
  return (
    <h4
      className={`${browPlaces[browPlace]} ${colors[color]} mb-6 flex items-center font-outfit text-sm font-semibold uppercase tracking-widest ${utilityClasses}`}
    >
      {content}
    </h4>
  );
};

EyebrowTitle.propTypes = {
  content: PropTypes.string.isRequired,
  browPlace: PropTypes.oneOf(['before', 'after']).isRequired,
  color: PropTypes.oneOf(['primary', 'neutral']).isRequired,
  utilityClasses: PropTypes.string,
};
