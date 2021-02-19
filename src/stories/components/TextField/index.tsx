import React from 'react';

import { TextFieldProps } from '@material-ui/core/TextField'
import { TextFieldStyled } from './styles'

export const TextField  = (props: TextFieldProps) => {
  return (
    <TextFieldStyled {...props} >
      {props.children}
    </TextFieldStyled> 
  );
};
