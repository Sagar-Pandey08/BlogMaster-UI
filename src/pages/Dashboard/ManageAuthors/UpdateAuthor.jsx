import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateAuthor = () => {
    const axiosSecure = useAxiosSecure()
    const author = useLoaderData()
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value || author.name;
        const bio = form.bio.value || author.bio;
        const twitter = form.twitter.value || author.twitter;
        const linkedin = form.linkedin.value || author.linkedin;
        const github = form.github.value || author.github;
        const image = form.img.files[0];

        try {
            let imageUrl = author.img // Default to existing image
            if (image) {
                const formData = new FormData()
                formData.append("image", image)

                const imageRes = await axios.post("https://api.imgbb.com/1/upload?key=425000ec487abe2b84d0bb7de5769c3a", formData);
                const imageData = await imageRes.json()
                if (imageData.success) {
                    imageUrl = imageData.data.url
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error Uploading Image',
                        text: 'Please try again later.',
                        confirmButtonText: 'Okay',
                    })
                    return
                }
            }

            const updateAuthor = await axiosSecure.put(`/author/${author._id}`, {
                name,
                bio,
                twitter,
                linkedin,
                github,
                img: imageUrl,
            })
            if (updateAuthor.data.modifiedCount) {
                Swal.fire({
                    icon: 'success',
                    title: 'Author Updated Successfully',
                    confirmButtonText: 'Okay',
                })
                form.reset()
                navigate("/dashboard/manageAuthors")
            } else {
                Swal.fire({
                    title: 'No Changes Made!',
                    icon: 'info',
                    showConfirmButton: true,
                });
            }


        } catch(err){
            Swal.fire({
                icon: 'error',
                title: 'Error Updating Author',
                text: err.message,
                confirmButtonText: 'Okay',
            })
        }

    };

    return (
        <div className="max-w-2xl mx-auto p-8 bg-[#fff2db] shadow-lg rounded-lg mt-10 border border-gray-200">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Update Author</h2>
            <form onSubmit={handleSubmit} className="space-y-5">

                <input
                    type="text"
                    name="name"
                    defaultValue={author.name}
                    placeholder="Full Name"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                />
                <textarea
                    name="bio"
                    defaultValue={author.bio}
                    placeholder="Bio (e.g., Cloud Engineer | DevOps Enthusiast | Speaker)"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 h-24"
                ></textarea>
                <input
                    type="file"
                    name="img"
                    placeholder="Image URL"
                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        name="twitter"
                        defaultValue={author.twitter}
                        placeholder="Twitter Profile URL"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="text"
                        name="linkedin"
                        defaultValue={author.linkedin}
                        placeholder="LinkedIn Profile URL"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="text"
                        name="github"
                        defaultValue={author.github}
                        placeholder="GitHub Profile URL"
                        className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-[#a37ee6] text-white  py-3 rounded-lg hover:bg-purple-400 transition font-semibold"
                >
                    Update Author
                </button>
            </form>
        </div>
    );
};

export default UpdateAuthor;
