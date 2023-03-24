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
    <header>
      <div className='container flex items-center justify-between'>
        <a href='#'>
          <img src={logo} alt='logo' />
        </a>
        <div className='flex py-5'>
          <ul className='mr-4 hidden items-center gap-4 sm:flex'>
            {links.map((item, index) => (
              <li key={index}>
                <a
                  className='px-4 text-sm font-medium leading-6 text-neutral-700'
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <Button size='normal' text='contact us' />
        </div>
      </div>
    </header>
  );
};
