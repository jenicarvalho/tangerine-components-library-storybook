import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Typography } from '../Typography'

import { Card } from './index';
import { CardProps } from '@material-ui/core/Card'

export default {
  title: 'Example/Card',
  component: Card
} as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const CardRegular = Template.bind({});
CardRegular.args = {
  children: <Typography variant="h5">Shadow here!</Typography>
};

export const CardOutlined = Template.bind({});
CardOutlined.args = {
  children: <Typography variant="h5">Zero shadow!</Typography>,
  variant: 'outlined'
};

export const CardOutlinedText = Template.bind({});
CardOutlinedText.args = {
  children: <>
              <Typography variant="h3">Material UI rules!</Typography>
              <Typography variant="subtitle1">Come cool text here</Typography>
              <Typography variant="body2">Lorem ipsum dolor sit ammet, ipsum dolor sit ammet.</Typography>
            </>,
  variant: 'outlined'
};
