import React from "react";
import { FaLaptopCode, FaGlobe, FaHeart, FaDollarSign, FaRobot, FaGraduationCap, FaBriefcase, FaFlask, FaBullhorn, FaUserTie } from "react-icons/fa";

const categories = [
  { name: "Technology", icon: <FaLaptopCode className="text-blue-500 text-4xl" /> },
  { name: "Travel", icon: <FaGlobe className="text-green-500 text-4xl" /> },
  { name: "Health", icon: <FaHeart className="text-pink-500 text-4xl" /> },
  { name: "Finance", icon: <FaDollarSign className="text-yellow-500 text-4xl" /> },
  { name: "AI", icon: <FaRobot className="text-gray-500 text-4xl" /> },
  { name: "Education", icon: <FaGraduationCap className="text-purple-500 text-4xl" /> },
  { name: "Business", icon: <FaBriefcase className="text-blue-600 text-4xl" /> },
  { name: "Science", icon: <FaFlask className="text-indigo-500 text-4xl" /> },
  { name: "Marketing", icon: <FaBullhorn className="text-red-500 text-4xl" /> },
  { name: "Lifestyle", icon: <FaUserTie className="text-orange-500 text-4xl" /> },
];

const Categories = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Explore Most Popular Categories</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
          >
            {category.icon}
            <h2 className="text-xl font-semibold mt-4 text-gray-700">{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
