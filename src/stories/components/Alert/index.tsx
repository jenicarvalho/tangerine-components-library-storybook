import React from 'react';

import { AlertProps } from '@material-ui/lab/Alert'
import { AlertStyled, TitleStyled } from './styles'

export const Alert  = (props: AlertProps) => {
  return (
    <AlertStyled {...props}>
      { props?.title && <TitleStyled>{props.title}</TitleStyled> }
      {props.children}
    </AlertStyled> 
  );
};
