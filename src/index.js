import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

import App from "./App";

// Ecmascript vs Javascript vs Node
// Ecmascript:  Syntax standard : ES5 ES6 ES7..
// Javascript: Ecmascript + WebAPI(DOM, fetch ...)
// Node: Ecmascript + NodeAPI(require, fs, crypto, http)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
