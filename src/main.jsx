import React from "react";
import Navbar from "./layout/Navbar";
import Intro from "./features/Intro";
import Work from "./features/Work";
import About from "./features/About";
import Footer from "./layout/Footer";
/*import ReactDOM from "react-dom/client";

import router from "./router.jsx";
import { RouterProvider } from "react-router-dom";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);*/

export default function Main() {
  return (
    <>
      <Navbar />
      <Intro />
      <Work />
      <About />
      <Footer />
    </>
  );
}
