import "../styles/news.css";

import React from "react";
import { createResource } from "simple-cache-provider";

import Placeholder from "../components/placeholder";
import WithCache from "../components/withCache";
import Layout from "../components/layout";

const newsFetcher = createResource(async _ => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return await res.json();
});

export default class News extends React.PureComponent {
  render() {
    return (
      <Layout>
        <div className="row">
          <WithCache
            render={cache => {
              const news = newsFetcher(cache);
              news.length = 99;

              return (
                <Placeholder ms={400} fallback={<h1>Loading...</h1>}>
                  {news.map(this.renderItem)}
                </Placeholder>
              );
            }}
          />
        </div>
      </Layout>
    );
  }

  renderItem = (nws, index) => (
    <div className="col-4">
      <div className="card-item fade-in-up">
        <img
          alt="sample dummy"
          className="card-item-image"
          src="https://dummyimage.com/530x200/212121/ffffff&text=PST"
        />
        <h2 className="card-item-title block-ellipsis-three-lines">{nws.title}</h2> 
        <p className="card-item-body block-ellipsis-three-lines">{nws.body}</p>
      </div>
    </div>
  );
}
