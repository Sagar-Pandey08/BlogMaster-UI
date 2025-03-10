import React, { useState } from 'react';
import useAxiosPublic from '../../components/Hooks/AxiosPublic/useaxiosPublic';
import Swal from 'sweetalert2';
import { useLoaderData, useNavigate } from 'react-router-dom';

const EditProfile = () => {
  const userData = useLoaderData()
  const axiosPublic = useAxiosPublic()
  const navigate = useNavigate()


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const bio = form.bio.value;
    const designation = form.designation.value;
    const profileData = { name, bio, designation }

//profile update
    axiosPublic.put(`/profiles/${userData._id}`, profileData)
      .then(res => {
        if (res.data.modifiedCount) {
          Swal.fire({
            title: 'Profile updated successfully!',
            icon: 'success',
            confirmButtonText: 'Okay'
          })
          form.reset()
          navigate(`/Profile`)
        }
      })
      .catch(err => {
        console.log(err.message)
      })
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-semibold text-center mb-6">Edit Profile</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-medium">Name:</label>
            <input
              type="text"
              id="name"
              name="name"

              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="bio" className="block font-medium">Bio:</label>
            <input
              type="text"
              id="bio"
              name="bio"

              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="designation" className="block font-medium">Designation:</label>
            <input
              type="text"
              id="designation"
              name="designation"
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
