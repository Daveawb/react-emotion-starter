import React from 'react';
import { Button, StyledSystemButton } from './components/Button';

export const App: React.FC = () => {
  const [hasBorder, setHasBorder] = React.useState(false);
  const onToggleBorder = () => setHasBorder(!hasBorder);

  return (
    <>
      <Button border={hasBorder}>My border toggles</Button>

      <br />

      <Button onClick={onToggleBorder}>Toggle border on the first button</Button>

      <br />

      <StyledSystemButton border={['1px solid red', 0]}>Styled system button</StyledSystemButton>
    </>
  );
};
