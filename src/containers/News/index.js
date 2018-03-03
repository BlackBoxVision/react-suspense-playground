import "./index.css";

import React from "react";
import { createResource } from "simple-cache-provider";

import Placeholder from "../../components/Placeholder";

import withLayout from "../../hocs/withLayout";
import withCache from "../../hocs/withCache";

const newsFetcher = createResource(async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  return await res.json();
});

class News extends React.PureComponent {
  render() {
    const news = newsFetcher(this.props.cache);
    news.length = 99;

    return (
      <Placeholder ms={400} fallback={<h1>Loading...</h1>}>
        <div className="row">
          {news && news.map(this.renderItem)}
        </div>
      </Placeholder>
    );
  }

  renderItem = (nws, index) => (
    <div className="col-4">
      <div className="card-item fade-in-up">
        <img
          alt="sample dummy"
          className="card-item-image"
          src="https://dummyimage.com/530x200/424242/ffffff&text=PST"
        />
        <h2 className="card-item-title block-ellipsis-three-lines">{nws.title}</h2>
        <p className="card-item-body block-ellipsis-three-lines">{nws.body}</p>
      </div>
    </div>
  );
}

export default withLayout(withCache(News));