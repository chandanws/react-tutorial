import React from "react";



/// Dumb component or presentational component
/// access to the state or props.

export default ({ items }) => <ul>{items.map(i => <li key={i}>{i}</li>)}</ul>;
