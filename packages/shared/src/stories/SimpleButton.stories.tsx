import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SimpleButton } from '../components/SimpleButton/SimpleButton';

export default {
  title: 'Example Simple Button',
  component: SimpleButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SimpleButton>;

const Template: ComponentStory<typeof SimpleButton> = (args) => <SimpleButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  label: 'Primary Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  label: 'Secondary Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
