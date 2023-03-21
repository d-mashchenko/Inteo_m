import { Button } from '../Button/Button';
import logo from '../../assets/img/logo.svg';

const links = [
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Services',
    href: '#',
  },
  {
    name: 'Our Work',
    href: '#',
  },
];

export const Header = () => {
  return (
    <header className='Header'>
      <div className='container flex justify-between items-center'>
        <a className='' href='#'>
          <img src={logo} alt='logo' />
        </a>
        <div className='flex py-5'>
          <nav className='hidden gap-4 items-center mr-4 sm:flex'>
            {links.map((item, index) => (
              <a
                className='px-4 font-medium text-sm leading-6 text-neutral-700'
                href={item.href}
                key={index}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <Button size='normal' children='contact us' />
        </div>
      </div>
    </header>
  );
};
