import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserCard } from '../components/UserCard/UserCard';

import avatar1 from './assets/avatar1.svg'
import avatar2 from './assets/avatar2.svg'


export default {
  title: 'Shared/UserCard',
  component: UserCard,
  args: {}
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = (args) => <UserCard {...args} />;

export const UserCardAvatar = Template.bind({});
UserCardAvatar.args = {
  alt: 'AV',
  src: avatar1,
  name: 'Circle user avatar',
  avatarWidth: '40',
  avatarHeight: '40',
};

export const UserCardRoundedAvatar = Template.bind({});
UserCardRoundedAvatar.args = {
  alt: 'AV',
  src: avatar2,
  variant: 'rounded',
  name: 'Rounded user avatar',
  avatarWidth: '40',
  avatarHeight: '40',
};