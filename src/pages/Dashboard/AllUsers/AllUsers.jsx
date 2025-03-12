import React from 'react'
import useAllUsers from '../../../components/Hooks/useAllUsers'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'
import useAxiosSecure from '../../../components/Hooks/useAxiosSecure'

const AllUsers = () => {
    const { refetch, users } = useAllUsers()
    const axiosSecure = useAxiosSecure()
    console.log(users)

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
                axiosSecure.delete(`/users/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: 'User deleted successfully!',
                                icon: 'success',
                                confirmButtonText: 'Okay'
                            });
                            refetch()
                        }
                    })

            }
        })
            .catch((err) => {
                console.log(err.message)
            })
    }

    const handleMakeAdmin = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to make this user admin!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, make admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.put(`/users/makeAdmin/${id}`)
                    .then((res) => {
                        if (res.data.modifiedCount) {
                            Swal.fire({
                                title: 'User made admin successfully!',
                                icon: 'success',
                                confirmButtonText: 'Okay'
                            });
                            refetch()
                        }
                    })

            }
        })
            .catch((err) => {
                console.log(err.message)
            })
    }




    return (
        <div className="overflow-x-auto p-4">
            <h1 className="text-2xl font-extrabold text-gray-800 mb-4 text-center">
                Manage All Users
            </h1>

            <table className="w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
                {/* Table Head */}
                <thead className="bg-[#FFF2DB] ">
                    <tr className="text-left">
                        <th className="px-4 py-3">#</th>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3">Make Admin</th>
                        <th className="px-4 py-3">Delete</th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody>
                    {users.map((user, index) => (
                        <tr
                            key={user.id}
                            className={`border-b ${index % 2 === 0 ? "bg-gray-100" : "bg-white"
                                } hover:bg-gray-200 transition`}
                        >
                            <td className="px-4 py-3 text-gray-700">{index + 1}.</td>
                            <td className="px-4 py-3 font-medium text-gray-800">
                                {user.name}
                            </td>
                            <td className="px-4 py-3 text-gray-700">{user.email}</td>
                            <td className="px-4 py-3">
                                {user?.role === "admin" ? (
                                    <button className="bg-green-500 text-black px-4 py-1 rounded-md text-sm hover:bg-green-600 transition">
                                        Admin
                                    </button>
                                ) : (
                                    <button onClick={() => handleMakeAdmin(user._id)} className="bg-blue-500 text-white px-4 py-1 rounded-md text-sm hover:bg-blue-600 transition">
                                        Make Admin
                                    </button>
                                )}
                            </td>
                            <td className="px-4 py-3">
                                <button onClick={() => handleRemove(user._id)} className="bg-red-500 text-white px-4 py-1 rounded-md text-sm hover:bg-red-600 transition">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllUsers