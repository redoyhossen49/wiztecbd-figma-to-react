import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainLayout from "./components/Layout/MainLayout";
import LoginPage from "./Pages/LoginPage";

import Home from "./Pages/Home";
import Sell from "./Pages/Sell";
import Agents from "./Pages/Agents";
import Blog from "./Pages/Blog";
import ContactUs from "./Pages/ContactUs";
import Rent from "./Pages/Rent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/buy",
        element: <Home></Home>,
      },
      {
        path: "sell",
        element: <Sell></Sell>,
      },
      {
        path: "agents",
        element: <Agents></Agents>,
      },
      {
        path: "blogs",
        element: <Blog></Blog>,
      },
      {
        path: "contact",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "rent",
        element: <Rent></Rent>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
