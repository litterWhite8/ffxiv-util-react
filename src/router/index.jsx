import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../page/root";
import ErrorPage from "../error-page.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    }
]);

export default router