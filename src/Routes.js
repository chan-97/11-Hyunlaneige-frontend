import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../src/Pages/Main/Main";
import SignUp from "../src/Pages/Login/SignUp";
import ProductsList from "./Pages/ProductsList/ProductsList";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/productslist" component={ProductsList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
