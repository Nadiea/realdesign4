import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Gallery from "./component/Gallery";
import AnimCursor from "./component/AnimCursor";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>
  },
  {
    path:"/gallery",
    element:<Gallery/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 
  <React.StrictMode>
   <AnimCursor />
    <RouterProvider router={router} />

  </React.StrictMode>

);