import React from 'react'
import useAllUsers from '../../../components/Hooks/useAllUsers'
import { Link } from 'react-router-dom'

const AllUsers = () => {
    const { users } = useAllUsers()

    return (
        <div className="overflow-x-auto p-4">
            <h1 className="text-2xl font-extrabold text-gray-800 mb-4 text-center">
                Manage All users
            </h1>

            <table className="w-full border border-gray-300 shadow-md rounded-lg overflow-hidden">
                {/* Table Head */}
                <thead className="bg-[#FFF2DB] ">
                    <tr className="text-left">
                        <th className="px-4 py-3">#</th>
                        <th className="px-4 py-3">Name</th>
                        <th className="px-4 py-3">Email</th>
                        <th className="px-4 py-3">Make </th>
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
                                <Link to={`/makeAdmin/${user._id}`} className="bg-[#2DAA9E] text-black px-4 py-1 rounded-md text-sm hover:bg-[#80CBC4] transition">
                                    Make Admin
                                </Link>
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