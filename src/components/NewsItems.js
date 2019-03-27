import React, { Component } from "react";

class NewsItems extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.item.title}</h4>
        <h5>{this.props.item.feed}</h5>
      </div>
    );
  }
}

export default NewsItems;
