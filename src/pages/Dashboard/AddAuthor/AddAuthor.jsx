import React, { useState } from "react";

const AddAuthor = () => {
  const [author, setAuthor] = useState({
    name: "",
    bio: "",
    img: "",
    twitter: "",
    linkedin: "",
    github: "",
  });

  const handleChange = (e) => {
    setAuthor({ ...author, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Author Data Submitted:", author);
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-[#fff2db] shadow-lg rounded-lg mt-10 border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Add New Author</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="flex flex-col items-center">
          <input
            type="text"
            name="img"
            placeholder="Image URL"
            value={author.img}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
            required
          />
          {author.img && (
            <img src={author.img} alt="Author" className="w-24 h-24 rounded-full mt-4 border border-gray-300 shadow-md" />
          )}
        </div>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={author.name}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          name="bio"
          placeholder="Bio (e.g., Cloud Engineer | DevOps Enthusiast | Speaker)"
          value={author.bio}
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 h-24"
          required
        ></textarea>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="twitter"
            placeholder="Twitter Profile URL"
            value={author.twitter}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn Profile URL"
            value={author.linkedin}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="github"
            placeholder="GitHub Profile URL"
            value={author.github}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#a37ee6] text-white  py-3 rounded-lg hover:bg-purple-400 transition font-semibold"
        >
          Add Author
        </button>
      </form>
    </div>
  );
};

export default AddAuthor;
