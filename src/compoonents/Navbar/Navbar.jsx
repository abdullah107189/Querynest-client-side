import { NavLink } from "react-router-dom";
import logo from '../../assets/queryNest_logo.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const handlLogout = () => {
        logoutUser()
            .then(() => {
                toast.success('Log out successfully done !')
            })
            .catch(err => {
                toast.err(err.message)
            })
    }
    return (
        <div className="">
            <div className="navbar bg-base-100  p-0">
                <div className="navbar-start z-30 ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="z-30 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-3 ">
                            <NavLink to="/" className={({ isActive }) => `${isActive ? "btn btn-accent" : "btn"} btn`}>Home</NavLink>
                            <NavLink to="/queries" className={({ isActive }) => `${isActive ? "btn btn-accent" : "btn"} btn`}>Queries</NavLink>
                            <NavLink to="/add-queries" className={({ isActive }) => `${isActive ? "btn btn-accent" : "btn"} btn`}>Add Queries</NavLink>
                            <NavLink to="/recommend-for-me" className={({ isActive }) => `${isActive ? "btn btn-accent" : "btn"} btn`}>Recommendations For Me</NavLink>
                            <NavLink to="/my-queries" className={({ isActive }) => `${isActive ? "btn btn-accent" : "btn"} btn`}>My Queries</NavLink>
                            <NavLink to="/my-recommend" className={({ isActive }) => `${isActive ? "btn btn-accent" : "btn"} btn`}>My Recommendations</NavLink>
                        </ul>
                    </div>
                    <a href="/">
                        <img className="w-16 h-16 object-contain" src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3">
                        <NavLink to="/" className={({ isActive }) => `${isActive ? "btn btn-accent" : "btn"} btn`}>Home</NavLink>
                        <NavLink to="/queries" className={({ isActive }) => `${isActive ? "btn btn-accent" : "btn"} btn`}>Queries</NavLink>
                        <NavLink to="/add-queries" className={({ isActive }) => `${isActive ? "btn btn-accent" : "btn"} btn`}>Add Queries</NavLink>
                        <NavLink to="/recommend-for-me" className={({ isActive }) => `${isActive ? "btn btn-accent" : "btn"} btn`}>Recommendations For Me</NavLink>
                        <NavLink to="/my-queries" className={({ isActive }) => `${isActive ? "btn btn-accent" : "btn"} btn`}>My Queries</NavLink>
                        <NavLink to="/my-recommend" className={({ isActive }) => `${isActive ? "btn btn-accent" : "btn"} btn`}>My Recommendations</NavLink>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <button onClick={handlLogout} className="btn">Log-out</button>
                            :
                            <NavLink to="/login" className={({ isActive }) => `${isActive ? "btn btn-accent" : "btn"} btn`}>Login</NavLink>

                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;