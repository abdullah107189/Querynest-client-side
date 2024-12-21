import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Authenticaion/Login/Login";
import Register from "../pages/Authenticaion/Register/Register";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/queries',
                element: <Home></Home>
            },
            {
                path: '/add-queries',
                element: <Home></Home>
            },
            {
                path: '/recommend-for-me',
                element: <Home></Home>
            },
            {
                path: '/my-queries',
                element: <Home></Home>
            },
            {
                path: '/my-recommend',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/reg',
                element: <Register></Register>
            }

        ]
    },
]);
export default Router;