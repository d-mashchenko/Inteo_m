import { BaseText } from '../../components/BaseText/BaseText';
import { EyebrowTitle } from '../../components/EyebrowTitle/EyebrowTitle';
import { Title } from '../../components/Title/Title';
import kitchenSmall from '../../assets/img/kitchen_small.png';
import bedroomSmall from '../../assets/img/bedroom_small.png';
import { ReactComponent as BadgeStar } from '../../assets/img/badge_star.svg';

import './About.scss';

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
    <section className='About'>
      <div className='container'>
        <div className='About__main-content'>
          <div className='flex flex-col gap-6 xl:max-w-[592px]'>
            <EyebrowTitle
              content='about us'
              browPlace='before'
              color='primary'
            />
            <Title
              children={
                <h2>
                  We help to bring your <i>dream home</i> to reality
                </h2>
              }
              size='md'
            />
            <BaseText
              content='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. 
            Erat id laoreet posuere etiam morbi.'
              size='md'
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
            <BadgeStar className='absolute left-[42%] top-0 -translate-y-1/2 fill-primary-600' />
          </div>
        </div>
        <div className='About__metric-list'>
          {metrics.map((item, index) => (
            <div
              className='About__metric-item  min-[480px]:justify-center'
              key={index}
            >
              <Title
                children={<h2>{item.value}</h2>}
                size='lg'
                utilityClasses='sm:mb-2 xl:mb-0'
              />
              <p className='About__item-description'>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
