import { deep, future } from '@theme-ui/presets';
import nightOwl from '@theme-ui/prism/presets/night-owl.json';
import { Theme, merge } from 'theme-ui';
import { alpha, lighten } from '@theme-ui/color';

const theme: Theme = merge(future as Theme, {
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,
  colors: {
    shadow: 'rgba(0,0,0,0.2)',
    modes: {
      dark: {
        ...deep.colors,
        shadow: 'rgba(0,0,0,0.4)',
        text: 'hsl(210, 60%, 97%)',
      },
    },
  },
  sizes: {
    container: 1100,
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
      paddingX: '2px',
      overflow: 'scroll',
      width: '100%',
      px: [3, 3, 3, 4],
      section: {
        px: 0,
      },
    },
    p: {
      my: 2,
      width: '70ch',
      maxWidth: '100%',
    },
    code: {
      ...nightOwl,
      fontFamily: 'mono',
      fontSize: '0.8em',
      padding: '4px 6px',
      borderRadius: 'tiny',
    },
    inlineCode: {
      '&&': {
        bg: 'muted',
        color: 'text',
      },
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
      color: lighten('text', 0.2),
    },
    hr: {
      borderStyle: 'dashed',
    },
    ul: {
      width: '70ch',
      maxWidth: '100%',
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
    img: {
      marginY: '25px',
      borderRadius: '5px',
      boxShadow: '0 6px 42px rgba(0,0,0,0.12)',
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
  forms: {
    input: {
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
  },
  messages: {
    primary: {
      backgroundColor: alpha('secondary', 0.2),
    },
  },
});

export default theme;
