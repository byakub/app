import { ConnectedRouter } from "connected-react-router";
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import { App } from "containers";

import reportWebVitals from "./reportWebVitals";
import store, { history } from "store";

render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
