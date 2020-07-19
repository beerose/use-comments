/** @jsx jsx */
import { jsx, Link } from 'theme-ui';
import { ToggleMode } from './ToggleMode';
import { GitHub } from './Github';

export const Header = () => (
  <header
    sx={{
      display: 'flex',
      variant: 'styles.header',
      width: '100%',
      paddingBottom: [10, 20],
      fontSize: '14px',
      alignItems: 'center',
      color: 'text',
      a: {
        color: 'text',
      },
    }}
  >
    <Link
      href="/"
      sx={{
        variant: 'styles.navlink',
        mr: 3,
      }}
    >
      useComments
    </Link>
    <Link
      href="/"
      sx={{
        fontWeight: 'bold',
        bg: 'muted',
        px: 2,
        py: 1,
        borderRadius: '4px',
      }}
    >
      Getting Started
    </Link>
    <div sx={{ mx: 'auto' }} />
    <Link
      href="https://github.com/beerose/use-comments"
      sx={{ mr: 3, display: 'flex' }}
    >
      <GitHub />
    </Link>
    <ToggleMode />
  </header>
);
