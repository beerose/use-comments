// # Get started in just three steps!

// ## Deploy Hasura

// ### Configure env variables

// ## Import database schema and metadata

// ## Add `useComments` to your website
/** @jsx jsx */
import { jsx, Divider } from 'theme-ui';

export default () => (
  <div sx={{ width: '100%', mt: '10px' }}>
    <Divider sx={{ mt: '40px' }} />
    <h1>
      Get started in <span>three</span> steps!
    </h1>
    <h2>
      1. Create <a href="https://hasura.io">Hasura</a> instance
    </h2>
    <div sx={{ display: 'flex', flexDirection: 'column' }}>
      <span>
        Click the button below to deploy to Heroku. Check out the{' '}
        <a href="https://hasura.io/docs/1.0/graphql/manual/guides/deployment/heroku-one-click.html">
          docs
        </a>{' '}
        for more details.
      </span>
      <a href="https://heroku.com/deploy?template=https://github.com/hasura/graphql-engine-heroku">
        <img src="https://www.herokucdn.com/deploy/button.svg" />
      </a>
      <div>
        You can also find more options for one-click deployment
        <a
          href="https://github.com/hasura/graphql-engine#other-one-click-deployment-options"
          sx={{ pl: 1 }}
        >
          here
        </a>
        .
      </div>
    </div>
    <h2>2. Import database schema and metadata</h2>
    <h2>
      3. Add <i>useComments</i> to your website
    </h2>
  </div>
);
