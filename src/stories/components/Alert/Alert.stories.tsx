import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Alert } from './index';
import { AlertProps } from '@material-ui/lab/Alert'

export default {
  title: 'Example/Alert',
  component: Alert
} as Meta;

const Template: Story<AlertProps> = (args) => <Alert {...args} />;

export const AlertSuccess = Template.bind({});
AlertSuccess.args = {
  children: 'This is a success alert — check it out!',
  severity: 'success',
  title: 'Alerts can have a title too!',
};

export const AlertInfoCloseButton = Template.bind({});
AlertInfoCloseButton.args = {
  children: 'This is a info alert — check it out!',
  severity: 'info',
  onClose: () => {}
};

export const AlertWarningOutlined = Template.bind({});
AlertWarningOutlined.args = {
  children: 'This is a warning alert outlined — check it out!',
  severity: 'warning',
  variant: 'outlined'
};
 
export const AlertErrorFilled = Template.bind({});
AlertErrorFilled.args = {
  children: 'This is a error filled alert — check it out!',
  severity: 'error',
  variant: 'filled'
};
export const AlertWithoutIcon = Template.bind({});
AlertWithoutIcon.args = {
  children: 'No icons here :)',
  severity: 'warning',
  icon: false
};

export const AlertBigTexts = Template.bind({});
AlertBigTexts.args = {
  title: 'You can put big texts here',
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor scelerisque orci, et molestie elit mollis et. Curabitur porta nulla non lorem vulputate ultricies. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nam in est pulvinar, convallis orci non, eleifend velit. Sed sodales pharetra molestie. Vivamus mollis leo non efficitur condimentum. Sed tincidunt vulputate dapibus.Etiam a lacinia tellus, vel tempor metus. In feugiat fringilla lobortis. Integer molestie laoreet enim sed auctor. Sed ac nunc eget nulla condimentum lacinia. Praesent faucibus lorem mattis ullamcorper condimentum. Curabitur venenatis quam ac mi pellentesque eleifend. Duis id mauris at eros commodo luctus nec sed dolor. Duis ut egestas ante, sed tincidunt felis. Suspendisse sodales et lacus quis rutrum. Donec tempus, ligula eu dignissim hendrerit, purus enim efficitur metus, non venenatis ex ex sed nisl. Donec enim libero, malesuada in felis sit amet, tempor condimentum est.',
  severity: 'info',
  variant: 'filled',
  icon: false
};

export const AlertHtml = Template.bind({});
AlertHtml.args = {
  title: 'Try HTML',
  children: <div><h1>It is a H1</h1> <p> Now a p tag! Lorem ipsum dolor sit amet, consectetur adipiscing elit!!</p></div>,
  severity: 'info',
  variant: 'outlined',
  icon: false
};
 
