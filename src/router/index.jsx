import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../page/root";
import ErrorPage from "../error-page.jsx";
import DashBoard from "../page/dashboard/index.jsx"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/dashboard",
        element: <DashBoard />,
        errorElement: <ErrorPage />,
    }
]);

export default router