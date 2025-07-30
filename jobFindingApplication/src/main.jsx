import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Routes/Router";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import Toaster from "react-hot-toast";
createRoot(document.getElementById("root")).render(
  
    <Provider store={store}>
      <RouterProvider router={Router}><Toaster position="top-center" reverseOrder={false}></Toaster></RouterProvider>
    </Provider>
  
);
