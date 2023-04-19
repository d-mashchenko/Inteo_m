import { Button } from '../components/Button/Button';

export default {
  component: Button,
  tags: ['autodocs'],
};

export const Normal = {
  args: {
    text: 'contact us',
    size: 'normal',
  },
};

export const Big = {
  args: {
    ...Normal.args,
    size: 'big',
  },
};
