/** @jsx jsx */
import { useColorMode, jsx } from 'theme-ui';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export const ToggleMode = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <DarkModeSwitch
      onChange={() =>
        setColorMode(colorMode === 'default' ? 'dark' : 'default')
      }
      checked={colorMode !== 'default'}
      size={25}
      speed={2.5}
    />
  );
};
