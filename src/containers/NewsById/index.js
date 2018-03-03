import "./index.css";

import React from "react";
import { createResource } from "simple-cache-provider";

import Placeholder from "../../components/Placeholder";

import withLayout from "../../hocs/withLayout";
import withCache from "../../hocs/withCache";

const newsByIdFetcher = createResource(async id => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await res.json();
});

class NewsById extends React.PureComponent {
  render() {
    const nws = newsByIdFetcher(this.props.cache, this.props.id);

    return (
      <Placeholder ms={200} fallback={<h1>Loading...</h1>}>
        <section className="news fade-in-up">
          <img
            alt="sample dummy"
            className="news-image"
            src="https://dummyimage.com/530x145/212121/ffffff&text=PST"
          />
          <h1 className="news-title">{nws.title}</h1>
          <p className="news-body">{nws.body}</p>
        </section>
      </Placeholder>
    );
  }
}

export default withLayout(withCache(NewsById));