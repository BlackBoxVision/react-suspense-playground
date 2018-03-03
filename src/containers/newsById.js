import '../styles/newsById.css';

import React from "react";
import { createResource } from "simple-cache-provider";

import Placeholder from "../components/placeholder";
import WithCache from "../components/withCache";
import Layout from "../components/layout";

const newsByIdFetcher = createResource(async id => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await res.json();
});

export default class NewsById extends React.PureComponent {
  render() {
    return (
      <Layout fixed>
        <WithCache
          render={cache => {
            const nws = newsByIdFetcher(cache, this.props.id);

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
          }}
        />
      </Layout>
    );
  }
}
