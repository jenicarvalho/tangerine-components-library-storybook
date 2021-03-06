import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from './index';
import { ButtonProps } from '@material-ui/core/Button'

export default {
  title: 'Example/Button',
  component: Button
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: 'secondary',
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  color: 'primary',
  size: 'large',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  color: 'primary',
  size: 'small',
  children: 'Button',
  disabled: true
};
