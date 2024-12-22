import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import LoadingBar from "../compoonents/LoadingBar/LoadingBar";

// eslint-disable-next-line react/prop-types
const PrivetRoute = ({ children }) => {
    const { user, authLoading } = useContext(AuthContext)
    const location = useLocation()
    if (authLoading === true) {
        return <LoadingBar></LoadingBar>
    }
    if (user) {
        return children;
    }
    return <Navigate to={'/login'} state={location} replace ></Navigate>
};

export default PrivetRoute;