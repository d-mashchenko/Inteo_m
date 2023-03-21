import { EyebrowTitle } from '../../components/EyebrowTitle/EyebrowTitle';
import { Title } from '../../components/Title/Title';

import house from '../../assets/icons/house.svg';
import some from '../../assets/icons/some.svg';
import spatula from '../../assets/icons/spatula.svg';
import { BaseText } from '../../components/BaseText/BaseText';

const services = [
  {
    image: {
      src: house,
      alt: 'house',
    },
    title: 'Architectural & Interior design',
    text: 'Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.',
  },
  {
    image: {
      src: some,
      alt: 'some',
    },
    title: 'Building Renovation',
    text: 'Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.',
  },
  {
    image: {
      src: spatula,
      alt: 'spatule',
    },
    title: 'Construciton Management',
    text: 'Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc, molestie volutpat ipsum, ultricies.',
  },
];

export const Services = () => {
  return (
    <section className='py-12 sm:py-24 xl:py-28'>
      <div className='container'>
        <EyebrowTitle
          content='our services'
          browPlace='before'
          color='primary'
        />
        <Title
          children={
            <h2>
              We provide the <i>best solutions</i> for your dream home
            </h2>
          }
          size='md'
          utilityClasses='mb-10 sm:mb-20 xl:max-w-[800px]'
        />
        <div className='xl:flex xl:gap-8'>
          {services.map((item, index) => (
            <div
              key={index}
              className='p-8 sm:p-10 mb-8 last:mb-0 xl:mb-0 border border-primary-100'
            >
              <img
                src={item.image.src}
                alt={item.image.alt}
                className='mb-6 sm:mb-20'
              />
              <Title
                children={<h3>{item.title}</h3>}
                size='sm'
                utilityClasses='mb-4'
              />
              <BaseText content={item.text} size='lg' />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
