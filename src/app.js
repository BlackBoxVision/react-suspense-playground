import React from "react";

import ErrorBoundary from './components/ErrorBoundary';
import { Route, Router } from './components/Router';
import Layout from "./containers/Layout";

import NewsLoader from './containers/News';
import NewsByIdLoader from './containers/NewsById';

export default class BlogApp extends React.PureComponent {
  render() {
    return (
      <Layout>
        <ErrorBoundary render={this.renderError}>
          <Router>
            <Route 
              path="/" 
              render={props => <NewsLoader {...props} />} 
            />
            <Route
              path="/:id"
              render={props => <NewsByIdLoader id={props.match.params.id} />}
            />
          </Router>
        </ErrorBoundary>
      </Layout>
    );
  }

  renderError = ({ error, info }) => (console.info(error),
    <div className="error-message">Parece que ha habido un error.</div>
  )
}
