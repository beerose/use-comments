/** @jsx jsx */
import { jsx, Link } from 'theme-ui';
import { ToggleMode } from './ToggleMode';
import { GitHub } from './Github';
import { ComponentProps } from 'react';

export const Header = (props: ComponentProps<'header'>) => (
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
    {...props}
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
      href="/#getting-started"
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
