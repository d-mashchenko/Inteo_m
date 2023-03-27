import { Devider } from '../../components/Devider/Devider';
import { Title } from '../../components/Title/Title';

const metrics = [
  {
    value: '100%',
    description: 'satisfitation clients',
  },
  {
    value: '250',
    description: 'employees on worldwide',
  },
  {
    value: '3469',
    description: 'projects completed on 60 countries',
  },
];

export const Metric = () => {
  return (
    <section className='pb-12'>
      <div className='container'>
        <div className='pb-12 sm:flex sm:justify-between xl:pb-20'>
          {metrics.map((item, index) => (
            <div
              className='mb-8 flex items-center gap-4 last:mb-0 min-[480px]:justify-center sm:mb-0 sm:block xl:flex'
              key={index}
            >
              <Title
                children={<h2>{item.value}</h2>}
                size='lg'
                utilityClasses='sm:mb-2 xl:mb-0'
              />
              <p className='max-w-[168px] text-sm uppercase tracking-wider text-neutral-900'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Devider />
    </section>
  );
};
