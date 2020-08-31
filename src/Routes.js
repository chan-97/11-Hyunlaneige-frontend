import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "../src/Pages/Main/Main";
import ProductsList from "../src/Pages/ProductsList/ProductList";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/productslist" component={ProductsList} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;