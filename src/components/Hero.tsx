/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Fragment } from 'react';

export const Hero = () => (
  <Fragment>
    <h1 sx={{ mb: 3 }}>Let's talk.</h1>
    <p
      sx={{
        fontSize: 3,
      }}
    >
      Effortlessly add a comment section to your website, <br /> and start the
      discussion on your content.
    </p>
  </Fragment>
);
