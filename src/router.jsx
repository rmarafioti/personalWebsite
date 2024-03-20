import { createBrowserRouter } from "react-router-dom";
import Root from "./layout/Root";
import Home from "./layout/Home";
import Work from "./layout/Work";
import About from "./layout/About";
import Project1 from "./layout/Project1";
import Project2 from "./layout/Project2";
import Project3 from "./layout/Project3";

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
        path: "/work/project1",
        element: <Project1 />,
      },
      {
        path: "/work/project2",
        element: <Project2 />,
      },
      {
        path: "/work/project3",
        element: <Project3 />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

export default router;
