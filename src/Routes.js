import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "../src/Components/Nav/Nav";
import Main from "./Pages/Main/Main";
import SignUp from "./Pages/Login/SignUp";
import SignIn from "./Pages/Login/SignIn";
import ProductsList from "./Pages/ProductsList/ProductsList";
import Footer from "../src/Components/Footer/Footer";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/productslist" component={ProductsList} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default Routes;
