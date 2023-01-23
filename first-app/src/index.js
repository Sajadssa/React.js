import React from "react";
//  import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import App from './App';
//import css file
import './index.css';
// const element = React.createElement(
//   "div",
//   { id: "app-title", className: "app-react" },
//   "this is first app react"
// );
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App name="sajad" />);


// ReactDOM.render(<App/> ,document.getElementById("root"));
