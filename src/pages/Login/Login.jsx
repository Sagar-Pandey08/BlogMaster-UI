import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement form validation and submission logic
        console.log('Form submitted');
    };

    return (
        <div className="min-h-screen flex items-center justify-center lg:mt-0 mt-10">
            <div className="bg-white p-8 rounded shadow-2xl w-full max-w-2xl">
                <h2 className="text-2xl font-extrabold mb-6 text-center">Welcome back in SyntaxStory.</h2>
                <div className="mt-6 flex flex-col space-y-4">
                    <button className="flex items-center justify-center text-black font-bold py-2 px-4  rounded-3xl border-2 hover:bg-base-200 ">
                        <FcGoogle className="mr-2 text-2xl" /> Sign in with Google
                    </button>
                    <button className="flex items-center justify-center  text-black font-bold py-2 px-4 rounded-3xl border-2 hover:bg-base-200">
                        <FaFacebook className="mr-2 text-blue-500 text-2xl" /> Sign in with Facebook
                    </button>
                </div>
                <div className='divider'>or</div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            name="email"
                            placeholder="Email"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Password"
                        />
                    </div>

                    <div className="flex items-center justify-center">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-2 px-4  focus:outline-none focus:shadow-outline rounded-2xl"
                            type="submit"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
                <div className='mt-6 text-center font-semibold'>
                    No account? <Link to="/register" className='text-blue-500'>Create one</Link>
                </div>

            </div>
        </div>
    );
};

export default Login;
