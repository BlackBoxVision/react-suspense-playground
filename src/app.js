import React from "react";

import News from "./containers/News";
import NewsById from "./containers/NewsById";

import ErrorBoundary from './components/ErrorBoundary';
import Layout from "./containers/Layout";

export default class BlogApp extends React.Component {
  render() {
    return (
      <Layout>
        <ErrorBoundary render={this.renderError}>
          <News />
        </ErrorBoundary>
      </Layout>
    );
  }

  renderError = ({ error, info }) => (console.info(error),
    <div className="error-message">Parece que ha habido un error.</div>
  )
}
