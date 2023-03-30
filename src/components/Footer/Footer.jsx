import { EyebrowTitle } from '../EyebrowTitle/EyebrowTitle';
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as YoutubeIcon } from '../../assets/icons/youtube.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg';

import './Footer.scss';

const socialNetworks = [
  {
    icon: InstagramIcon,
    href: '#',
  },
  {
    icon: FacebookIcon,
    href: '#',
  },
  {
    icon: YoutubeIcon,
    href: '#',
  },
  {
    icon: TwitterIcon,
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
              <a href={item.href} key={index} className=' Footer__social-item'>
                <div className='rounded-full border border-primary-100'>
                  <item.icon className='m-[10px] fill-primary-600' />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
