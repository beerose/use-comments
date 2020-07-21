/* @jsx jsx */
import { jsx } from 'theme-ui';

import code from '!!raw-loader!../components/Example.jsx';
import { LiveEdit } from '../components/LiveEdit';
import { Hero } from '../components/Hero';
import GettingStarted from '../components/GettingStarted.mdx';
import { Page } from '../components/Page';
import { Section } from '../components/Section';

export default function IndexPage() {
  return (
    <Page>
      <Section>
        <Hero />
      </Section>
      <Section>
        <LiveEdit code={code.trim()} sx={{}} />
      </Section>
      <Section>
        <GettingStarted />
      </Section>
      <footer sx={{ py: 4, textAlign: 'center' }}>
        © 2020 ・ Built with 💜 by{' '}
        <a href="https://twitter.com/aleksandrasays">Aleksandra Sikora</a>・
        Powered by <a href="https://hasura.io">Hasura</a>
      </footer>
    </Page>
  );
}
