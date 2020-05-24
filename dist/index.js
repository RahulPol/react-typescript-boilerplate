import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";
ReactDOM.render(React.createElement("div", null,
    React.createElement(Hello, { compiler: "TypeScript", framework: "React" })), document.getElementById("example"));
//# sourceMappingURL=index.js.map