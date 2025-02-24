import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const Links = <>
        <li><NavLink to="/" className="text-lg font-medium hover:text-blue-500 transition">Home</NavLink></li>
        <li><NavLink to="/about" className="text-lg font-medium hover:text-blue-500 transition">About us</NavLink></li>
        <li><NavLink to="/allBlogs" className="text-lg font-medium hover:text-blue-500 transition">All Blogs</NavLink></li>
        <li><NavLink to="/dashboard/writeBlogs" className="text-lg font-medium hover:text-blue-500 transition">Dashboard</NavLink></li>
        <li><NavLink to="/contact" className="text-lg font-medium hover:text-blue-500 transition">Contact</NavLink></li>
    </>;



    const handleSignOut = async () => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You will be logged out!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, Logout"
            });

            if (result.isConfirmed) {
                await logOut();
                Swal.fire("Logged Out!", "You have been signed out successfully.", "success");
                navigate("/");
            }
        } catch (error) {
            Swal.fire("Error!", error.message, "error");
        }
    };


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
                {user ? (
                    <div className="flex items-center space-x-3">
                        {/* User Profile Picture & Name */}
                        <div className="flex items-center space-x-2 ">
                            <img
                                src={user.photoURL || "/default-avatar.png"}
                                alt="Profile"
                                className="w-8 h-8 rounded-full border border-gray-300 hidden lg:block "
                            />
                            <span className="text-black font-medium hidden lg:block ">{user.displayName || "User"}</span>
                        </div>

                        {/* Logout Button */}
                        <button
                            onClick={handleSignOut}
                            className="btn bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition duration-300"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center space-x-2">
                        {/* Login Button */}
                        <Link to="/login" className="btn bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300">
                            Login
                        </Link>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Header;
