import { NavLink } from "react-router-dom";
import logo from '../../assets/queryNest_logo.png'
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext)
    const handlLogout = () => {
        logoutUser()
            .then(() => {
                axios.post('https://query-nest-server-side.vercel.app/jwt-logout', user, { withCredentials: true })
                    .then(() => {
                    })
                toast.success('Log out successfully done !')
            })
            .catch(err => {
                toast.err(err.message)
            })
    }

    return (
        <div className=" sticky top-0 backdrop-blur-lg bg-white/20 z-50">
            <div className="navbar">
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
                        {
                            user ? <ul
                                tabIndex={0}
                                className="z-30 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-3 ">
                                <NavLink to="/" className={({ isActive }) => `${isActive ? "bg-blue-500 text-white" : "bg-white"}   text-black hover:bg-blue-500 font-semibold border border-blue-500 hover:text-white py-2 px-5 rounded-md`}>Home</NavLink>
                                <NavLink to="/queries" className={({ isActive }) => `${isActive ? "bg-blue-500 text-white" : "bg-white"}   text-black hover:bg-blue-500 font-semibold border border-blue-500 hover:text-white py-2 px-5 rounded-md`}>Queries</NavLink>
                                <NavLink to="/recommend-for-me" className={({ isActive }) => `${isActive ? "bg-blue-500 text-white" : "bg-white"}   text-black hover:bg-blue-500 font-semibold border border-blue-500 hover:text-white py-2 px-5 rounded-md`}>Recommendations For Me</NavLink>
                                <NavLink to="/my-queries" className={({ isActive }) => `${isActive ? "bg-blue-500 text-white" : "bg-white"}   text-black hover:bg-blue-500 font-semibold border border-blue-500 hover:text-white py-2 px-5 rounded-md`}>My Queries</NavLink>
                                <NavLink to="/my-recommend" className={({ isActive }) => `${isActive ? "bg-blue-500 text-white" : "bg-white"}   text-black hover:bg-blue-500 font-semibold border border-blue-500 hover:text-white py-2 px-5 rounded-md`}>My Recommendations</NavLink>
                            </ul>
                                :
                                <ul
                                    tabIndex={0}
                                    className="z-30 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-3 ">
                                    <NavLink to="/" className={({ isActive }) => `${isActive ? "bg-blue-500 text-white" : "bg-white"}   text-black hover:bg-blue-500 font-semibold border border-blue-500 hover:text-white py-2 px-5 rounded-md`}>Home</NavLink>
                                    <NavLink to="/queries" className={({ isActive }) => `${isActive ? "bg-blue-500 text-white" : "bg-white"}   text-black hover:bg-blue-500 font-semibold border border-blue-500 hover:text-white py-2 px-5 rounded-md`}>Queries</NavLink>
                                </ul>
                        }
                    </div>
                    <a href="/">
                        <img className="w-16 h-16 object-contain" src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    {
                        user ?
                            <ul className="menu menu-horizontal px-1 gap-3">
                                <NavLink to="/" className={({ isActive }) => `${isActive ? "bg-blue-500 text-white" : "bg-white"}   text-black hover:bg-blue-500 font-semibold border border-blue-500 hover:text-white py-2 px-5 rounded-md`}>Home</NavLink>
                                <NavLink to="/queries" className={({ isActive }) => `${isActive ? "bg-blue-500 text-white" : "bg-white"}   text-black hover:bg-blue-500 font-semibold border border-blue-500 hover:text-white py-2 px-5 rounded-md`}>Queries</NavLink>
                                <NavLink to="/recommend-for-me" className={({ isActive }) => `${isActive ? "bg-blue-500 text-white" : "bg-white"}   text-black hover:bg-blue-500 font-semibold border border-blue-500 hover:text-white py-2 px-5 rounded-md`}>Recommendations For Me</NavLink>
                                <NavLink to="/my-queries" className={({ isActive }) => `${isActive ? "bg-blue-500 text-white" : "bg-white"}   text-black hover:bg-blue-500 font-semibold border border-blue-500 hover:text-white py-2 px-5 rounded-md`}>My Queries</NavLink>
                                <NavLink to="/my-recommend" className={({ isActive }) => `${isActive ? "bg-blue-500 text-white" : "bg-white"}   text-black hover:bg-blue-500 font-semibold border border-blue-500 hover:text-white py-2 px-5 rounded-md`}>My Recommendations</NavLink>
                            </ul>
                            :
                            <ul className="menu menu-horizontal px-1 gap-3">
                                <NavLink to="/" className={({ isActive }) => `${isActive ? "bg-blue-500 text-white" : "bg-white"}   text-black hover:bg-blue-500 font-semibold border border-blue-500 hover:text-white py-2 px-5 rounded-md`}>Home</NavLink>
                                <NavLink to="/queries" className={({ isActive }) => `${isActive ? "bg-blue-500 text-white" : "bg-white"}   text-black hover:bg-blue-500 font-semibold border border-blue-500 hover:text-white py-2 px-5 rounded-md`}>Queries</NavLink>
                            </ul>
                    }
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex gap-2 items-center">
                                <img referrerPolicy="no-referrer" className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
                                <button onClick={handlLogout} className="text-black hover:bg-blue-500 font-semibold border border-blue-500 hover:text-white py-2 px-5 rounded-md">Log-out</button>
                            </div>
                            :
                            <NavLink to="/login" className={({ isActive }) => `${isActive ? "bg-blue-500 text-white" : "bg-white"}   text-black hover:bg-blue-500 font-semibold border border-blue-500 hover:text-white py-2 px-5 rounded-md`}>Login</NavLink>

                    }
                </div>
            </div>
        </div >
    );
};

export default Navbar;