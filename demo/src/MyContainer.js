import React, { Component } from "react";
import MyList from "./MyList";

function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(["First", "Second", "Third", "Fourth","Fifth"]);
    }, 2000);
  });
}



export default class MyContainer extends Component {
  // The container should always have an initial state,
  // since this will be passed down to child components
  // as properties.
  state = { items: [] };

  // After the component has been rendered, make the
  // call to fetch the component data, and change the
  // state when the data arrives.
  componentDidMount() {
    fetchData().then(items => this.setState({ items }));
  }

  // Renders the containee, passing the container
  // state as properties, using the spread operator: "...".
  render() {
    return <MyList {...this.state} />;
  }
}
