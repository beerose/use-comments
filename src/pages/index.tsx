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
    </Page>
  );
}
