import { BaseText } from '../../components/BaseText/BaseText';
import { EyebrowTitle } from '../../components/EyebrowTitle/EyebrowTitle';
import { Title } from '../../components/Title/Title';
import kitchenSmall from '../../assets/img/kitchen_small.png';
import bedroomSmall from '../../assets/img/bedroom_small.png';
import badgeStar from '../../assets/img/badge_star.svg';

export const About = () => {
  return (
    <section className='py-12 md:py-24 xl:py-32'>
      <div className='container xl:flex xl:items-center xl:gap-10'>
        <div className='mb-20 sm:mb-28 xl:max-w-[592px] xl:mb-0'>
          <EyebrowTitle content='about us' browPlace='before' color='primary' />
          <Title
            children={
              <h2>
                We help to bring your <i>dream home</i> to reality
              </h2>
            }
            size='md'
            utilityClasses='mb-6'
          />
          <BaseText
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.'
            size='md'
            utilityClasses='mb-6'
          />
          <BaseText
            content='Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. Faucibus sit odio bibendum lobortis diam.'
            size='md'
          />
        </div>
        <div className='relative columns-2 gap-2 sm:gap-5 xl:gap-4'>
          <div className='pb-[22%] xl:pb-[30%]'>
            <img className='w-full' src={kitchenSmall} alt='kitchen' />
          </div>
          <div className='pt-[22%] xl:pt-[30%]'>
            <img className='w-full' src={bedroomSmall} alt='bedroom' />
          </div>
          <img
            src={badgeStar}
            alt='badge'
            className='absolute left-[42%] top-0 -translate-y-1/2'
          />
        </div>
      </div>
    </section>
  );
};
