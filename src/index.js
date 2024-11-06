import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { BasicProvider } from "./store/basic";

config.autoAddCss = false;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BasicProvider>
    <React.StrictMode>
      <App />
      <ToastContainer />
    </React.StrictMode>
  </BasicProvider>
);
