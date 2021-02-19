import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { TextField } from './index';
import { OutlinedTextFieldProps } from '@material-ui/core/TextField'

export default {
  title: 'Example/TextField',
  component: TextField
} as Meta;

const Template: Story<OutlinedTextFieldProps> = (args) => <TextField {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: 'Type here..',
  variant: 'outlined',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  type: 'password',
  helperText: 'Forget it?',
  variant: 'outlined'
};
export const Number = Template.bind({});
Number.args = {
  label: 'Your age',
  type: 'number',
  helperText: 'Min. 10 years',
  variant: 'outlined'
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Your label',
  defaultValue: 'Try type here..',
  variant: 'outlined',
  disabled: true
};

export const HelperText = Template.bind({});
HelperText.args = {
  label: 'Your label',
  helperText: 'Tip: isnt cool?',
  variant: 'outlined'
};

export const Error = Template.bind({});
Error.args = {
  error: true,
  label: 'Label',  
  defaultValue: '100',
  helperText: 'Incorrect entry',
  variant: 'outlined'
};

export const Required = Template.bind({});
Required.args = {
  required: true,
  label: 'Your Name',
  variant: 'outlined'
};





 