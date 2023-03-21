import { Title } from '../Title/Title';
import { BaseText } from '../BaseText/BaseText';
import instagramIcon from '../../assets/icons/instagram.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import youtubeIcon from '../../assets/icons/youtube.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import { EyebrowTitle } from '../EyebrowTitle/EyebrowTitle';

export const Footer = () => {
  const socialNetworks = [
    {
      src: instagramIcon,
      alt: 'instagram-icon',
    },
    {
      src: facebookIcon,
      alt: 'facebook-icon',
    },
    {
      src: youtubeIcon,
      alt: 'youtube-icon',
    },
    {
      src: twitterIcon,
      alt: 'twitter-icon',
    },
  ];

  return (
    <footer className='pb-10 sm:pb-20'>
      <div className='container'>
        <hr className='text-neutral-300 mb-10 mt-2 sm:mb-20' />
        <div className='lg:flex lg:justify-between'>
          <div className='mb-12 sm:max-w-[590px]'>
            <Title
              children={<h2>Kick-start your dream home with us</h2>}
              size='smFooter'
              utilityClasses='mb-2 sm:mb-4'
            />
            <a
              className='font-playfair text-3xl sm:text-5xl leading-[40px] sm:leading-[60px] text-primary-600 italic underline underline-offset-2 sm:underline-offset-[6px] decoration-1 '
              href='#'
            >
              Send us a hi
            </a>
          </div>
          <div>
            <h3 className='font-playfair text-neutral-900 text-2xl leading-8 mb-2'>
              Brooklyn, New York
            </h3>
            <BaseText
              content='962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United State.'
              size='xs'
              utilityClasses='mb-8 sm:max-w-[250px]'
            />
            <BaseText content='Email us at' size='xs' utilityClasses='mb-2' />
            <a
              className='font-playfair text-2xl text-primary-600 mb-8 inline-block'
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
              className='font-playfair text-2xl text-primary-600 mb-8'
              href='#'
            >
              +8(663)125-08-59
            </a>
          </div>
        </div>
        <hr className='text-neutral-300 my-10 sm:my-20' />
        <div className='xl:flex xl:justify-between xl:items-center'>
          <p className='font-outfit text-base font-light text-neutral-700 mb-8 xl:mb-0'>
            © 2022 Inteo - Award winning studio. Made with love by
            <span className='text-primary-600'> Landify</span>
          </p>
          <div className='sm:flex items-center'>
            <EyebrowTitle
              content='connect'
              browPlace='after'
              color='neutral'
              utilityClasses='mb-[16px] sm:mb-0'
            />
            <div className='flex sm:ml-6'>
              {socialNetworks.map((item, index) => (
                <div
                  className='border border-primary-100 rounded-full p-[10px] mr-6 last:mr-0'
                  key={index}
                >
                  <img src={item.src} alt={item.alt} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
