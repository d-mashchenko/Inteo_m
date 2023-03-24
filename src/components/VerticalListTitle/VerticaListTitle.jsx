import PropTypes from 'prop-types';

import './VerticalListTitle.scss';

export const VerticalListTitle = ({ text }) => {
  return (
    <p
      className='vertical self-start pl-11 font-playfair text-2xl italic text-white 
      opacity-50 before:block before:h-[1px] 
      before:w-6 before:-translate-x-[10px] before:translate-y-[40px] before:bg-white sm:self-auto 
      sm:pl-10 before:md:w-[64px] before:md:-translate-x-[20px] before:md:translate-y-[40px]'
    >
      {text}
    </p>
  );
};

VerticalListTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
