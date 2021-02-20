import React from 'react';

import { CardProps } from '@material-ui/core/Card'
import { CardStyled, CardContentStyled } from './styles'

export const Card  = (props: CardProps) => {
  return (
    <CardStyled {...props}>
      <CardContentStyled>
        {props.children}
      </CardContentStyled>
    </CardStyled> 
  );
};
