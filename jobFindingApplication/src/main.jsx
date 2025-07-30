import React from 'react';
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
  </React.StrictMode>
);
