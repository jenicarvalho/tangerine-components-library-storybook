import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Typography } from './index';
import { TypographyProps } from '@material-ui/core/Typography'

export default {
  title: 'Example/Typography',
  component: Typography
} as Meta;

const Template: Story<TypographyProps> = (args) => <Typography {...args} />;

export const TypeH1 = Template.bind({});
TypeH1.args = {
  children: 'It is a <h1> ',
  variant: 'h1'
};

export const TypeH2 = Template.bind({});
TypeH2.args = {
  children: 'It is a <h2> ',
  gutterBottom: true,
  variant: 'h2'
};

export const TypeH3 = Template.bind({});
TypeH3.args = {
  children: 'It is a <h3> ',
  variant: 'h3'
};

export const TypeH4 = Template.bind({});
TypeH4.args = {
  children: 'It is a <h4>',
  variant: 'h4'
};

export const TypeH5 = Template.bind({});
TypeH5.args = {
  children: 'It is a <h5>',
  variant: 'h5'
};

export const TypeH6 = Template.bind({});
TypeH6.args = {
  children: 'It is a <h6>',
  variant: 'h6'
};

export const TypeSubtitle1 = Template.bind({});
TypeSubtitle1.args = {
  children: 'It is a subtitle 1 (under the hood is a h2)',
  variant: 'subtitle1'
};

export const TypeSubtitle2 = Template.bind({});
TypeSubtitle2.args = {
  children: 'It is a subtitle 2 (under the hood is a h2)',
  variant: 'subtitle2'
};

export const TypeBody1 = Template.bind({});
TypeBody1.args = {
  children: 'It is a body1 (under the hood is a span)',
  variant: 'body1'
};

export const TypeBody2 = Template.bind({});
TypeBody2.args = {
  children: 'It is a body2 (under the hood is a span)',
  variant: 'body2'
};
