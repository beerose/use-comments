/** @jsx jsx */
import { useColorMode, jsx } from 'theme-ui';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

export const ToggleMode = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <div className="js-only" sx={{ display: 'flex' }}>
      <DarkModeSwitch
        onChange={() =>
          setColorMode(colorMode === 'default' ? 'dark' : 'default')
        }
        checked={colorMode !== 'default'}
        sunColor="currentColor"
        moonColor="currentColor"
        /** @ts-ignore */
        size="calc(1.25rem + 1px)"
        speed={2.5}
      />
      <noscript>
        <style
          dangerouslySetInnerHTML={{ __html: '.js-only { display: none }' }}
        />
      </noscript>
    </div>
  );
};
