/* @jsx jsx */
import { jsx, Styled as s, BaseStyles } from 'theme-ui';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import Prism from '@theme-ui/prism';
import { Helmet } from 'react-helmet';

import { Comments } from '../components/AddComment';
// import Example from '../components/Example.tsx';
import code from '!!raw-loader!../components/Example.txt';
import { LiveEdit } from '../components/LiveEdit';
import { Arrow } from '../components/Arrow.scg';
import deploy from '../static/deploy.png';
import { ToggleMode } from '../components/ToggleMode';

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
          padding: '40px 50px',
          '@media screen and (min-width: 1400px)': {
            padding: '60px 350px',
          },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          margin: 0,
        }}
      >
        <ToggleMode />
        <h1 sx={{ paddingBottom: '30px' }}>Comments made easy</h1>
        <LiveEdit code={code.trim()} sx={{}} />
        {/* <h1>Add comments to your blog in three steps!</h1>
        <h2>1. Create Hasura instance</h2>
        <img src={deploy} /> */}
      </div>
    </BaseStyles>
  );
}
