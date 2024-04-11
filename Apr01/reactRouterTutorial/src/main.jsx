import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
// import Root from "./routes/root";
import ErrorPage from "./error-page";
// import Contact from "./routes/contacts.jsx";
import Root, {
  loader as rootLoader,
  action as rootAction,
} from "./routes/root";

import { action as destroyAction } from "./routes/destroy";

import EditContact, {
  action as editAction,
} from "./routes/edit";

import Contact, {
  loader as contactLoader,
  action as contactAction,
} from "./routes/contacts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
        loader: contactLoader,
        action: contactAction,
      },
      {
        path: "contacts/:contactId/edit",
        element: <EditContact />,
        loader: contactLoader,
        action: editAction,
      },
      {
        path: "contacts/:contactId/destroy",
        action: destroyAction,
      },
    ],

  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);