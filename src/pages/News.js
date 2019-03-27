import React, { Component } from "react";
import { Grid, Col } from "react-bootstrap";
import JSON from "../assets/db.json";
import "./News.css";
import Header from "../components/Header.js";
import NewsList from "../components/NewsList";

export class News extends Component {
  constructor(props) {
    super(props);

    this.filtering = this.filtering.bind(this);

    this.state = {
      news: JSON,
      filtered: JSON
    };
  }

  filtering(keywords) {
    let filtered = this.state.news.filter(item => {
      return item.title.indexOf(keywords) > -1;
    });
    this.setState({
      filtered: filtered
    });
  }

  render() {
    return (
      <div>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <h3>News</h3>
            <p>
              Trzecia aplikacja wyświetla dane z pliku zapisanego w formacie
              JSON. Możliwe jest filtrowanie danych w zależności od treści w
              tytule wiadomości. Wielkość liter ma znaczenie.
            </p>
            <Header handleFiltering={this.filtering} />
            <NewsList news={this.state.filtered} />
          </Col>
        </Grid>
      </div>
    );
  }
}

export default News;
