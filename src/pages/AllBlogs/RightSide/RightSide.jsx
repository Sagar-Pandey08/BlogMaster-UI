import React from "react";
import { AiFillLike } from "react-icons/ai";
import { FaComment, FaEye, FaShare } from "react-icons/fa";

// Dummy Data
const latestBlogs = [
  {
    id: 1,
    title: "Exploring the Future of AI",
    description: "How AI is shaping our world in 2025 and beyond.",
    author: "John Doe",
    date: "Feb 18, 2025",
  },
  {
    id: 2,
    title: "Top 10 Travel Destinations",
    description: "Must-visit places for every traveler in 2025.",
    author: "Jane Smith",
    date: "Feb 15, 2025",
  },
];

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

const recentlySaved = [
  {
    id: 1,
    title: "How to Build a Personal Brand",
    author: "Alice Brown",
    date: "Feb 10, 2025",
  },
  {
    id: 2,
    title: "The Power of Habit: Book Summary",
    author: "David Miller",
    date: "Feb 05, 2025",
  },
];

const RightSide = () => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6 border border-gray-200 p-4 space-y-6">
      
      {/* Latest Blogs Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800">Latest Blogs</h3>
        <ul className="mt-3 space-y-3">
          {latestBlogs.map((blog) => (
            <li key={blog.id} className="border-b pb-2">
              <h4 className="font-medium text-gray-700">{blog.title}</h4>
              <p className="text-sm text-gray-600">{blog.description}</p>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>By {blog.author}</span>
                <span>{blog.date}</span>
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
                <span>By {post.author}</span>
                <span>{post.date}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default RightSide;
