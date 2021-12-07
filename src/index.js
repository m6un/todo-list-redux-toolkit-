import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Store from "./redux/Store";
// we import the store.js and also import provider. Provider is used to allocate which all components can access the store .
import { Provider } from "react-redux";
ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
