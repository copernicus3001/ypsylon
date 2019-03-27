import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import CustomNavBar from "./components/CustomNavBar";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Countdown from "./pages/Countdown";
import News from "./pages/News";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavBar />
          <Route exact path="/" component={Home} />
          <Route path="/counter" component={Counter} />
          <Route path="/countdown" component={Countdown} />
          <Route path="/news" component={News} />
        </div>
      </Router>
    );
  }
}

export default App;
