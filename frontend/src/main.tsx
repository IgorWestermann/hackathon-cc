import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import App from "./App";
import "./index.css";
import Home from "./pages/homePage";
import ProdIndividual from "./pages/prodIndividual";
import ProdTime from "./pages/prodTime";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/prod-individual",
    element: <ProdIndividual />,
  },
  {
    path: "/prod-time",
    element: <ProdTime />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
