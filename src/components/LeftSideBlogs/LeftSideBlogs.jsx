
import { useState } from 'react';
import BlogCard from './BlogCard';
import useAllBlogs from '../Hooks/useallBlogs';



const LeftSideBlogs = () => {
  const { allBlogs } = useAllBlogs()
  // console.log(allBlogs)
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3 // Number of posts to display per page
  const totalPages = Math.ceil(allBlogs.length / postsPerPage); // Total number of pages
  // console.log('total page number', totalPages)


  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allBlogs.slice(indexOfFirstPost, indexOfLastPost);
  // console.log("current page", currentPage)

  const goToPage = (page) => {
    setCurrentPage(page);
  };


  return (
    <div className="w-full lg:max-w-3xl">
      {/* Blog Posts */}
      {currentPosts.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}

      {/* Pagination Controls */}
      <div className="flex justify-center items-center space-x-2 mt-6">
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

export default LeftSideBlogs;
