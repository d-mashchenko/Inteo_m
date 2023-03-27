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
    <section className='Services pt-24 pb-12 sm:pt-36 sm:pb-24 xl:pt-40 xl:pb-28'>
      <div className='container'>
        <EyebrowTitle
          content='our services'
          browPlace='before'
          color='primary'
          utilityClasses='mb-6'
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
        <div className='flex flex-col gap-8 xl:flex-row'>
          {services.map((item, index) => (
            <div key={index} className='border border-primary-100 p-8 sm:p-10'>
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
