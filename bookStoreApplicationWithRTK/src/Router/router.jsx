import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import AddBook from "../pages/AddBook";
import Home from "../pages/Home";
import EditBook from "../pages/EditBook";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/addBook", element: <AddBook /> },
      { path: "/editBook", element: <EditBook /> },
    ],

    future: {
      v7_startTransition: true, // ✅ Opt in early, removes warning
    },
  },
]);
