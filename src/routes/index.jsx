import { UserLayout } from "@/layouts";
import { NotFound } from "@/pages/error";
import { Home, Login } from "@/pages/public";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <UserLayout />,
        errorElement: <NotFound />,
        children: [
            { path: "", element: <Home /> },
        ],
    },
    { path: "login", element: <Login /> },
]);