import styled from '@emotion/styled';

export type ButtonProps = {
    border: boolean;
}

export const Button = styled('button')<ButtonProps>(({ border = false }) => ({
    borderStyle: 'solid',
    borderColor: border ? 'red': 'transparent',
    borderWidth: 1,
}));