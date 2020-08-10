import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";

import "./index.css";
import App from "./App";

// The <Provider> takes the store object and PROVIDES it to all child components (the whole app)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
