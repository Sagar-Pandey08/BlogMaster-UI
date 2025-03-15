import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import useAuthors from "../Hooks/useAuthors";



const Author = () => {
    const {authors} = useAuthors()
    return (
        <div className="max-w-7xl mx-auto py-16 px-8">
            <h1 className="text-5xl font-extrabold text-center mb-6 text-gray-900 tracking-wide">Meet Our Authors</h1>
            <p className="text-lg text-gray-500 text-center mb-12">Our most active and creative blog contributors</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
                {authors.map((author, index) => (
                    <div key={index} className="relative group bg-gradient-to-br from-[#f3f4f6] to-[#e5e7eb] rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 cursor-pointer">
                        <div className="p-6 flex flex-col items-center text-center">
                            <img
                                src={author.img}
                                alt={author.name}
                                className="w-40 h-40 rounded-full border-4 border-blue-400 shadow-md group-hover:border-[#6B46C1] transition-all duration-500"
                            />
                            <h2 className="text-2xl font-bold mt-4 text-gray-800 group-hover:text-[#6B46C1] transition-all duration-500">{author.name}</h2>
                            <p className="text-md text-gray-600 mt-2 italic">{author.bio}</p>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full bg-white py-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center space-x-6 border-t border-gray-300">
                            {author.twitter && (
                                <a href={author.twitter} className="text-blue-500 text-2xl hover:text-blue-700 transform hover:scale-110 transition-transform">
                                    <FaTwitter />
                                </a>
                            )}
                            {author.linkedin && (
                                <a href={author.linkedin} className="text-blue-600 text-2xl hover:text-blue-800 transform hover:scale-110 transition-transform">
                                    <FaLinkedin />
                                </a>
                            )}
                            {author.github && (
                                <a href={author.github} className="text-gray-900 text-2xl hover:text-gray-700 transform hover:scale-110 transition-transform">
                                    <FaGithub />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Author;
