import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./layout/Home";
import Work from "./layout/Work";
import About from "./layout/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/work",
        element: <Work />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
