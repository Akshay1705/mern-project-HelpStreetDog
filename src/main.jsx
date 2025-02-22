// core react imports
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// custom components
import Home from "./pages/Home";
import { Browse } from "./components/Browse";
import Gallery from "./pages/Gallery";
import Aboutus from "./pages/Aboutus";
import Donate from "./pages/Donate";
import Volunteer from "./pages/Volunteer";

// styles CSS files
import "./index.css";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/aboutus",
    element: <Aboutus />,
  },
  {
    path: "/donate",
    element: <Donate />,
  },
  {
    path: "/volunteer",
    element: <Volunteer />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={appRouter}></RouterProvider>
  </StrictMode>
);
