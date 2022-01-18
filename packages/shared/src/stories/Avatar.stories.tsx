import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Avatar from '../components/Avatar/Avatar';
import avatar1 from './assets/avatar1.svg'
import avatar2 from './assets/avatar2.svg'


export default {
  title: 'Shared/Avatar',
  component: Avatar,
  args: {}
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarRounded = Template.bind({});
export const AvatarText = Template.bind({});
AvatarText.args = {
  variant: 'rounded',
  alt: 'TX',
};
AvatarRounded.args = {
  variant: 'rounded',
  alt: 'AV',
  src: avatar1,
};
export const AvatarCircle = Template.bind({});
AvatarCircle.args = {
  alt: 'TX',
  src: avatar2,
};
export const AvatarSquare = Template.bind({});
AvatarSquare.args = {
  variant: 'square',
  alt: 'AV',
  src: avatar2,
};
