import { useContext, useState } from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosPublic from "../../components/Hooks/AxiosPublic/useaxiosPublic";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const axiosPublic = useAxiosPublic()
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const message = form.message.value;

    if (!user) {
      Swal.fire({
        title: "Please Login First",
        text: "You need to be logged in to send a message.",
        icon: "info",
        confirmButtonText: "Login"

      })
      navigate("/login")
    } else {
      axiosPublic.post("/contact", {
        name,
        email,
        subject,
        message
      })
        .then(res => {
          if (res.data.insertedId) {
            Swal.fire({
              title: "Message Sent!",
              text: "Thank you for reaching out! We will get back to you shortly.",
              icon: "success",
              confirmButtonText: "Cool"
            })
            form.reset();
          }
        })
        .catch(err => {
          Swal.fire({
            title: "Error!",
            text: "Failed to send message. Please try again later.",
            icon: "error",
            confirmButtonText: "Try Again"
          })
        })
    }

  }

  return (
    <div className=" bg-gradient-to-r from-blue-500 to-indigo-600 p-6 grid lg:grid-cols-2 gap-4 mt-28">
      <div className=" mx-auto bg-white shadow-xl rounded-lg p-8">
        {/* Contact Section */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">📩 Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" className="w-full p-3 border rounded-md focus:ring-4 focus:ring-blue-500 shadow-sm" required />
          <input type="email" name="email" placeholder="Your Email" className="w-full p-3 border rounded-md focus:ring-4 focus:ring-blue-500 shadow-sm" required />
          <input type="text" name="subject" placeholder="Subject" className="w-full p-3 border rounded-md focus:ring-4 focus:ring-blue-500 shadow-sm" />
          <textarea name="message" placeholder="Your Message" className="w-full p-3 border rounded-md focus:ring-4 focus:ring-blue-500 shadow-sm h-32" required />
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-all shadow-md">Send Message</button>
        </form>
        {/* Social Media Links */}
        <div className="flex justify-center space-x-5 mt-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-blue-600 text-3xl hover:scale-110 transition duration-300" /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter className="text-blue-400 text-3xl hover:scale-110 transition duration-300" /></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin className="text-blue-700 text-3xl hover:scale-110 transition duration-300" /></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub className="text-gray-800 text-3xl hover:scale-110 transition duration-300" /></a>
        </div>
      </div>

      {/* Reading Habit Section */}
      <div className=" mx-auto bg-white shadow-xl rounded-lg p-8 lg:mt-0 mt-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">📚 Build a Daily Reading Habit</h2>
        <ul className="list-disc text-gray-700 space-y-2 px-6">
          <li>Start small: Read 5-10 minutes a day.</li>
          <li>Choose books you enjoy to stay motivated.</li>
          <li>Set a dedicated reading time (morning or night).</li>
          <li>Use audiobooks or eBooks when you're busy.</li>
          <li>Join reading communities for motivation.</li>
        </ul>
        <h3 className="text-xl font-semibold mt-6">🎯 Benefits of Reading Daily:</h3>
        <ul className="list-disc text-gray-700 space-y-2 px-6">
          <li>Boosts brain power and memory.</li>
          <li>Reduces stress and improves mental health.</li>
          <li>Expands knowledge and vocabulary.</li>
          <li>Enhances focus and concentration.</li>
          <li>Helps with better sleep and relaxation.</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
