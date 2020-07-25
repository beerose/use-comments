/* @jsx jsx */
import { jsx, BaseStyles } from 'theme-ui';
import { Helmet } from 'react-helmet';
import { Global } from '@emotion/core';

import { Header } from './Header';

interface PageProps {
  children: React.ReactNode;
}
export function Page({ children }: PageProps) {
  return (
    <BaseStyles>
      <Helmet>
        <title>useComments</title>
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
      <Global styles={{ html: { scrollBehavior: 'smooth' } }} />
      <div
        sx={{
          py: 3,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
          height: '100%',
        }}
      >
        <Header />
        {children}
        <footer sx={{ py: 4, textAlign: 'center' }}>
          © 2020 ・ Built with 💜 by{' '}
          <a href="https://twitter.com/aleksandrasays">Aleksandra Sikora</a>・
          Powered by <a href="https://hasura.io">Hasura</a>
        </footer>
      </div>
    </BaseStyles>
  );
}
