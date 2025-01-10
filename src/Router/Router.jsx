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
import Page404 from "../compoonents/Page404/Page404";
import AllQueries from "../pages/AllQueries/AllQueries";
import UpdateQuery from "../pages/UpdateQuery/UpdateQuery";
const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        // errorElement: <Page404></Page404>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/queries',
                element: <AllQueries></AllQueries>
            },
            {
                path: '/add-queries',
                element: <PrivetRoute><AddQueries></AddQueries></PrivetRoute>
            },
            {
                path: '/querie-details/:id',
                element: <QueriesDetails></QueriesDetails>,
            },
            {
                path: '/update-query/:id',
                element: <PrivetRoute><UpdateQuery></UpdateQuery></PrivetRoute>,
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
                element: <PrivetRoute><RecommendationForMe></RecommendationForMe></PrivetRoute>
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
    {
        path: '*',
        element: <Page404></Page404>
    }
]);
export default Router;