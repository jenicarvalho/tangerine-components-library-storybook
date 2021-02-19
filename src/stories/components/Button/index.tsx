import React from 'react';

import { ButtonProps } from '@material-ui/core/Button'
import { ButtonStyled } from './styles'

export const Button  = (props: ButtonProps) => {
  return (
    <ButtonStyled {...props} variant="contained">
      {props.children}
    </ButtonStyled> 
  );
};
