import React, { Component } from "react";
import "./Header.css";

export class Header extends Component {
  state = {
    keywords: ""
  };

  handleOnChange(event) {
    this.setState({
      keywords: event.target.value
    });
    this.props.handleFiltering(event.target.value);
  }

  render() {
    return (
      <div className="header">
        <input
          onChange={this.handleOnChange.bind(this)}
          placeholder="szukaj..."
        />
      </div>
    );
  }
}

export default Header;
