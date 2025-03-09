import useLatestBlogs from "../Hooks/useLatestBlogs";



const LatestPost = () => {
  const {latestBlogs} = useLatestBlogs()
  return (
    <div className="py-10 ">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Latest Blogs</h2>
      <p className="text-center text-gray-600 text-sm mb-4">Discover the latest news, insights, and articles from the industry.</p>
      <div className=" mx-auto grid md:grid-cols-3 gap-6 px-4">
        {latestBlogs.map(blog => (
          <div key={blog._id} className="bg-white shadow-md rounded-xl overflow-hidden border border-gray-200 transition-transform transform hover:scale-105 duration-300">
            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover transition-transform transform hover:scale-110 duration-300" />
            {/* // Blog content */}
            <div className="p-4 flex flex-col">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h3>
              <div className="flex justify-between items-center gap-2 mb-4 text-gray-500 text-sm">
                <p><span className='font-bold'>By</span>: {blog.author_name}</p>
                <p><span className='font-bold'>Category</span>: {blog.category}</p>
              </div>
              <p className="text-gray-600 mb-3 ">{blog.short_description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestPost;
