import React, { useContext } from 'react'
import { useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaBookmark, FaComment, FaCopy, FaFacebook, FaLinkedin, FaShare, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

import { data, useLoaderData } from "react-router-dom"
import useAxiosPublic from '../../components/Hooks/AxiosPublic/useaxiosPublic';
import Swal from 'sweetalert2';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const SingleBlogs = () => {
    const blog = useLoaderData()
    const axiosPublic = useAxiosPublic()
    const { user } = useContext(AuthContext)
    // console.log(blog)
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(blog.likes);
    const [showComment, setShowComment] = useState(false);
    const [comment, setComment] = useState("");
    const [showShareOptions, setShowShareOptions] = useState(false)
    const blogUrl = `${window.location.origin}/blog/${blog._id}`; // Dynamic Blog URL

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
    const handlerCommentValue = () => {
        // console.log(comment)
        axiosPublic.put(`/blogs/${blog._id}`, {
            comment_user: user?.displayName,
            date_Of_comment: new Date().toLocaleDateString(),
            comment: comment
        })
            .then(res => {
                if (res.data.modifiedCount) {
                    Swal.fire({
                        title: 'Comment Posted!',
                        text: 'Your comment has been posted successfully.',
                        icon: 'success',
                        confirmButtonText: 'Cool!'
                    })
                    setComment("")
                }
            })
            .catch(err => {
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to post comment. Please try again later.',
                    icon: 'error',
                    confirmButtonText: 'Cool!'
                })
            })

    }


    return (

        <div key={blog.id} className="bg-white shadow-md rounded-lg overflow-hidden mb-6 border border-gray-200 p-4 mt-28 min-h-screen">
            <img className="w-full h-full object-cover rounded-2xl" src={blog.image} alt={blog.title} />
            <div className='mt-4'>
                <h3 className="text-2xl lg:text-4xl font-bold text-gray-800 lg:text-center">{blog.title}</h3>
                <p className="text-gray-600 mt-2 lg:text-center">{blog.short_description}</p>
                <div className='flex'>
                    <img src={blog.author_image} alt={blog.author_name} className="w-10 h-10 rounded-full mt-4" />
                    <div className="ml-4">
                        <p className="text-gray-800 text-lg font-semibold mt-2">{blog.author_name}</p>
                        <p className="text-gray-500 text-sm mt-2"> {blog.date_time} • <span className='font-medium'>{blog.category}</span></p>
                    </div>
                </div>
            </div>
            <p className="text-gray-600 mt-6">{blog.blog_details}</p>
            <div className="flex justify-between items-center mt-4 text-gray-600 text-sm border-t pt-2 gap-1">
                <button className={`flex items-center gap-1 ${liked ? 'text-blue-500' : ''}`}
                    onClick={handleLikeClick} > <AiFillLike className='text-2xl' /> Like {likes}</button>
                <button onClick={handlerComment} className="flex items-center gap-1"> <FaComment className='text-2xl' /> Comment</button>
                <button onClick={handlerShare} className="flex items-center gap-1"> <FaShare className='text-2xl' />Share </button>
                <button className="flex items-center gap-1"> <FaBookmark className='text-2xl' />Save </button>
            </div>
            {/* Comment Input Field */}
            {showComment && (
                <div className="mt-4">
                        <p className="text-gray-600 mt-2 ml-6 text-lg font-semibold">{blog?.comment_user}</p>
                        <p className="text-gray-600  ml-6 text-sm">{blog?.comment}</p>
                        <p className="text-gray-600 mt-2 ml-6 text-sm">{ blog?.date_Of_comment}</p>

                    <div className="mt-4 flex gap-4">
                        <input
                            name='comment'
                            type="text"
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Write a comment..."
                            className="w-full border rounded-md p-2 text-gray-700"
                        />
                        <button
                            onClick={handlerCommentValue}
                            className="px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            <IoMdSend />

                        </button>
                    </div>
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

export default SingleBlogs