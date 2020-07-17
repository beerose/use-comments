import { deep, future } from '@theme-ui/presets';
import nightOwl from '@theme-ui/prism/presets/night-owl.json';
import { Theme } from 'theme-ui';

const theme: Theme = {
  ...future,
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    ...future.colors,
    modes: { dark: deep.colors },
  },
  styles: {
    ...future.styles,
    time: {
      fontWeight: '200',
      color: 'gray',
    },
    article: {
      backgroundColor: 'muted',
      marginBottom: '6px',
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      borderRadius: '6px',
      '> div': {
        display: 'flex',
        fontWeight: 'bold',
        paddingBottom: '6px',
        '> p': {
          fontWeight: '200',
          paddingLeft: '5px',
        },
      },
    },
    textarea: {
      fontFamily: 'body',
    },
    section: {
      overflow: 'scroll',
      width: '100%',
    },
    p: {
      margin: 0,
    },
    code: {
      ...nightOwl,
    },
    h1: {
      fontFamily: 'PT Serif',
      fontSize: '60px',
      padding: 0,
    },
  } as any,
};

console.log({ theme });

export default theme;
