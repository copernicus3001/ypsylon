import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Button } from "react-bootstrap";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to YPSYLON</h2>
          <p>
            To jest strona do testów technologii React, React-Router &
            React-Bootstrap3 (niestety) opublikowana gdzieś w odległej galaktyce
            na <strong>Heroku</strong>.
          </p>
          <Link to="/counter">
            <Button bsStyle="primary">Counter</Button>
          </Link>
        </Jumbotron>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <h3>Counter</h3>
            <p>
              Pierwsza aplikacja w technologii React - licznik zliczający ilość
              kliknięć w przyciski. Przycisk "+1" zwiększa wskazania licznika,
              przycisk "-1" zmniejsza. Możliwość wyzerowania ustawień licznika
              przyciskiem "reset".
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <h3>Countdown</h3>
            <p>
              Druga aplikacja odmierza czas od teraz do końca roku. Mamy
              możliwość zmiany daty i sprawdzenia ile zostało czasu do zadanego
              terminu. Datę podajemy po angielsku. Może kiedyś to zmienię, ale
              nie jest to zbyt istotne.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <h3>News</h3>
            <p>
              Trzecia aplikacja wyświetla dane z pliku zapisanego w formacie
              JSON. Możliwe jest filtrowanie danych w zależności od treści w
              tytule wiadomości.
            </p>
          </Col>
        </Row>
        <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <h3>React 4</h3>
            <p>
              That's a crooked tree. We'll send him to Washington. These little
              son of a guns hide in your brush and you just have to push them
              out.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <h3>React 5</h3>
            <p>
              That's a crooked tree. We'll send him to Washington. These little
              son of a guns hide in your brush and you just have to push them
              out.
            </p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <h3>React 6</h3>
            <p>
              That's a crooked tree. We'll send him to Washington. These little
              son of a guns hide in your brush and you just have to push them
              out. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              consequatur consectetur itaque soluta voluptate deserunt, culpa
              veniam vitae cupiditate aliquam distinctio dolor eius? Debitis,
              fuga voluptatem et ex porro voluptates. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Deleniti, magnam et? Nihil
              optio quis ipsam sapiente eum odit voluptatum a odio excepturi
              praesentium perspiciatis ipsum ut, maiores eos qui culpa.
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Home;
