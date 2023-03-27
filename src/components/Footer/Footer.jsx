import instagramIcon from '../../assets/icons/instagram.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import youtubeIcon from '../../assets/icons/youtube.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import { EyebrowTitle } from '../EyebrowTitle/EyebrowTitle';

import './Footer.scss';

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
    <footer className='py-10 sm:py-20'>
      <div className='Footer__container container'>
        <p className='Footer__copyright-note '>
          © 2022 Inteo - Award winning studio. Made with love by
          <span className='text-primary-600'> Landify</span>
        </p>
        <div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6'>
          <EyebrowTitle content='connect' browPlace='after' color='neutral' />
          <div className='flex gap-6'>
            {socialNetworks.map((item, index) => (
              <div
                className='rounded-full border border-primary-100'
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
    </footer>
  );
};
