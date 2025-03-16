import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../components/Hooks/useAxiosSecure";

const AddAuthor = () => {
  const axiosSecure = useAxiosSecure()

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const bio = form.bio.value;
    const twitter = form.twitter.value;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    const image = form.img.files[0];

    const formData = new FormData();
    formData.append("image", image)
    //send image in imagebb
    // Send image to imagebb and get URL, then store in the database
    axios.post("https://api.imgbb.com/1/upload?key=425000ec487abe2b84d0bb7de5769c3a", formData)
      .then((res) => {
        const imageUrl = res.data.data.url;
        const info = {
          name: name,
          bio: bio,
          image: imageUrl,
          twitter: twitter,
          linkedin: linkedin,
          github: github
        }
        return axiosSecure.post('/addAuthor', info)
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Author Added",
            text: "Author added successfully!",
            icon: "success",
            confirmButtonText: "Close",
          });
          form.reset();
        }
      })
      .catch((err) => {
        alert(err.message);
      });


  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-[#fff2db] shadow-lg rounded-lg mt-10 border border-gray-200">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Add New Author</h2>
      <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          required
        />
        <textarea
          name="bio"
          placeholder="Bio (e.g., Cloud Engineer | DevOps Enthusiast | Speaker)"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 h-24"
          required
        ></textarea>
        <input
          type="file"
          name="img"
          placeholder="Image URL"
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          required
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="twitter"
            placeholder="Twitter Profile URL"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="linkedin"
            placeholder="LinkedIn Profile URL"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="github"
            placeholder="GitHub Profile URL"
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
