import React from "react";
import Loadable from "react-loadable";

import ErrorBoundary from './components/ErrorBoundary';
import { Route, Router } from './components/Router';
import Layout from "./containers/Layout";

const NewsLoader = Loadable({
  loader: () => import(/* webpackChunkName: nws */"./containers/News"),
  loading: () => <h1>Loading..</h1>
});

const NewsByIdLoader = Loadable({
  loader: () => import(/* webpackChunkName: nws-by-id */ "./containers/NewsById"),
  loading: () => <h1>Loading..</h1>
});

export default class BlogApp extends React.Component {
  render() {
    return (
      <Layout>
        <ErrorBoundary render={this.renderError}>
          <Router>
            <Route path="/" render={props => <NewsLoader {...props} />} />
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
