import styled from 'styled-components';
import MuiButton from '@material-ui/core/Button'

export const ButtonStyled = styled(MuiButton)`
  height: 31px;
  border-radius: 4px;
  padding: 0 20px;
  transition: all .2s var(--ease);

  &.MuiButton-containedSecondary {
    border: 1px solid #d9d9d9;
    color: #1273f8;

    &:hover {
      border-color: #1273f8;
      background-color: #e7f1ff;
    }
  }
`;
