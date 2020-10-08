import React from 'react';
import { Button } from './components/Button';

export const App: React.FC = () => {
  const [hasBorder, setHasBorder] = React.useState(false);

  const onToggleBorder = (e: React.MouseEvent) => setHasBorder(!hasBorder);

  return (
    <>
      <Button border={hasBorder}>My border toggles</Button>
      <Button onClick={onToggleBorder}>Toggle border on the first button</Button>
    </>
  );
};
