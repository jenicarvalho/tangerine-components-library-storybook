import React from 'react';

import { AvatarProps } from '@material-ui/core/Avatar'
import { AvatarStyled } from './styles'

export const Avatar  = (props: AvatarProps) => {
  return (
    <AvatarStyled {...props}>
      {props.children}
    </AvatarStyled> 
  );
};
