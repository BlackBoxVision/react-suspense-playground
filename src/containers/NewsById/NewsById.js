import "./index.css";

import React from "react";
import { createResource as createFetcher } from "simple-cache-provider";

import Component from "../../components/Component";

import withPlaceholderAndCache from "../../hocs";

const newsByIdFetcher = createFetcher(async id => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await res.json();
});

class NewsById extends Component {
  static getDerivedStateFromProps = (nextProps, prevState) => ({
    nws: newsByIdFetcher(nextProps.cache, nextProps.id)
  });

  state = {
    nws: {}
  };

  render() {
    return (
      <section className="news">
        <img
          alt="sample dummy"
          className="news-image"
          src="https://dummyimage.com/530x145/424242/ffffff&text=PST"
        />
        <h1 className="news-title">{this.state.nws.title}</h1>
        <p className="news-body">{this.state.nws.body}</p>
      </section>
    );
  }
}

export default withPlaceholderAndCache(NewsById);