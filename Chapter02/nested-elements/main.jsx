import React from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

// Imports our two components that render children...
// import MySection from "./MySection";
// import MyButton from "./MyButton";

// Renders the "MySection" element, which has a child
// component of "MyButton", which in turn has child text.
render(
  <MySection>
    <MyButton>My Button Text</MyButton>
  </MySection>,
  document.getElementById("app")
);

// const HelloWorld = () => <div>Hello</div>;

// const Hello = () => {
//   return (
//     <div>
//       <h1>hello</h1>
//     </div>
//   );
// };

// class HelloWordSmart extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h1>hello world from react class</h1>
//         <p>{this.props.name}</p>
//       </div>
//     );
//   }
// }

// HelloWordSmart.propTypes = {
//   name: PropTypes.string.isRequired
// };
// render(<HelloWordSmart name="flexton" />, document.getElementById("app"));
