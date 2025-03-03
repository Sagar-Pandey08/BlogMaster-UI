import { useState } from "react";
import ReactStars from "react-stars";
import useAxiosPublic from "../../../components/Hooks/AxiosPublic/useaxiosPublic";
import axios from "axios";
import Swal from "sweetalert2";

const Feedback = () => {
  const [ratingValue, setRatingValue] = useState(0)
  const axiosPublic = useAxiosPublic()
  const ratingChange = (newRating) => {
    setRatingValue(newRating);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const designation = form.designation.value;
    const rating = ratingValue;
    const message = form.message.value;
    const image = form.image.files[0];

    const formData = new FormData()
    formData.append("image", image)

    // const info = {name,designation,rating,message,image}
    // console.log(info);

    //send image imagebb then send data in database
    const res = axios.post("https://api.imgbb.com/1/upload?expiration=600&key=4fc956d34ad8f4a1ce04e663e1606a83", formData)
    
    res.then(res => {
      const imageUrl = res.data.data.url;
      axiosPublic.post("/review", {
        name: name,
        designation: designation,
        rating: rating,
        review: message,
        image: imageUrl
      })
        .then((response) => {
          if (response.data.insertedId) {
            Swal.fire({
              title: 'Feedback Submit Successfully!',
              icon: 'success',
              showConfirmButton: false,
              timer: 1500
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    })


  }
  return (
    <div className=' mx-auto bg-[#FFF2DB] p-8 shadow-lg rounded-lg mt-10'>
      <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>Submit Feedback</h2>
      <form onSubmit={handleSubmit} className='space-y-4'>
        <input name="name" type='text' placeholder='First Name' className='w-full p-2 border rounded-lg' required />
        <input name="designation" type='text' placeholder='Designation' className='w-full p-2 border rounded-lg' required />
        <ReactStars
          count={5}
          size={24}
          activeColor="#ffd700"
          value={0}
          onChange={ratingChange}
        />,
        <textarea name="message" placeholder='Your Feedback' className='w-full p-2 border rounded-lg' required />
        <input name="image" type='file' className='w-full p-2 border rounded-lg' required />
        <button type='submit' className='w-full bg-[#2DAA9E] text-black font-bold py-2 rounded-lg hover:bg-[#66D2CE] transition duration-300'>Send Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
