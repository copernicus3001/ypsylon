import React, { Component } from "react";
import "./NewsList.css";
import NewsItems from "./NewsItems";

export class NewsList extends Component {
  render() {
    const newsList = this.props.news.map(item => {
      return <NewsItems key={item.id} item={item} />;
    });

    return <div className="lista">{newsList}</div>;
  }
}

export default NewsList;
