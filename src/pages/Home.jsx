import { Hero } from '../sections/Hero/Hero';
import { About } from '../sections/About/About';
import { Services } from '../sections/Services/Services';
import { Works } from '../sections/Works/Works';
import { Divider } from '../components/Divider/Divider';
import { Contacts } from '../sections/Contacts/Contacts';

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Divider />
      <Services />
      <Works />
      <Divider />
      <Contacts />
      <Divider />
    </>
  );
};
