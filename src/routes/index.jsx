import { UserLayout } from "@/layouts";
import { NotFound } from "@/pages/error";
import { Counter, Home, Login } from "@/pages/public";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        errorElement: <NotFound />,
        children: [
            { path: "home", element: <Home /> },
            { path: "counter", element: <Counter /> },
        ],
    },
    { path: "login", element: <Login /> },
]);