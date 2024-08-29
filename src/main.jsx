import "./css/index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import Challenge from "./Challenge.jsx";
import About from "./About.jsx";
import Solution from "./Solution.jsx";
import Preview from "./Preview.jsx";
import Problem from "./Problem.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/desafio",
    element: <Challenge />,
  },
  {
    path: "/sobre",
    element: <About />,
  },
  {
    path: "/solucao",
    element: <Solution />,
  },
  {
    path: "/preview",
    element: <Preview />,
  },
  { path: "/AddNewProblem", 
    element: <Problem /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
