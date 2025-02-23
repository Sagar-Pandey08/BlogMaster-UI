import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const authors = [
    {
        name: "John Doe",
        bio: "Tech Enthusiast | Blogger | Developer",
        img: "https://i.ibb.co.com/rM2S9bf/author.jpg",
        twitter: "#",
        linkedin: "#",
        github: "#",
    },
    {
        name: "Jane Smith",
        bio: "UX Designer | Writer | Speaker",
        img: "https://i.ibb.co.com/8m0ydTC/aa.webp",
        twitter: "#",
        linkedin: "#",
        github: "#",
    },
    {
        name: "Alina Johnson",
        bio: "AI Researcher | Developer | Innovator",
        img: "https://i.ibb.co.com/VYsRKRm/second.jpg",
        twitter: "#",
        linkedin: "#",
        github: "#",
    },
    {
        name: "Mike Brown",
        bio: "Data Scientist | Blogger | Tech Speaker",
        img: "https://i.ibb.co.com/C29J8yW/first.jpg",
        twitter: "#",
        linkedin: "#",
        github: "#",
    },
    {
        name: "Chris Brown",
        bio: "Analytics | Teacher | Writer",
        img: "https://i.ibb.co.com/QjHk5mS/a.jpg",
        twitter: "#",
        linkedin: "#",
        github: "#",
    },
    {
        name: "Sarah Wilson",
        bio: "Cloud Engineer | DevOps Enthusiast | Speaker",
        img: "https://i.ibb.co.com/5K4pBtN/office.jpg",
        twitter: "#",
        linkedin: "#",
        github: "#",
    },
];

const Author = () => {
    return (
        <div className="max-w-6xl mx-auto p-8">
            <h1 className="text-4xl font-bold text-center mb-4 text-gray-800">Meet Our Authors</h1>
            <p className="text-lg text-gray-600 text-center mb-10">Our most active blog contributors</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {authors.map((author, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl text-center transition-transform transform hover:scale-105 duration-300">
                        <img
                            src={author.img}
                            alt={author.name}
                            className="w-40 h-40 mx-auto rounded-full border-4 border-blue-500"
                        />
                        <h2 className="text-2xl font-bold mt-4 text-gray-800">{author.name}</h2>
                        <p className="text-lg text-gray-600 mt-2">{author.bio}</p>
                        <div className="flex justify-center mt-4 space-x-4">
                            <a href={author.twitter} className="text-blue-500 text-2xl hover:text-blue-700 transition-transform transform hover:scale-110">
                                <FaTwitter />
                            </a>
                            <a href={author.linkedin} className="text-blue-600 text-2xl hover:text-blue-800 transition-transform transform hover:scale-110">
                                <FaLinkedin />
                            </a>
                            <a href={author.github} className="text-gray-900 text-2xl hover:text-gray-700 transition-transform transform hover:scale-110">
                                <FaGithub />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Author;
