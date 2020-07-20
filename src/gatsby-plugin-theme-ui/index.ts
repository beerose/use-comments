import { deep, future } from '@theme-ui/presets';
import nightOwl from '@theme-ui/prism/presets/night-owl.json';
import { Theme, merge } from 'theme-ui';
import { alpha, lighten } from '@theme-ui/color';

const theme: Theme = merge(future as Theme, {
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    modes: {
      dark: {
        ...deep.colors,
        text: 'hsl(210, 60%, 97%)',
      },
    },
  },
  fonts: {
    heading: 'PT Serif',
    body: 'system-ui, sans-serif',
    mono: 'Monolisa, Fira Code, Hasklig, Hack, Menlo, Monaco',
  },
  radii: {
    tiny: '4px',
    small: '5px',
    medium: '10px',
  },
  styles: {
    root: {},
    time: {
      fontWeight: '200',
      color: 'gray',
    },
    // comment in LiveEdit
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
      my: 2,
      code: {
        bg: 'muted',
        color: 'text',
      },
    },
    code: {
      ...nightOwl,
      fontFamily: 'mono',
      fontSize: '0.8em',
      padding: '4px 6px',
      borderRadius: 'tiny',
    },
    pre: {
      padding: '8px 10px',
      borderRadius: 'small',
    },
    a: {
      color: 'primary',
      cursor: 'pointer',
      textDecoration: 'none',
      nav: {
        textDecoration: 'none',
      },
      ':focus, :hover': {
        textDecoration: 'underline',
      },
    },
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: 'heading',
    },
    h1: {
      fontSize: ['40px', '60px'],
      padding: 0,
      lineHeight: ['50px', '70px'],
      color: lighten('text', 0.2),
    },
    h2: {
      marginTop: 0,
    },
    hr: {
      borderStyle: 'dashed',
    },
    ol: {
      listStyle: 'none',
      counterReset: 'i',
      paddingInlineStart: 4,
      li: {
        counterIncrement: 'i',
        '> p:first-of-type': {
          display: 'inline-block',
        },
      },
      'li:before': {
        fontWeight: 'bold',
        fontFamily: 'heading',
        fontSize: 3,
        display: 'inline-block',
        transform: 'rotate(5deg)',
        verticalAlign: 'middle',
        content: 'counters(i, ".") ". "',
        px: '7px',
        my: '-7px',
        ml: -4,
        opacity: 0.9,
        // border: '1px solid',
        bg: alpha('secondary', 0.2),
      },
    },
  },
  buttons: {
    primary: {
      fontFamily: 'inherit',
      fontWeight: 'bold',
      cursor: 'pointer',
      transition: 'transform 150ms linear',
      ':hover, :focus': {
        transform: 'translateY(-0.125rem)',
      },
      '&&': {
        color: 'background',
        ':hover, :focus': {
          textDecoration: 'none',
        },
      },
    },
  },
});

export default theme;
