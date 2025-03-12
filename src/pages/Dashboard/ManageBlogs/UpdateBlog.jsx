import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import useAxiosSecure from '../../../components/Hooks/useAxiosSecure';

const UpdateBlog = () => {
    const axiosSecure = useAxiosSecure();
    const blog = useLoaderData();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value || blog.title;
        const description = form.description.value || blog.short_description;
        const details = form.details.value || blog.blog_details;
        const category = form.category.value || blog.category;
        const author = form.author.value || blog.author_name;
        const email = form.email.value || blog.email;
        const dateTime = form.dateTime.value || blog.date_time;
        const imageFile = form.image.files[0];

        try {
            let imageUrl = blog.image; // Default to existing image

            if (imageFile) {
                const formData = new FormData();
                formData.append('image', imageFile);

                const imageRes = await axios.post("https://api.imgbb.com/1/upload?key=425000ec487abe2b84d0bb7de5769c3a", formData);

                const imageData = await imageRes.json();
                if (imageData.success) {
                    imageUrl = imageData.data.url;
                } else {
                    throw new Error("Image upload failed");
                }
            }

            const updateRes = await axiosSecure.put(`/blog/${blog._id}`, {
                title,
                short_description: description,
                blog_details: details,
                category,
                author_name: author,
                email,
                date_time: dateTime,
                image: imageUrl,
            });

            if (updateRes.data.modifiedCount) {
                Swal.fire({
                    title: 'Blog Updated Successfully!',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500,
                });
                form.reset();
            } else {
                Swal.fire({
                    title: 'No Changes Made!',
                    icon: 'info',
                    showConfirmButton: true,
                });
            }
        } catch (err) {
            Swal.fire({
                title: 'Error!',
                text: err.message,
                icon: 'error',
                showConfirmButton: true,
            });
        }
    };

    return (
        <div className='max-w-4xl w-full mx-auto bg-[#FFF2DB] p-6 md:p-10 shadow-xl rounded-lg mt-28'>
            <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center'>Update Blog</h2>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <input defaultValue={blog.title} name='title' type='text' placeholder='Blog Title' className='p-3 border rounded-lg focus:ring-2 focus:ring-[#CB9DF0] w-full' />
                <input defaultValue={blog.category} name='category' type='text' placeholder='Category' className='p-3 border rounded-lg focus:ring-2 focus:ring-[#CB9DF0] w-full' />
                <input defaultValue={blog.author_name} name='author' type='text' placeholder='Writer Name' className='p-3 border rounded-lg focus:ring-2 focus:ring-[#CB9DF0] w-full' />
                <input defaultValue={blog.email} name='email' type='email' placeholder='Writer Email' className='p-3 border rounded-lg focus:ring-2 focus:ring-[#CB9DF0] w-full' />
                <input defaultValue={blog.date_time} name='dateTime' type='datetime-local' className='p-3 border rounded-lg focus:ring-2 focus:ring-[#CB9DF0] w-full' />
                <input name='image' type='file' className='p-3 border rounded-lg focus:ring-2 focus:ring-[#CB9DF0] w-full' />
                <textarea defaultValue={blog.short_description} name='description' placeholder='Short Description' className='col-span-1 md:col-span-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#CB9DF0] w-full' />
                <textarea defaultValue={blog.blog_details} name='details' placeholder='Blog Details' className='col-span-1 md:col-span-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#CB9DF0] w-full' />
                <button type='submit' className='col-span-1 md:col-span-2 w-full bg-[#B7B1F2] font-bold py-3 rounded-lg hover:bg-[#CB9DF0] transition duration-300 hover:scale-105'>
                    Update Blog
                </button>
            </form>
        </div>
    );
};

export default UpdateBlog;
