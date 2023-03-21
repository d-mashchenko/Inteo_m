import { Title } from '../../components/Title/Title';

export const Metric = () => {
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

  return (
    <section className='pb-12'>
      <div className='container'>
        <div className='pb-12  sm:flex sm:justify-between xl:pb-20'>
          {metrics.map((item, index) => (
            <div
              className='flex min-[480px]:justify-center sm:block xl:flex items-center gap-4 mb-8 last:mb-0 sm:mb-0'
              key={index}
            >
              <Title
                children={<h2>{item.value}</h2>}
                size='lg'
                utilityClasses='sm:mb-2 xl:mb-0'
              />
              <p className='font-outfit text-sm text-neutral-900 uppercase tracking-wider max-w-[168px]'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <hr className='text-neutral-300'></hr>
      </div>
    </section>
  );
};
