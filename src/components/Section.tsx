/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container } from 'theme-ui';

export const Section: React.FC<React.ComponentProps<'section'>> = props => (
  <section
    sx={{
      px: [4],
      py: [4],
      width: '800px',
    }}
    {...props}
  >
    <Container>{props.children}</Container>
  </section>
);
