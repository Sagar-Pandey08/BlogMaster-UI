import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext)
    const navigate = useNavigate()
    const Links = <>
        <li><NavLink to="/" className="text-lg font-medium hover:text-blue-500 transition">Home</NavLink></li>
        <li><NavLink to="/about" className="text-lg font-medium hover:text-blue-500 transition">About us</NavLink></li>
        <li><NavLink to="/allBlogs" className="text-lg font-medium hover:text-blue-500 transition">All Blogs</NavLink></li>
        <li><NavLink to="/dashboard" className="text-lg font-medium hover:text-blue-500 transition">Dashboard</NavLink></li>
        <li><NavLink to="/contact" className="text-lg font-medium hover:text-blue-500 transition">Contact</NavLink></li>
    </>;


    const handleSignOut = () => {
        logOut()
        navigate("/")
    }

    return (
        <div className=" fixed z-10  navbar bg-gradient-to-r from-white to-base-300 text-[#000] py-4 shadow-lg">
            <div className="navbar-start flex items-center ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
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
                        className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
                        {Links}
                    </ul>
                </div>
                <Link to="/" className="text-2xl font-bold ml-4 tracking-wide">SyntaxStory</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-4 space-x-6">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end">
                {user? (
                    <div className="flex items-center space-x-2">
                        <button onClick={handleSignOut} to="/logout" className="btn btn-ghost">Logout</button>
                    </div>
                ) : (
                    <div className="flex items-center space-x-2">
                        <Link to="/login" className="btn btn-primary">Login</Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
