import React, { useState } from 'react';
import useAxiosPublic from '../../../components/Hooks/AxiosPublic/useaxiosPublic';
import axios from 'axios';
import Swal from 'sweetalert2';

const WriteBlogs = () => {
  const axiosPublic = useAxiosPublic()

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
    const image = form.image.files[0]

    const formData = new FormData();
    formData.append('image', image)



    //send image in imagebb and get url then send in database
    const response = axios.post("https://api.imgbb.com/1/upload?key=425000ec487abe2b84d0bb7de5769c3a", formData)
    // console.log(response)
    response.then((res) => {
      const imageUrl = res.data.data.url;
      axiosPublic.post('/blogs', {
        title: title,
        short_description: description,
        blog_details: details,
        category: category,
        author_name: author,
        email: email,
        date_time: dateTime,
        image: imageUrl,
        likes: 0
      })
        .then(res => {
          if (res.data.insertedId) {
            Swal.fire({
              title: 'Blog Posted Successfully!',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
        .catch(err => {
          alert(err.message)
        })
      form.reset();
    })
  };


  return (
    <div className=' mx-auto bg-[#FFF2DB] p-8 shadow-lg rounded-lg mt-10'>
      <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>Write a Blog</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <input name='title' type='text' placeholder='Blog Title' className='w-full p-2 border rounded-lg t transition duration-300 focus:scale-105 focus-visible:text-[#CB9DF0]' required />
        <textarea name='description' placeholder='Short Description' className='w-full p-2 border rounded-lg t transition duration-300 focus:scale-105 focus-visible:text-[#CB9DF0]' required />
        <textarea name='details' placeholder='Blog Details' className='w-full p-2 border rounded-lg t transition duration-300 focus:scale-105 focus-visible:text-[#CB9DF0]' required />
        <input name='category' type='text' placeholder='Category' className='w-full p-2 border rounded-lg t transition duration-300 focus:scale-105 focus-visible:text-[#CB9DF0]' required />
        <input name='author' type='text' placeholder='Writer Name' className='w-full p-2 border rounded-lg t transition duration-300 focus:scale-105 focus-visible:text-[#CB9DF0]' required />
        <input name='email' type='email' placeholder='Writer Email' className='w-full p-2 border rounded-lg t transition duration-300 focus:scale-105 focus-visible:text-[#CB9DF0]' required />
        <input name='dateTime' type='datetime-local' className='w-full p-2 border rounded-lg t transition duration-300 focus:scale-105 focus-visible:text-[#CB9DF0]' required />
        <input name='image' type='file' className='w-full p-2 border rounded-lg t transition duration-300 focus:scale-105 focus-visible:text-[#CB9DF0]' required />
        <button
          type='submit'
          className='w-full bg-[#B7B1F2] font-bold  py-2 rounded-lg hover:bg-[#CB9DF0] transition duration-300 hover:scale-105'
        >
          Post Blog
        </button>
      </form>
    </div>
  );
};

export default WriteBlogs;
