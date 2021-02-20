import React from 'react';

import { TypographyProps } from '@material-ui/core/Typography'
import { TypographyStyled } from './styles'

export const Typography  = (props: TypographyProps) => {
  return (
    <TypographyStyled {...props}>
      {props.children}
    </TypographyStyled> 
  );
};
