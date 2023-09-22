import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Home from "./Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./Login/LoginPage";
import LiveBusTrack from "./LiveBusTrack/LiveBusTrack";
import SignUpPage from "./Login/SignUpPage";
import BusLIst from "./BusLIst/BusLIst";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/LiveBusTrack",
    element: <LiveBusTrack />,
  },
  {
    path: "/busList",
    element: <BusLIst />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

reportWebVitals();
