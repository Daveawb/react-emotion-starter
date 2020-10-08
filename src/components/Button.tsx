import styled from '@emotion/styled';
import { border, BorderProps, flexbox } from 'styled-system';

export type ButtonProps = {
  border: boolean;
};

export type StyledSystemButtonProps = BorderProps;

// Super simple button
export const Button = styled('button')<ButtonProps>(({ border = false }) => ({
  borderStyle: 'solid',
  borderColor: border ? 'red' : 'transparent',
  borderWidth: 1,
}));

export const StyledSystemButton = styled('button')<StyledSystemButtonProps>(border);
