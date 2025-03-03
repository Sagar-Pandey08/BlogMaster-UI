import React, { useState } from 'react';
import useMyBlogs from '../../../components/Hooks/useMyBlogs';
import { Link } from 'react-router-dom';

const MyBlog = () => {
  const { myBlogs } = useMyBlogs();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3; // Number of posts to display per page
  const totalPages = Math.ceil(myBlogs.length / postsPerPage); // Total number of pages

  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = myBlogs.slice(indexOfFirstPost, indexOfLastPost);

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900">My Blogs</h1>
      {currentPosts.map((blog) => (
        <Link key={blog._id} to={`/blogs/${blog._id}`}>
          <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6 border border-gray-200 p-4 flex justify-between gap-4 transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer">
            <div>
              <p className="text-gray-500 text-lg"><span className='font-medium'>{blog.category}</span> by {blog.author_name}.</p>
              <h3 className="text-3xl font-bold text-gray-800 hover:text-blue-600 transition duration-200">{blog.title}</h3>
              <p className="text-gray-600 mt-2">{blog.short_description}</p>
            </div>
            <img className="h-28 w-36 lg:w-40 lg:h-40 object-cover rounded-xl justify-center items-center" src={blog.image} alt={blog.title} />
          </div>
        </Link>
      ))}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center space-x-2 mt-10">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index + 1)}
            className={`px-4 py-2 rounded-lg ${currentPage === index + 1
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-600 hover:bg-gray-300"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 text-gray-600 rounded-lg hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyBlog;
