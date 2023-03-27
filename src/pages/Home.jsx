import { Hero } from '../sections/Hero/Hero';
import { About } from '../sections/About/About';
import { Services } from '../sections/Services/Services';
import { Works } from '../sections/Works/Works';
import { Devider } from '../components/Devider/Devider';
import { Contacts } from '../sections/Contacts/Contacts';

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Devider />
      <Services />
      <Works />
      <Devider />
      <Contacts />
      <Devider />
    </>
  );
};
