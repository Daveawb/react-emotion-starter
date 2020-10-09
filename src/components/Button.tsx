import styled from '@emotion/styled';
import { border, BorderProps } from 'styled-system';

export type ButtonProps = {
  border?: boolean;
};

export type StyledSystemButtonProps = ButtonProps & BorderProps;

// Super simple button
export const Button = styled('button')<ButtonProps>(
  {
    border: '2px solid transparent',
    background: 'none',
    margin: 2,
    padding: 6,
    borderRadius: 6,
    cursor: 'pointer',
    '&:focus,&:active': {
      outline: 'none',
    },
    '&:hover': {
      backgroundColor: '#dadada',
    },
  },
  ({ border = false }) =>
    border
      ? {
          borderColor: 'red',
        }
      : {},
);

export const StyledSystemButton = styled(Button)<StyledSystemButtonProps>(border);
