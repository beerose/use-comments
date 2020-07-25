import { deep, future } from '@theme-ui/presets';
import nightOwl from '@theme-ui/prism/presets/night-owl.json';
import { Theme, merge } from 'theme-ui';
import { alpha, lighten } from '@theme-ui/color';

const primary = {
  fontFamily: 'inherit',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'transform 150ms linear',
  ':hover, :focus': {
    transform: 'translateY(-0.125rem)',
  },
  ':focus': {
    // borderColor: 'background',
    // boxShadow: t => `0 0 0 2px ${t.colors.secondary}`,
    // outline: 'none',
  },
  '&&': {
    color: 'background',
    ':hover, :focus': {
      textDecoration: 'none',
    },
  },
};

const secondaryLight = alpha('secondary', 0.2);
const theme: Theme = merge(future as Theme, {
  initialColorModeName: 'light',
  useColorSchemeMediaQuery: true,
  // fontSizes: [8, 10, 16, 24, 36, 54, 81, 121],
  colors: {
    shadow: 'rgba(0,0,0,0.2)',
    heading: 'rgb(51, 51, 51)',
    modes: {
      dark: {
        ...deep.colors,
        shadow: 'rgba(0,0,0,0.4)',
        text: 'hsl(210, 60%, 97%)',
        heading: '#fff',
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
      width: '100%',
      px: [3, 3, 3, 4],
      section: {
        px: '2px',
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
      color: 'text',
      cursor: 'pointer',
      textDecoration: 'none',
      borderBottom: '2px solid',
      borderBottomColor: 'primary',
      position: 'relative',
      ':focus, :hover': {
        ':before': {
          content: '""',
          backgroundColor: secondaryLight,
          opacity: 0.9,
          position: 'absolute',
          top: -1,
          bottom: -1,
          right: -1,
          left: -1,
          transform: 'rotate(-2deg)',
        },
      },
    },
    h1: {
      padding: 0,
      lineHeight: ['50px', '70px'],
      color: 'heading',
      fontSize: [6, 7],
    },
    h2: {
      color: 'heading',
      fontSize: 5,
    },
    h3: {
      fontFamily: 'body',
      fontSize: 2,
    },
    h4: {
      fontFamily: 'body',
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
        position: 'relative',
        counterIncrement: 'i',
        '> p:first-of-type': {
          display: 'inline-block',
        },
      },
      'li:before': {
        position: 'absolute',
        top: '10px',
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
        bg: secondaryLight,
      },
    },
    img: {
      marginY: '25px',
      borderRadius: '5px',
      boxShadow: '0 6px 42px rgba(0,0,0,0.12)',
    },
  },
  buttons: {
    primary: primary,
  },
  links: {
    navLink: {
      borderBottom: 'none',
    },
    button: {
      ...primary,
      ':focus, :hover': { '::before': { display: 'none' } },
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
