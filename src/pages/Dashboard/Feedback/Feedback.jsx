import ReactStars from "react-stars";

const Feedback = () => {

  

  return (
    <div className=' mx-auto bg-[#FFF2DB] p-8 shadow-lg rounded-lg mt-10'>
      <h2 className='text-3xl font-bold text-gray-800 mb-6 text-center'>Submit Feedback</h2>
      <form className='space-y-4'>
        <input type='text' placeholder='First Name' className='w-full p-2 border rounded-lg' required />
        <input type='text' placeholder='Designation' className='w-full p-2 border rounded-lg' required />
        <ReactStars
          count={5}
          size={24}
          activeColor="#ffd700"
          value={0}
        />,
        <textarea placeholder='Your Feedback' className='w-full p-2 border rounded-lg' required />
        <input type='file' className='w-full p-2 border rounded-lg' required />
        <button type='submit' className='w-full bg-[#2DAA9E] text-black font-bold py-2 rounded-lg hover:bg-[#66D2CE] transition duration-300'>Send Feedback</button>
      </form>
    </div>
  );
};

export default Feedback;
