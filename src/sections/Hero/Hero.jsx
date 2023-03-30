import { BaseText } from '../../components/BaseText/BaseText';
import { Title } from '../../components/Title/Title';
import { VerticalListTitle } from '../../components/VerticalListTitle/VerticaListTitle';
import room from '../../assets/img/room.png';
import roomMobile from '../../assets/img/roomMobile.png';
import getInTouchBadge from '../../assets/img/getintouch.png';
import { ReactComponent as AwardGermanDesign } from '../../assets/icons/01_award.svg';
import { ReactComponent as AwardADesign } from '../../assets/icons/02_award.svg';
import { ReactComponent as AwardIfDesign } from '../../assets/icons/03_award.svg';
import { ReactComponent as AwardGoodDesign } from '../../assets/icons/04_award.svg';

import './Hero.scss';

const awards = [
  {
    icon: AwardGermanDesign,
    title: `German Design Award`,
    year: `2021`,
  },
  {
    icon: AwardADesign,
    title: `Gold A’ Design Award`,
    year: `2021`,
  },
  {
    icon: AwardIfDesign,
    title: `IF Design Award`,
    year: `2020`,
  },
  {
    icon: AwardGoodDesign,
    title: `Good Design Award`,
    year: `2019`,
  },
];

const color = '#C4A386';

export const Hero = () => {
  return (
    <section className='Hero pt-20'>
      <div className='container relative pb-20 text-center'>
        <Title
          children={
            <h1>
              Make <i>your home</i> an ode to joy
            </h1>
          }
          size='xl'
          utilityClasses='mb-6 max-w-[1300px] mx-auto'
        />
        <BaseText
          content='We turn your empty house to a lovely home, making the compact spaces
           with sapce saving furnitures. Making the unique tastes of yours into reality!'
          size='xl'
          utilityClasses='max-w-[800px] mx-auto'
        />
        <a href='#'>
          <img src={getInTouchBadge} alt='badge' className='Hero__badge' />
        </a>
      </div>
      <div className='h-[640px] '>
        <picture>
          <source media='(max-width: 480px)' srcSet={roomMobile} />
          <source media='(min-width: 481px)' srcSet={room} />
          <img src={room} alt='room' className='h-full w-full object-cover' />
        </picture>
      </div>
      <div className='bg-neutral-800 py-6'>
        <div className='container flex justify-center sm:items-center'>
          <VerticalListTitle text='Awards' />
          <ul className='Hero__awards-list'>
            {awards.map((item, index) => (
              <li
                key={index}
                className='flex items-center gap-3 sm:w-1/2 xl:w-auto'
              >
                <item.icon className=' fill-primary-300' />
                <p className='text-sm leading-6 text-neutral-300'>
                  {item.title} <br></br> {item.year}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
