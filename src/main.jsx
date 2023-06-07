import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./index.css";
import Contact, { loader as contactLoader, } from "./routes/contact";
import Root, { loader as rootLoader, action as rootAction, } from "./routes/root";
import EditContact, { action as editAction, } from "./routes/edit";
import { Home } from "./home";
import { action as destroyAction } from "./routes/destroy";
import { Jobs } from "./jobs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        loader: rootLoader,
        action: rootAction,
        children: [
            {
                path: "contacts/:contactId",
                element: <Contact />,
                loader: contactLoader,
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
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/jobs",
                element: <Jobs />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
