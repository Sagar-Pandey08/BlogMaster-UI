import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaBookmark, FaComment, FaCopy, FaFacebook, FaLinkedin, FaShare, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const BlogCard = ({ blog }) => {
    
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(blog.likes);
    const [showComment, setShowComment] = useState(false);
    const [comment, setComment] = useState("");
    const [showShareOptions, setShowShareOptions] = useState(false)
    const blogUrl = `${window.location.origin}/blog/${blog.id}`; // Dynamic Blog URL


    const handleLikeClick = () => {
        if (liked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setLiked(!liked);
    };

    const handlerComment = () => {
        setShowComment(!showComment);
    }

    const handlerShare = () => {
        setShowShareOptions(!showShareOptions);
    }

    const handleCopyLink = () => {
        navigator.clipboard.writeText(blogUrl);
        alert("Link copied to clipboard!");
    }


    return (
        <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden mb-6 border border-gray-200 p-4 ">
            <img className="w-full h-64 object-cover rounded-2xl" src={blog.image} alt={blog.title} />
            <div>
                <h3 className="text-lg font-semibold text-gray-800">{blog.title}</h3>
                <p className="text-gray-500 text-sm">By {blog.author} • {blog.time} • <span className='font-medium'>{blog.category}</span></p>
            </div>
            <p className="text-gray-600 mt-2">{blog.description}</p>
            <div className="flex justify-between items-center mt-4 text-gray-600 text-sm border-t pt-2 gap-1">
                <button className={`flex items-center gap-1 ${liked ? 'text-blue-500' : ''}`}
                    onClick={handleLikeClick} > <AiFillLike className='text-2xl' /> Like {likes}</button>
                <button onClick={handlerComment} className="flex items-center gap-1"> <FaComment className='text-2xl' /> Comment</button>
                <button onClick={handlerShare} className="flex items-center gap-1"> <FaShare className='text-2xl' />Share </button>
                <button  className="flex items-center gap-1"> <FaBookmark className='text-2xl' />Save </button>
            </div>
            {/* Comment Input Field */}
            {showComment && (
                <div className="mt-4 flex gap-4">
                    <input
                        type="text"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Write a comment..."
                        className="w-full border rounded-md p-2 text-gray-700"
                    />
                    <button
                        onClick={handlerComment}
                        className="px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                    >
                        <IoMdSend />

                    </button>
                </div>
            )}
            {/* Share Options */}
            {showShareOptions && (
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-3 mt-4 border-t pt-3 justify-center">
                    {/* Copy Link Button */}
                    <button
                        onClick={handleCopyLink}
                        className="flex items-center gap-2 px-3 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition"
                    >
                        <FaCopy /> Copy Link
                    </button>

                    {/* Facebook Share */}
                    <a
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(blogUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
                    >
                        <FaFacebook /> Facebook
                    </a>

                    {/* Twitter Share */}
                    <a
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(blogUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition"
                    >
                        <FaTwitter /> Twitter
                    </a>

                    {/* LinkedIn Share */}
                    <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(blogUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition"
                    >
                        <FaLinkedin /> LinkedIn
                    </a>

                    {/* WhatsApp Share */}
                    <a
                        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(blogUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                    >
                        <FaWhatsapp /> WhatsApp
                    </a>
                </div>
            )}
        </div>

    )
}

export default BlogCard