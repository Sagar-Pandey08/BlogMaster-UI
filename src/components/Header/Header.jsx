import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleSignOut = async () => {
        try {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You will be logged out!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Yes, Logout",
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
        <div className="fixed z-10 w-full navbar bg-gradient-to-r from-white to-gray-200 text-black py-4 shadow-lg">
            <div className="navbar-start flex items-center">
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
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-800 text-white rounded-box z-[1] mt-3 w-52 p-2 shadow-lg">
                        <li><NavLink to="/" className="text-lg font-medium hover:text-blue-500 transition">Home</NavLink></li>
                        <li><NavLink to="/about" className="text-lg font-medium hover:text-blue-500 transition">About Us</NavLink></li>
                        <li><NavLink to="/allBlogs" className="text-lg font-medium hover:text-blue-500 transition">All Blogs</NavLink></li>
                        <li><NavLink to="/contact" className="text-lg font-medium hover:text-blue-500 transition">Contact</NavLink></li>
                    </ul>
                </div>
                <Link to="/" className="text-2xl font-bold ml-4 tracking-wide">SyntaxStory</Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-4 space-x-6">
                    <li><NavLink to="/" className="text-lg font-medium hover:text-blue-500 transition">Home</NavLink></li>
                    <li><NavLink to="/about" className="text-lg font-medium hover:text-blue-500 transition">About Us</NavLink></li>
                    <li><NavLink to="/allBlogs" className="text-lg font-medium hover:text-blue-500 transition">All Blogs</NavLink></li>
                    <li><NavLink to="/contact" className="text-lg font-medium hover:text-blue-500 transition">Contact</NavLink></li>
                </ul>
            </div>

            <div className="navbar-end">
                {user ? (
                    <div className="relative">
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="flex items-center space-x-2 focus:outline-none"
                        >
                            <img
                                src={user.photoURL || "/default-avatar.png"}
                                alt="Profile"
                                className="w-10 h-10 rounded-full border border-gray-300 hover:shadow-lg"
                            />
                        </button>

                        {dropdownOpen && (
                            <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2">
                                <Link
                                    to="/Profile"
                                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                    onClick={() => setDropdownOpen(false)}
                                >
                                     Profile
                                </Link>
                               
                                <button
                                    onClick={handleSignOut}
                                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link
                        to="/login"
                        className="font-bold text-black px-4 py-2 rounded-md transition duration-300 hover:text-purple-500"
                    >
                        Sign in
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Header;
