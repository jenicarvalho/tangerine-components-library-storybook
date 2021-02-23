import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Avatar } from './index';
import { AvatarProps } from '@material-ui/core/Avatar'

export default {
  title: 'Example/Avatar',
  component: Avatar
} as Meta;

const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

export const Circle = Template.bind({});
Circle.args = {
  color: 'primary',
  children: 'SM',
  variant: 'circle'
};
export const Square = Template.bind({});
Square.args = {
  color: 'secondary',
  children: 'JC',
  variant: 'square'
};
