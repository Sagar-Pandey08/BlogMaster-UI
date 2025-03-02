import React from 'react';
import useManageBlog from '../../../components/Hooks/useManageBlog';

const ManageBlogs = () => {
    const { blogs } = useManageBlog();

    return (
        <div className="overflow-x-auto p-4">
            <h1 className="text-2xl font-extrabold text-gray-800 mb-4 text-center">
                Manage Blogs 
            </h1>

            <table className="w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
                {/* Table Head */}
                <thead className="bg-[#80CBC4] ">
                    <tr className="text-left">
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3">Title</th>
                        <th className="px-4 py-3">Edit</th>
                        <th className="px-4 py-3">Delete</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {blogs.map((blog, index) => (
                        <tr
                            key={blog.id}
                            className={`border-b ${
                                index % 2 === 0 ? "bg-gray-100" : "bg-white"
                            } hover:bg-gray-200 transition`}
                        >
                            <td className="px-4 py-3 font-medium text-gray-800">
                                {blog.author_name}
                            </td>
                            <td className="px-4 py-3 text-gray-700">{blog.email}</td>
                            <td className="px-4 py-3 text-gray-700">{blog.title}</td>
                            <td className="px-4 py-3">
                                <button className="bg-[#2DAA9E] text-black px-4 py-1 rounded-md text-sm hover:bg-[#80CBC4] transition">
                                    Edit
                                </button>
                            </td>
                            <td className="px-4 py-3">
                                <button className="bg-red-500 text-white px-4 py-1 rounded-md text-sm hover:bg-red-600 transition">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageBlogs;
