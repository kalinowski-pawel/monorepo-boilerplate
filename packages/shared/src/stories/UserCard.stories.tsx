import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserCard } from '../components/UserCard/UserCard';

import avatar1 from './assets/avatar1.svg'


export default {
  title: 'Example/UserCard',
  component: UserCard,
  args: {}
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = (args) => <UserCard {...args} />;

export const UserCardWithData = Template.bind({});
UserCardWithData.args = {
  variant: 'rounded',
  alt: 'AV',
  src: avatar1,
  name: 'Example user name',
};
