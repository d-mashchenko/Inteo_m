import { EyebrowTitle } from '../../components/EyebrowTitle/EyebrowTitle';
import longTable from '../../assets/img/work_long-table.png';
import shortTable from '../../assets/img/work_short-table.png';
import pool from '../../assets/img/work_pool.png';
import { Title } from '../../components/Title/Title';
import { BaseText } from '../../components/BaseText/BaseText';
import { Button } from '../../components/Button/Button';

export const Works = () => {
  const latestWork = {
    image: {
      src: longTable,
      alt: 'long-table',
    },
    title: 'Villa Furnishing & Interior',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam. Erat id laoreet posuere etiam morbi.',
  };

  const works = [
    {
      image: {
        src: shortTable,
        alt: 'short-table',
      },
      title: 'Luxury Hotel Renovation',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.',
    },
    {
      image: {
        src: pool,
        alt: 'swimming-pool',
      },
      title: 'Residence Swimming Pool',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus fringilla dui amet faucibus nam.',
    },
  ];

  return (
    <section className='py-12 sm:py-24 xl:py-28'>
      <div className='container lg:flex lg:gap-[88px]'>
        <div className='xl:max-w-[592px]'>
          <EyebrowTitle
            content='recent works'
            browPlace='before'
            color='primary'
          />
          <Title
            children={
              <h2>
                Some of <i>our crafts</i> made with love
              </h2>
            }
            size='md'
            utilityClasses='mb-12 xl:mb-24 xl:max-w-[600px]'
          />
          <div className='mb-10 sm:mb-20 xl:mb-24'>
            <img
              src={latestWork.image.src}
              alt={latestWork.image.alt}
              className='mb-6 w-full'
            />
            <Title
              children={<h3>{latestWork.title}</h3>}
              size='xs'
              utilityClasses='mb-4'
            />
            <BaseText content={latestWork.text} size='sm' />
          </div>
          <Button
            size='big'
            children='contact us'
            utilityClasses='hidden lg:flex'
          />
        </div>
        <div className='mb-12 xl:mb-0'>
          {works.map((item, index) => (
            <div key={index} className='mb-10 sm:mb-20 last:mb-0'>
              <img
                src={item.image.src}
                alt={item.image.alt}
                className='mb-4 w-full xl:max-w-[480px]'
              />
              <Title
                children={<h3>{item.title}</h3>}
                size='xs'
                utilityClasses='mb-4'
              />
              <BaseText
                content={item.text}
                size='sm'
                utilityClasses='xl:max-w-[480px]'
              />
            </div>
          ))}
        </div>
        <Button size='big' children='contact us' utilityClasses='lg:hidden' />
      </div>
    </section>
  );
};
