import { EyebrowTitle } from '../components/EyebrowTitle/EyebrowTitle';

export default {
  component: EyebrowTitle,
  tags: ['autodocs'],
};

export const Primary = {
  args: {
    content: 'about us',
    browPlace: 'before',
    color: 'primary',
  },
};

export const Secondary = {
  args: {
    ...Primary.args,
    browPlace: 'after',
    color: 'neutral',
  },
};
