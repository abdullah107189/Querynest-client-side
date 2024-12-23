import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Login from "../pages/Authenticaion/Login/Login";
import Register from "../pages/Authenticaion/Register/Register";
import AddQueries from "../pages/AddQueries/AddQueries";
import MyQueries from "../pages/MyQueries/MyQueries";
import QueriesDetails from "../pages/QueriesDetails/QueriesDetails";
import PrivetRoute from "../route/PrivetRoute";
import MyRecommendation from "../pages/MyRecommendation/MyRecommendation";
import RecommendationForMe from "../pages/RecommendationForMe/RecommendationForMe";
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
                element: <PrivetRoute><AddQueries></AddQueries></PrivetRoute>
            },
            {
                path: '/querie-details/:id',
                element: <PrivetRoute><QueriesDetails></QueriesDetails></PrivetRoute>,
            },
            {
                path: '/my-queries',
                element: <PrivetRoute><MyQueries></MyQueries></PrivetRoute>
            },
            {
                path: '/my-recommend',
                element: <PrivetRoute><MyRecommendation></MyRecommendation></PrivetRoute>
            },
            {
                path: '/recommend-for-me',
                element: <RecommendationForMe></RecommendationForMe>
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