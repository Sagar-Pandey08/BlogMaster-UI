import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <div className="min-h-screen flex items-center justify-center  px-4 lg:mt-0 mt-10">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
                    Join <span className="text-blue-500">SyntaxStory</span>
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Username */}
                    <div>
                        <label className="block text-gray-700 font-medium">Username</label>
                        <input
                            type="text"
                            name="username"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your username"
                            autoComplete="username"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block text-gray-700 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                            autoComplete="off"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-gray-700 font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                            autoComplete="current-password"
                        />
                    </div>

                    {/* Profile Image */}
                    <div>
                        <label className="block text-gray-700 font-medium">Profile Image</label>
                        <input
                            type="file"
                            name="image"
                            accept="image/*"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Register
                    </button>
                </form>

                {/* Already Have an Account? */}
                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Sign in
                    </Link>
                </p>

                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-300" />
                    <span className="px-3 text-gray-500">OR</span>
                    <hr className="flex-grow border-gray-300" />
                </div>

                {/* Social Logins */}
                <div className="space-y-4">
                    <button className="flex items-center justify-center w-full py-2 border rounded-lg hover:bg-gray-100 transition">
                        <FcGoogle className="mr-2 text-2xl" />
                        Sign in with Google
                    </button>
                    <button className="flex items-center justify-center w-full py-2 border rounded-lg hover:bg-gray-100 transition">
                        <FaFacebook className="mr-2 text-blue-500 text-2xl" />
                        Sign in with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Register;
