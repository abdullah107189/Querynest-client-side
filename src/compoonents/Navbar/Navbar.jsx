import { NavLink } from "react-router-dom";
import logo from '../../assets/queryNest_logo.png'
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";

const Navbar = () => {
    // dark mode 
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])
    const handleTogoleMode = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'
        setTheme(newTheme)
    }

    const { user, logoutUser } = useContext(AuthContext)
    const handlLogout = () => {
        logoutUser()
            .then(() => {
                axios.post('https://b10a11-server-side-abdullah107189.vercel.app/jwt-logout', user, { withCredentials: true })
                    .then(() => {
                    })
                toast.success('Log out successfully done !')
            })
            .catch(err => {
                toast.err(err.message)
            })
    }


    return (
        <div className="mxw text-white bgP">
            <div className="navbar py-0">
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
                                <NavLink to="/" className={({ isActive }) => `${isActive ? 'activeActionBtn' : 'actionBtn'}   `}>Home</NavLink>
                                <NavLink to="/queries" className={({ isActive }) => `${isActive ? 'activeActionBtn' : 'actionBtn'}   `}>Queries</NavLink>
                                <NavLink to="/recommend-for-me" className={({ isActive }) => `${isActive ? 'activeActionBtn' : 'actionBtn'}   `}>Recommendations For Me</NavLink>
                                <NavLink to="/my-queries" className={({ isActive }) => `${isActive ? 'activeActionBtn' : 'actionBtn'}   `}>My Queries</NavLink>
                                <NavLink to="/my-recommend" className={({ isActive }) => `${isActive ? 'activeActionBtn' : 'actionBtn'}   `}>My Recommendations</NavLink>
                            </ul>
                                :
                                <ul
                                    tabIndex={0}
                                    className="z-30 menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow gap-3 ">
                                    <NavLink to="/" className={({ isActive }) => `${isActive ? 'activeActionBtn' : 'actionBtn'}   `}>Home</NavLink>
                                    <NavLink to="/queries" className={({ isActive }) => `${isActive ? 'activeActionBtn' : 'actionBtn'}   `}>Queries</NavLink>
                                </ul>
                        }
                    </div>
                    <a href="/">
                        <img className="w-14 h-14 object-contain dark:bg-gray-400 rounded-lg" src={logo} alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    {
                        user ?
                            <ul className="menu menu-horizontal px-1 gap-3">
                                <NavLink to="/" className={({ isActive }) => `${isActive ? 'activeActionBtn' : 'actionBtn'}   `}>Home</NavLink>
                                <NavLink to="/queries" className={({ isActive }) => `${isActive ? 'activeActionBtn' : 'actionBtn'}   `}>Queries</NavLink>
                                <NavLink to="/recommend-for-me" className={({ isActive }) => `${isActive ? 'activeActionBtn' : 'actionBtn'}   `}>Recommendations For Me</NavLink>
                                <NavLink to="/my-queries" className={({ isActive }) => `${isActive ? 'activeActionBtn' : 'actionBtn'}   `}>My Queries</NavLink>
                                <NavLink to="/my-recommend" className={({ isActive }) => `${isActive ? 'activeActionBtn' : 'actionBtn'}   `}>My Recommendations</NavLink>
                            </ul>
                            :
                            <ul className="menu menu-horizontal px-1 gap-3">
                                <NavLink to="/" className={({ isActive }) => `${isActive ? 'activeActionBtn' : 'actionBtn'}   `}>Home</NavLink>
                                <NavLink to="/queries" className={({ isActive }) => `${isActive ? 'activeActionBtn' : 'actionBtn'}   `}>Queries</NavLink>
                            </ul>
                    }
                </div>
                <div className="navbar-end gap-2">
                    <label className="md:grid cursor-pointer place-items-center hidden">
                        <input
                            type="checkbox"
                            checked={theme === 'dark'}
                            onClick={handleTogoleMode}
                            value="synthwave"
                            className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1" />
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5" />
                            <path
                                d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                        </svg>
                        <svg
                            className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    </label>
                    {
                        user ?
                            <div className="flex gap-2 items-center">
                                <img referrerPolicy="no-referrer" className="w-12 h-12 rounded-full" src={user?.photoURL} alt="" />
                                <button onClick={handlLogout} className="actionBtn">Log-out</button>
                            </div>
                            :
                            <div>
                                <NavLink to="/login" className={({ isActive }) => `${isActive ? 'activeActionBtn' : 'actionBtn'} mr-3   `}>Login</NavLink>
                                <NavLink to="/reg" className={({ isActive }) => `${isActive ? 'activeActionBtn' : 'actionBtn'}   `}>Register</NavLink>
                            </div>
                    }
                </div>
            </div>
        </div >
        // </div>
    );
};

export default Navbar;