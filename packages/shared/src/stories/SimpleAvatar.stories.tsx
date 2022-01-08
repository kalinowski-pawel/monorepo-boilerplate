import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { pink } from '@mui/material/colors';
import { SimpleAvatar } from '../components/SimpleAvatar/SimpleAvatar';
import repoSvg from './assets/repo.svg'


export default {
  title: 'Example/Simple Avatar',
  component: SimpleAvatar,
  args: {}
} as ComponentMeta<typeof SimpleAvatar>;

const Template: ComponentStory<typeof SimpleAvatar> = (args) => <SimpleAvatar {...args} />;

export const AvatarRounded = Template.bind({});
AvatarRounded.args = {
  variant: 'rounded',
  alt: 'AV',
  src: repoSvg,
};

export const AvatarText = Template.bind({});
AvatarText.args = {
  variant: 'rounded',
  alt: 'TX',
};

export const AvatarSquared = Template.bind({});
AvatarSquared.args = {
  variant: 'squared',
  alt: 'AV',
  src: repoSvg,
};
