
import { useState } from 'react';
import BlogCard from './BlogCard';

const allBlogs = [
  {
    id: 1,
    title: "The Future of AI in Blogging",
    description: "Explore how artificial intelligence is revolutionizing content creation and enhancing user experience.",
    image: "https://i.ibb.co.com/L06xgX8/writer.jpg",
    author: "John Doe",
    category: "Technology",
    comments: 24,
    views: 100,
    likes: 50,
    time: "10 minutes ago"
  },
  {
    id: 2,
    title: "10 Tips for Writing Engaging Content",
    description: "Discover proven strategies to captivate your readers and keep them coming back for more.",
    image: "https://i.ibb.co.com/L909ycM/remote.jpg",
    author: "Jane Smith",
    category: "Writing",
    comments: 18,
    views: 85,
    likes: 40,
    time: "30 minutes ago"
  },
  {
    id: 3,
    title: "How to Grow Your Blog Audience",
    description: "Learn effective techniques to expand your reach and build a loyal readership.",
    image: "https://i.ibb.co.com/604gSjQf/bg.jpg",
    author: "Emily Johnson",
    category: "Marketing",
    comments: 35,
    views: 200,
    likes: 75,
    time: "1 hour ago"
  },
  {
    id: 4,
    title: "The Future of AI in Blogging",
    description: "Explore how artificial intelligence is revolutionizing content creation and enhancing user experience.",
    image: "https://i.ibb.co.com/L06xgX8/writer.jpg",
    author: "John Doe",
    category: "Technology",
    comments: 24,
    views: 100,
    likes: 50,
    time: "10 minutes ago"
  },
  {
    id: 5,
    title: "How to Grow Your Blog Audience",
    description: "Learn effective techniques to expand your reach and build a loyal readership.",
    image: "https://i.ibb.co.com/604gSjQf/bg.jpg",
    author: "Emily Johnson",
    category: "Marketing",
    comments: 35,
    views: 200,
    likes: 75,
    time: "1 hour ago"
  },
  {
    id: 6,
    title: "10 Tips for Writing Engaging Content",
    description: "Discover proven strategies to captivate your readers and keep them coming back for more.",
    image: "https://i.ibb.co.com/L909ycM/remote.jpg",
    author: "Jane Smith",
    category: "Writing",
    comments: 18,
    views: 85,
    likes: 40,
    time: "30 minutes ago"
  },
];

const LeftSideBlogs = () => {
  // console.log(blog)
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 3 // Number of posts to display per page
  const totalPages = Math.ceil(allBlogs.length / postsPerPage); // Total number of pages
  console.log('total page number', totalPages)


  // Pagination Logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allBlogs.slice(indexOfFirstPost, indexOfLastPost);
  console.log("current page", currentPage)

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
