import { Title } from '../Title/Title';
import { BaseText } from '../BaseText/BaseText';
import instagramIcon from '../../assets/icons/instagram.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import youtubeIcon from '../../assets/icons/youtube.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import { EyebrowTitle } from '../EyebrowTitle/EyebrowTitle';

const socialNetworks = [
  {
    src: instagramIcon,
    alt: 'instagram-icon',
    href: '#',
  },
  {
    src: facebookIcon,
    alt: 'facebook-icon',
    href: '#',
  },
  {
    src: youtubeIcon,
    alt: 'youtube-icon',
    href: '#',
  },
  {
    src: twitterIcon,
    alt: 'twitter-icon',
    href: '#',
  },
];

export const Footer = () => {
  return (
    <footer className='pb-10 sm:pb-20'>
      <div className='container'>
        <hr className='mb-10 mt-2 text-neutral-300 sm:mb-20' />
        <div className='lg:flex lg:justify-between'>
          <div className='mb-12 sm:max-w-[590px]'>
            <Title
              children={<h2>Kick-start your dream home with us</h2>}
              size='smFooter'
              utilityClasses='mb-2 sm:mb-4'
            />
            <a
              className='font-playfair text-3xl italic leading-[40px] text-primary-600 underline decoration-1 underline-offset-2 sm:text-5xl sm:leading-[60px] sm:underline-offset-[6px] '
              href='#'
            >
              Send us a hi
            </a>
          </div>
          <div>
            <h3 className='mb-2 font-playfair text-2xl leading-8 text-neutral-900'>
              Brooklyn, New York
            </h3>
            <BaseText
              content='962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United State.'
              size='xs'
              utilityClasses='mb-8 sm:max-w-[250px]'
            />
            <BaseText content='Email us at' size='xs' utilityClasses='mb-2' />
            <a
              className='mb-8 inline-block font-playfair text-2xl text-primary-600'
              href='#'
            >
              hello@landify.design
            </a>
            <BaseText
              content='If you"re hurry, quick call for us'
              size='xs'
              utilityClasses='mb-2'
            />
            <a
              className='mb-8 font-playfair text-2xl text-primary-600'
              href='#'
            >
              +8(663)125-08-59
            </a>
          </div>
        </div>
        <hr className='my-10 text-neutral-300 sm:my-20' />
        <div className='xl:flex xl:items-center xl:justify-between'>
          <p className='mb-8 font-outfit text-base font-light text-neutral-700 xl:mb-0'>
            © 2022 Inteo - Award winning studio. Made with love by
            <span className='text-primary-600'> Landify</span>
          </p>
          <div className='items-center sm:flex'>
            <EyebrowTitle
              content='connect'
              browPlace='after'
              color='neutral'
              utilityClasses='mb-[16px] sm:mb-0'
            />
            <div className='flex sm:ml-6'>
              {socialNetworks.map((item, index) => (
                <div
                  className='mr-6 rounded-full border  border-primary-100 last:mr-0'
                  key={index}
                >
                  <a href={item.href}>
                    <img src={item.src} alt={item.alt} className='p-[10px]' />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
