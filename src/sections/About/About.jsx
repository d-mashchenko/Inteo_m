import { BaseText } from '../../components/BaseText/BaseText';
import { EyebrowTitle } from '../../components/EyebrowTitle/EyebrowTitle';
import { Title } from '../../components/Title/Title';
import kitchenSmall from '../../assets/img/kitchen_small.png';
import bedroomSmall from '../../assets/img/bedroom_small.png';
import badgeStar from '../../assets/img/badge_star.svg';

const metrics = [
  {
    value: '100%',
    description: 'satisfitation clients',
  },
  {
    value: '250',
    description: 'employees on worldwide',
  },
  {
    value: '3469',
    description: 'projects completed on 60 countries',
  },
];

export const About = () => {
  return (
    <section className='pt-12 pb-12 md:pt-24 xl:pt-32'>
      <div className='container flex flex-col gap-20 pb-12 sm:gap-28 md:pb-24 xl:flex-row xl:items-center xl:gap-10 xl:pb-32'>
        <div className='xl:max-w-[592px]'>
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
            content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. 
            Erat id laoreet posuere etiam morbi.'
            size='md'
            utilityClasses='mb-6'
          />
          <BaseText
            content='Tempor dolor elementum tellus non ipsum faucibus. Justo, magna mauris posuere auctor justo. 
            Habitant proin aliquet volutpat leo ultricies. Dui blandit eget vitae turpis ultrices aliquet nunc. 
            Faucibus sit odio bibendum lobortis diam.'
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
      <div className='container'>
        <div className='pb-12 sm:flex sm:justify-between xl:pb-20'>
          {metrics.map((item, index) => (
            <div
              className='mb-8 flex items-center gap-4 last:mb-0 min-[480px]:justify-center sm:mb-0 sm:block xl:flex'
              key={index}
            >
              <Title
                children={<h2>{item.value}</h2>}
                size='lg'
                utilityClasses='sm:mb-2 xl:mb-0'
              />
              <p className='max-w-[168px] text-sm uppercase tracking-wider text-neutral-900'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <hr className='text-neutral-300'></hr>
      </div>
    </section>
  );
};
