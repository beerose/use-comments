/* @jsx jsx */
import { jsx, Styled as s, BaseStyles } from 'theme-ui';
import { Helmet } from 'react-helmet';

import code from '!!raw-loader!../components/Example.jsx';
import { LiveEdit } from '../components/LiveEdit';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import GettingStarted from '../components/GettingStarted.mdx';

const Section: React.FC<React.ComponentProps<'section'>> = props => (
  <section
    sx={{
      px: [3, 3, 3, 4],
      py: 4,
    }}
    {...props}
  />
);

export default function IndexPage() {
  return (
    <BaseStyles>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif:wght@700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>💬</text></svg>"
        />
      </Helmet>
      <div
        sx={{
          py: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
        }}
      >
        <Header sx={{ px: 3 }} />
        <Section>
          <Hero />
        </Section>
        <Section>
          <LiveEdit code={code.trim()} sx={{}} />
        </Section>
        <Section>
          <GettingStarted />
        </Section>
        <footer sx={{ py: 4 }}>
          © 2020 ・ Built with 💜 by{' '}
          <a href="https://twitter.com/aleksandrasays">Aleksandra Sikora</a>・
          Powered by <a href="https://hasura.io">Hasura</a>
        </footer>
      </div>
    </BaseStyles>
  );
}
