import * as React from "react";
import logo from "../assets/images/react.svg";
const helloStyle = require("../assets/styles/Hello.css");
// import helloStyle from "../assets/styles/Hello.css";

export interface HelloProps {
  compiler: string;
  framework: string;
}

export const Hello = (props: HelloProps) => (
  <div>
    <h1>
      <span>
        <img src={logo} width="40px" height="40px" alt="Logo" />
      </span>
      <span className="helloMessage">
        Hello from {props.compiler} and {props.framework}!
      </span>
    </h1>
  </div>
);
