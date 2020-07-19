/* @jsx jsx */
import { jsx, Styled as s, BaseStyles } from 'theme-ui';
import { Helmet } from 'react-helmet';

import code from '!!raw-loader!../components/Example.txt';
import { LiveEdit } from '../components/LiveEdit';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import GettingStarted from './GettingStarted';

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
      </Helmet>
      <div
        sx={{
          padding: ['20px', '20px 50px 40px'],
          '@media screen and (min-width: 1400px)': {
            padding: '20px 350px 60px',
          },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
        }}
      >
        <Header />
        <Hero />
        <LiveEdit code={code.trim()} sx={{}} />
        <GettingStarted />
        <footer>
          2020 ・ Built with 💜 by{' '}
          <a href="http://twitter.com/aleksandrasays">Aleksandra Sikora</a>
        </footer>
      </div>
    </BaseStyles>
  );
}
