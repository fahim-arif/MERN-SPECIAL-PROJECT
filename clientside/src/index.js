import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./bootstrap.min.css";
import App from "./App";
import AdminScreen from "./screens/AdminScreen";

ReactDOM.render(
  <Provider store={store}>
    <App />
    <AdminScreen></AdminScreen>
  </Provider>,
  document.getElementById("root")
);
