import React, { Component } from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import PropTypes from "prop-types";

import MyContainer from './MyContainer';


render(
  (<MyContainer />),
  document.getElementById('app')
);


module.hot.accept();
