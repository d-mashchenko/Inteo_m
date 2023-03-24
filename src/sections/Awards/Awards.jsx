import awardGermanDesign from '../../assets/icons/01_award.svg';
import awardADesign from '../../assets/icons/02_award.svg';
import awardIfDesign from '../../assets/icons/03_award.svg';
import awardGoodDesign from '../../assets/icons/04_award.svg';
import { VerticalListTitle } from '../../components/VerticalListTitle/VerticaListTitle';

import './Awards.scss';

const awards = [
  {
    image: {
      src: awardGermanDesign,
      alt: 'german-award',
    },
    title: `German Design Award`,
    year: `2021`,
  },
  {
    image: {
      src: awardADesign,
      alt: 'gold-award',
    },
    title: `Gold A’ Design Award`,
    year: `2021`,
  },
  {
    image: {
      src: awardIfDesign,
      alt: 'IF-award',
    },
    title: `IF Design Award`,
    year: `2020`,
  },
  {
    image: {
      src: awardGoodDesign,
      alt: 'good-design-award',
    },
    title: `Good Design Award`,
    year: `2019`,
  },
];

export const Awards = () => {
  return (
    <section className='bg-neutral-800 pt-6 pb-6 '>
      <div className='container flex justify-center sm:items-center'>
        <VerticalListTitle text='Awards' />
        <ul className='sm:flex sm:flex-auto sm:flex-wrap xl:flex-nowrap xl:justify-between'>
          {awards.map((item, index) => (
            <li
              key={index}
              className='award mb-6 flex items-center gap-3 last:mb-0 sm:mb-8 sm:w-1/2 sm:px-3 xl:mb-0 xl:w-auto'
            >
              <img src={item.image.src} alt={item.image.alt} />
              <p className='text-sm leading-6 text-neutral-300'>
                {item.title} <br></br> {item.year}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
