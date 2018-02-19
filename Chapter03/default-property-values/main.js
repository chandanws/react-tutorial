import React from "react";
import { render } from "react-dom";

import MyButton from "./MyButton";

// Renders the "MyButton" component, without
// passing any property values.
render(
  <MyButton disabled="true" name="siva" text="hello world" />,
  document.getElementById("app")
);
