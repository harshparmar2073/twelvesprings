import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";

import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  useNavigate,
  ScrollRestoration,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import { ThemeProvider, CssBaseline } from "@mui/material";
import Layout from "./layout";
import { StoreContextProvider } from "./common/StoreContext";
import TermsConditions from "./TermsConditions";
import PrivacyPolicy from "./PrivacyPolicy";
import Landing from "./Landing";
import theme from "./theme";

function Root() {
  return (
    <Fragment>
      <ScrollRestoration />

      <ThemeProvider theme={theme}>
        <StoreContextProvider>
          <CssBaseline />
          <Outlet />
        </StoreContextProvider>
      </ThemeProvider>
    </Fragment>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/",
        Component: Layout,
        children: [
          { path: "/", Component: Dashboard },
          { path: "/home", Component: Dashboard },
          { path: "/landing", Component: Landing },
        ],
      },

      { path: "/terms-services", Component: TermsConditions },
      { path: "/privacy-policy", Component: PrivacyPolicy },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
