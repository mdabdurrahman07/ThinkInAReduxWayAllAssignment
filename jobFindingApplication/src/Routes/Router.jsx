import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Jobs from "../Pages/Jobs";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/addJobs",
        element: <Jobs />,
      },
    ],
  },
]);

export default Router;
