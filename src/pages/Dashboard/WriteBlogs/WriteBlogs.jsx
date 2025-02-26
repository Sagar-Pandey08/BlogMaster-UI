import React, { useState } from 'react';

const WriteBlogs = () => {



  return (
    <div className=' mx-auto bg-[#FFF2DB] p-8 shadow-lg rounded-lg mt-10'>
      <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>Write a Blog</h2>
      <form  className='space-y-4'>
        <input type='text' placeholder='Blog Title'  className='w-full p-2 border rounded-lg t transition duration-300 focus:scale-105 focus-visible:text-[#CB9DF0]'   required />
        <textarea placeholder='Short Description' className='w-full p-2 border rounded-lg t transition duration-300 focus:scale-105 focus-visible:text-[#CB9DF0]'  required />
        <textarea placeholder='Blog Details' className='w-full p-2 border rounded-lg t transition duration-300 focus:scale-105 focus-visible:text-[#CB9DF0]' required />
        <input type='text' placeholder='Category'  className='w-full p-2 border rounded-lg t transition duration-300 focus:scale-105 focus-visible:text-[#CB9DF0]'  required />
        <input type='text' placeholder='Writer Name'  className='w-full p-2 border rounded-lg t transition duration-300 focus:scale-105 focus-visible:text-[#CB9DF0]'  required />
        <input type='datetime-local'  className='w-full p-2 border rounded-lg t transition duration-300 focus:scale-105 focus-visible:text-[#CB9DF0]' required />
        <input type='file'  className='w-full p-2 border rounded-lg t transition duration-300 focus:scale-105 focus-visible:text-[#CB9DF0]'  required />
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
