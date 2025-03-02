import React from 'react';
import useMyBlogs from '../../../components/Hooks/useMyBlogs';

const MyBlog = () => {
  const { myBlogs } = useMyBlogs();

  return (
    <div className="container mx-auto p-6 md:p-10 lg:p-14 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900">My Articles</h1>
      {myBlogs && myBlogs.length > 0 ? (
        <div className="grid lg:grid-cols-3 gap-6">
          {myBlogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-3 hover:text-blue-600 transition">
                  {blog.title}
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  {new Date(blog.date_time).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
                <p className="text-gray-700 text-base leading-relaxed mb-4">
                  {blog.blog_details.slice(0, 150)}...
                </p>
                <button className="px-5 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500 text-center text-lg">No blogs found.</p>
      )}
    </div>
  );
};

export default MyBlog;
