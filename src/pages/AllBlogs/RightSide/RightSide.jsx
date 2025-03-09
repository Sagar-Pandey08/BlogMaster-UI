import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { FaComment, FaEye, FaShare } from "react-icons/fa";
import useSaveBlogs from "../../../components/Hooks/useSaveBlogs";
import useAllBlogs from "../../../components/Hooks/useallBlogs";
import useLatestBlogs from "../../../components/Hooks/useLatestBlogs";



const recommendedTopics = [
  "Technology",
  "Travel",
  "Health",
  "Finance",
  "AI",
  "Education",
  "Business",
  "Science",
  "Marketing",
  "Lifestyle",
];

const whoToFollow = [
  {
    id: 1,
    name: "Emily Carter",
    designation: "Tech Enthusiast",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Mark Johnson",
    designation: "Digital Marketer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Sophia Lee",
    designation: "AI Researcher",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];



const RightSide = () => {
  const { savedBlogs } = useSaveBlogs();
  const { allBlogs } = useAllBlogs();
  const [saveBlog, setSaveBlog] = useState([]);
  const {latestBlogs} = useLatestBlogs()

  // Use useEffect to update the state without causing an infinite loop
  useEffect(() => {
    const blogIds = savedBlogs.map(blog => blog.blogId);
    setSaveBlog(blogIds);
  }, [savedBlogs]); // Runs only when savedBlogs changes

  // Filter all blogs that match any of the saved blog IDs
  const recentlySaved = allBlogs.filter(blog => saveBlog.includes(blog._id));

  // console.log(filter);



  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6 border border-gray-200 p-4 space-y-6">

      {/* Latest Blogs Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Latest Blogs</h3>
        <ul className="mt-3 space-y-3">
          {latestBlogs.map((blog) => (
            <li key={blog.id} className="border-b pb-2">
              <h4 className="font-medium text-gray-700">{blog.title}</h4>
              <p className="text-sm text-gray-600">{blog.short_description}</p>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>By {blog.author_name}</span>
                <span>{blog.date_time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Recommended Topics */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Recommended Topics</h3>
        <div className="flex flex-wrap gap-2 mt-3">
          {recommendedTopics.map((topic, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-gray-300"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>

      {/* Who to Follow */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Who to Follow</h3>
        <div className="mt-3 space-y-3">
          {whoToFollow.map((user) => (
            <div key={user.id} className="flex items-center p-2 border rounded-md">
              <img
                src={user.image}
                alt={user.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="ml-3 flex-1">
                <p className="text-gray-700 font-medium">{user.name}</p>
                <p className="text-gray-500 text-sm">{user.designation}</p>
              </div>
              <button className="bg-blue-600 text-white px-3 py-1 text-sm rounded-md hover:bg-blue-700">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Recently Saved Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Recently Saved</h3>
        <ul className="mt-3 space-y-3">
          {recentlySaved.map((post) => (
            <li key={post.id} className="border-b pb-2">
              <h4 className="font-medium text-gray-700">{post.title}</h4>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>By {post.author_name}</span>
                <span>{post.date_time}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default RightSide;
