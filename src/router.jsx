import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./layout/Home";
import About from "./layout/About";
import Work from "./layout/Work";

/**
 *
 * @component router indicates the paths of each child component file from the Root component
 *
 */

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
