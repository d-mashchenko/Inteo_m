import { Title } from '../../components/Title/Title';
import { BaseText } from '../../components/BaseText/BaseText';

import './Contacts.scss';

export const Contacts = () => {
  return (
    <section className='Contacts py-10 sm:py-20'>
      <div className='Contacts__container container'>
        <div className='sm:max-w-[590px]'>
          <Title
            children={<h2>Kick-start your dream home with us</h2>}
            size='smFooter'
            utilityClasses='mb-2 sm:mb-4'
          />
          <a className='Contacts__main-link' href='#'>
            Send us a hi
          </a>
        </div>
        <div className='flex flex-col gap-8'>
          <div>
            <h3 className='Contacts__city'>Brooklyn, New York</h3>
            <BaseText
              content='962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United State.'
              size='xs'
              utilityClasses='sm:max-w-[250px]'
            />
          </div>
          <div>
            <BaseText content='Email us at' size='xs' utilityClasses='mb-2' />
            <a className='Contacts__email' href='#'>
              hello@landify.design
            </a>
          </div>
          <div>
            <BaseText
              content='If you"re hurry, quick call for us'
              size='xs'
              utilityClasses='mb-2'
            />
            <a className='font-playfair text-2xl text-primary-600' href='#'>
              +8(663)125-08-59
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
