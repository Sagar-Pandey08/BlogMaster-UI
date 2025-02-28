import { Link } from "react-router-dom";


const BlogCard = ({ blog }) => {

    return (
        <div>
            <Link to={`/blogs/${blog._id}`}>
                <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden mb-6 border border-gray-200 p-4 flex justify-between gap-4 transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer">
                    <div>
                        <p className="text-gray-500 text-lg"><span className='font-medium'>{blog.category}</span> by {blog.author_name}.</p>
                        <h3 className="text-3xl font-bold  text-gray-800">{blog.title}</h3>
                        <p className="text-gray-600 mt-2">{blog.short_description}</p>
                    </div>
                    <img className="h-28 w-36 lg:w-40 lg:h-40 object-cover rounded-xl" src={blog.image} alt={blog.title} />
                </div>
            </Link>
        </div>

    )
}

export default BlogCard;