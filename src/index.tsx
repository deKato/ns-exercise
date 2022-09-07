import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import sortStore from "./store/redux";

const root = createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={sortStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
