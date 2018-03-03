import "./index.css";

import React from "react";
import { createResource as createFetcher } from "simple-cache-provider";

import Placeholder from '../../components/Placeholder';
import withCache from "../../hocs/withCache";

const newsByIdFetcher = createFetcher(async id => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await res.json();
});

class NewsById extends React.PureComponent {
  static getDerivedStateFromProps = (nextProps, prevState) => ({
    nws: newsByIdFetcher(nextProps.cache, nextProps.id)
  });

  state = {
    nws: {}
  };

  render() {
    return (
      <Placeholder ms={200} render={() => <h1>Loading..</h1>}>
        <section className="news">
          <img
            alt="sample dummy"
            className="news-image"
            src="https://dummyimage.com/530x145/212121/ffffff&text=PST"
          />
          <h1 className="news-title">{this.state.nws.title}</h1>
          <p className="news-body">{this.state.nws.body}</p>
        </section>
      </Placeholder>
    );
  }
}

export default withCache(NewsById);