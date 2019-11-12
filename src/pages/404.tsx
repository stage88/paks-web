import * as React from 'react';
import { Link } from 'gatsby';

import Page from '../components/page';
import IndexLayout from '../layouts';

const NotFoundPage = () => (
  <IndexLayout>
    <Page>
      <section className='sample-text-area'>
        <div className='container box_1170'>
          <h1>404: Page not found.</h1>
          <p>
            You've hit the void. <Link to='/'>Go back.</Link>
          </p>
        </div>
        <div style={{ height: '24em' }}></div>
      </section>
    </Page>
  </IndexLayout>
);

export default NotFoundPage;
