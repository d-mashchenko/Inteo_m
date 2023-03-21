import { Hero } from '../sections/Hero/Hero';
import { Awards } from '../sections/Awards/Awards';
import { About } from '../sections/About/About';
import { Metric } from '../sections/Metric/Metric';
import { Services } from '../sections/Services/Services';
import { Works } from '../sections/Works/Works';

export const Home = () => {
  return (
    <>
      <Hero />
      <Awards />
      <About />
      <Metric />
      <Services />
      <Works />
    </>
  );
};
