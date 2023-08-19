import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => HTML element (render)
const heading = React.createElement("h1", {}, "Hello from React js");
const root = ReactDOM.createRoot(document.getElementById("root"));

//JSX - is a different syntax, HTML like -r XML like Syntax
//JSX is a React Element
// JSX is transpiled to JS before code is sent to JS engine, Parcel is using babel to do that
const jsxHeading = <h id="heading">Hello from Reactjs JSX</h>;
// JSX is getting converted to React.createElement first (using Babel)
// then react code is converted to JS code (Using React js)

const Title = () => <h1>Hello from Title  Functional Component</h1>
// Title Component

// Component Composition - Keeping Different react components together in JSX like title and Heading component below
// React Functional Component
const HeadingComponent = () => {
  return(
  <div className="container">
  <Title /> 
    <h1 id="heading">Hello from Heading Functional Component</h1>
  </div>);
};

//converts heading object to HTML dom element
root.render(<HeadingComponent />);
