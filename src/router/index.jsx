import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../page/root";
import ErrorPage from "../error-page.jsx";
import DashBoard from "../page/dashboard/index.jsx"
import UserManage from "../page/dashboard/userManage.jsx";
import LoginPage from "../page/system/login.jsx";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element:<LoginPage/>
    },
    {
        path: "/dashboard",
        element: <DashBoard />,
        errorElement: <ErrorPage />,
        children:[
            {
                path:"userManage",
                element:<UserManage/>
            }
        ]
    },
]);

export default router