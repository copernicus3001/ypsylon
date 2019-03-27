import React, { Component } from "react";
import { Grid, Col, Button } from "react-bootstrap";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      count: 0
    };
  }

  handleAddOne() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinusOne() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(prevState => {
      return {
        count: 0
      };
    });
  }

  render() {
    return (
      <div>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <h3>Counter</h3>
            <p>
              Pierwsza aplikacja w technologii React - licznik zliczający ilość
              kliknięć w przyciski. Przycisk "+1" zwiększa wskazania licznika,
              przycisk "-1" zmniejsza. Możliwość zresetowania ustawień
              przyciskiem "reset".
            </p>
            <div className="counter">
              <p>Licznik: {this.state.count}</p>
              <Button onClick={this.handleAddOne}>+1</Button>{" "}
              <Button onClick={this.handleMinusOne}>-1</Button>{" "}
              <Button onClick={this.handleReset}>reset</Button>
            </div>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default Counter;
