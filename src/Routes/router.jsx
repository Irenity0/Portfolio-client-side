import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../Layouts/RootLayout";
import HomePage from "../Pages/HomePage";
import Details from "../Components/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "projects/:id",
                element: <Details/>
            }
        ]
    }
]);

export default router;