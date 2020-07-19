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
      size="calc(1.25rem + 1px)"
      speed={2.5}
    />
  );
};
