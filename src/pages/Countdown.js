import React, { Component } from "react";
import { Grid, Col, Form, FormControl, Button } from "react-bootstrap";
import Clock from "../components/Clock";
import "./Countdown.css";

class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deadline: "31 December 2019",
      newDeadline: ""
    };
  }

  changeDeadline() {
    this.setState({ deadline: this.state.newDeadline });
  }

  render() {
    return (
      <div>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <h3>Countdown</h3>
            <p>
              Druga aplikacja odmierza czas od teraz do końca roku. Mamy
              możliwość zmiany daty i sprawdzenia ile zostało czasu do zadanego
              terminu. Datę podajemy po angielsku. Może kiedyś to zmienię, ale
              nie jest to zbyt istotne.
            </p>
            <div className="countdown">
              <div className="countdown-title">
                countdown to <span>{this.state.deadline}</span>
              </div>
              <Clock deadline={this.state.deadline} />
              <Form inline>
                <FormControl
                  className="Deadline-input"
                  onChange={event =>
                    this.setState({ newDeadline: event.target.value })
                  }
                  placeholder="new date"
                />
                <Button bsStyle="danger" onClick={() => this.changeDeadline()}>
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default Countdown;
