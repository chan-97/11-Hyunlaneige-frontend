import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import "./Styles/common.scss";
import GlobalStyles from "./Styles/GlobalStyles";

ReactDOM.render(
  <>
    <GlobalStyles />
    <Routes />
  </>,
  document.getElementById("root")
);
