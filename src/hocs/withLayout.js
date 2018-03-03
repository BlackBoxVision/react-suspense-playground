import React from "react";

import Layout from '../containers/Layout';

const withLayout = Component => props => (
  <Layout>
    <Component {...props} />
  </Layout>
);

export default withLayout;
