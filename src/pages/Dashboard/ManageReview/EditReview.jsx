import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
import useAxiosPublic from '../../../components/Hooks/AxiosPublic/useaxiosPublic'
import Swal from 'sweetalert2'

const EditReview = () => {
    const reviews = useLoaderData()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const handleEdit = (e) => {
        e.preventDefault()
        // update the review in the database
        const name = e.target.name.value
        const designation = e.target.designation.value
        const review = e.target.message.value

        axiosPublic.put(`/review/${reviews._id}`, { name, designation, review })
            .then((res) => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: 'Feedback Updated Successfully!',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                    e.target.reset()
                    navigate("/dashboard/manageReview")
                }
            })
            .catch((err) => {
                console.error(err)
                Swal.fire({
                    title: 'Error Updating Feedback',
                    text: err.message,
                    icon: 'error',
                    confirmButtonText: 'Close'
                })
            })
    }



    return (
        <div className="max-w-lg mx-auto bg-[#FFF2DB] p-8 shadow-xl rounded-xl mt-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Edit Feedback</h2>
            <form onSubmit={handleEdit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                        name="name"
                        type="text"
                        placeholder="First Name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2DAA9E] outline-none"
                        required
                    />
                    <input
                        name="designation"
                        type="text"
                        placeholder="Designation"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2DAA9E] outline-none"
                        required
                    />
                </div>

                <textarea
                    name="message"
                    placeholder="Your Feedback"
                    className="w-full p-3 border border-gray-300 rounded-lg resize-none h-32 focus:ring-2 focus:ring-[#2DAA9E] outline-none"
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-[#2DAA9E] text-black font-semibold py-3 rounded-lg hover:bg-[#66D2CE] transition duration-300">
                    Edit Feedback
                </button>
            </form>
        </div>

    )
}

export default EditReview