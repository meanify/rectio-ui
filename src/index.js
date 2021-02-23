import React from "react";

import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "antd/dist/antd.css";
import DataWorkloadsStore from "./store/DataWorkloadsStore";
import { Provider } from "mobx-react";

import { BrowserRouter } from "react-router-dom";

const Stores = {
  DataWorkloadsStore
}

ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider Stores={Stores} DataWorkloads={Stores.DataWorkloadsStore}>
        <App />
      </Provider>
    </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById("root")
);
