import { BaseText } from '../../components/BaseText/BaseText';
import { Title } from '../../components/Title/Title';
import room from '../../assets/img/room.png';
import getInTouchBadge from '../../assets/img/getintouch.png';

export const Hero = () => {
  return (
    <section className='pt-20'>
      <div className='container text-center pb-20 relative'>
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
          content='We turn your empty house to a lovely home, making the compact spaces  with sapce saving furnitures. Making the unique tastes of yours into reality!'
          size='xl'
          utilityClasses='max-w-[800px] mx-auto'
        />
        <img
          src={getInTouchBadge}
          alt='badge'
          className='absolute left-[50%] bottom-0 -translate-x-1/2 translate-y-1/2 lg:left-0 lg:translate-x-[93%]'
        />
      </div>
      <div className='h-[640px] '>
        <img src={room} alt='room' className='w-full h-full object-cover' />
      </div>
    </section>
  );
};
