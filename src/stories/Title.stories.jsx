import { Title } from '../components/Title/Title';

export default {
  component: Title,
  tags: ['autodocs'],
  argTypes: {
    children: {
      name: 'Content',
    },
  },
};

export const ExtraSmall = {
  args: {
    children: <h4>Lorem ipsum dolor sit amet.</h4>,
    size: 'xs',
  },
};

export const Small = {
  args: {
    children: <h4>Lorem ipsum dolor sit amet.</h4>,
    size: 'sm',
  },
};

export const SmallFooter = {
  args: {
    children: <h4>Lorem ipsum dolor sit amet.</h4>,
    size: 'smFooter',
  },
};

export const Medium = {
  args: {
    children: <h3>Lorem ipsum dolor sit amet.</h3>,
    size: 'md',
  },
};

export const Large = {
  args: {
    children: <h2>Lorem ipsum dolor sit amet.</h2>,
    size: 'lg',
  },
};

export const ExtraLarge = {
  args: {
    children: <h1>Lorem ipsum dolor sit amet.</h1>,
    size: 'xl',
  },
};
