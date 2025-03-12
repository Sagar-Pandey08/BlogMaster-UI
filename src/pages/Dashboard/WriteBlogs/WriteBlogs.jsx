import React, { useState } from 'react';
import useAxiosPublic from '../../../components/Hooks/AxiosPublic/useaxiosPublic';
import axios from 'axios';
import Swal from 'sweetalert2';

const WriteBlogs = () => {
  const axiosPublic = useAxiosPublic();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const details = form.details.value;
    const category = form.category.value;
    const author = form.author.value;
    const email = form.email.value;
    const dateTime = form.dateTime.value;
    const image = form.image.files[0];

    const formData = new FormData();
    formData.append('image', image);

    // Send image to imagebb and get URL, then store in the database
    axios.post("https://api.imgbb.com/1/upload?key=425000ec487abe2b84d0bb7de5769c3a", formData)
      .then((res) => {
        const imageUrl = res.data.data.url;
        return axiosPublic.post('/blogs', {
          title,
          short_description: description,
          blog_details: details,
          category,
          author_name: author,
          email,
          date_time: dateTime,
          image: imageUrl,
          likes: 0
        });
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: 'Blog Posted Successfully!',
            icon: 'success',
            showConfirmButton: false,
            timer: 1500
          });
          form.reset();
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className='max-w-4xl w-full mx-auto bg-[#FFF2DB] p-6 md:p-10 shadow-xl rounded-lg mt-10'>
      <h2 className='text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center'>Write a Blog</h2>
      <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <input name='title' type='text' placeholder='Blog Title' className='p-3 border rounded-lg focus:ring-2 focus:ring-[#CB9DF0] w-full' required />
        <input name='category' type='text' placeholder='Category' className='p-3 border rounded-lg focus:ring-2 focus:ring-[#CB9DF0] w-full' required />
        <input name='author' type='text' placeholder='Writer Name' className='p-3 border rounded-lg focus:ring-2 focus:ring-[#CB9DF0] w-full' required />
        <input name='email' type='email' placeholder='Writer Email' className='p-3 border rounded-lg focus:ring-2 focus:ring-[#CB9DF0] w-full' required />
        <input name='dateTime' type='datetime-local' className='p-3 border rounded-lg focus:ring-2 focus:ring-[#CB9DF0] w-full' required />
        <input name='image' type='file' className='p-3 border rounded-lg focus:ring-2 focus:ring-[#CB9DF0] w-full' required />
        <textarea name='description' placeholder='Short Description' className='col-span-1 md:col-span-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#CB9DF0] w-full' required />
        <textarea name='details' placeholder='Blog Details' className='col-span-1 md:col-span-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#CB9DF0] w-full' required />
        <button type='submit' className='col-span-1 md:col-span-2 w-full bg-[#B7B1F2] font-bold py-3 rounded-lg hover:bg-[#CB9DF0] transition duration-300 hover:scale-105'>
          Post Blog
        </button>
      </form>
    </div>
  );
};

export default WriteBlogs;