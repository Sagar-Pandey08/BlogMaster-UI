import React from 'react';
import useManageBlog from '../../../components/Hooks/useManageBlog';
import useAxiosPublic from '../../../components/Hooks/AxiosPublic/useaxiosPublic';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const ManageBlogs = () => {
    const { refetch, blogs } = useManageBlog();
    const axiosPubic = useAxiosPublic()

    const handleRemove = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPubic.delete(`/blogs/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch()
                        }
                    })

            }
        });
    }


   
    return (
        <div className="overflow-x-auto p-4">
            <h1 className="text-2xl font-extrabold text-gray-800 mb-4 text-center">
                Manage Blogs
            </h1>

            <table className="w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
                {/* Table Head */}
                <thead className="bg-[#FFF2DB] ">
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
                            className={`border-b ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                } hover:bg-gray-200 transition`}
                        >
                            <td className="px-4 py-3 font-medium text-gray-800">
                                {blog.author_name}
                            </td>
                            <td className="px-4 py-3 text-gray-700">{blog.email}</td>
                            <td className="px-4 py-3 text-gray-700">{blog.title}</td>
                            <td className="px-4 py-3">
                                <Link to={`/updateBlog/${blog._id}`} className="bg-[#2DAA9E] text-black px-4 py-1 rounded-md text-sm hover:bg-[#80CBC4] transition">
                                    Edit
                                </Link>
                            </td>
                            <td className="px-4 py-3">
                                <button onClick={() => handleRemove(blog._id)} className="bg-red-500 text-white px-4 py-1 rounded-md text-sm hover:bg-red-600 transition">
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
