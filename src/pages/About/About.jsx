import React from "react";

const About = () => {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-20">
      <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">About SyntexStory</h1>
      <p className="text-xl text-gray-700 text-center mb-6 leading-relaxed">
        Welcome to <strong>SyntexStory</strong>, where storytelling meets technology, creativity, and inspiration.
      </p>
      
      <section className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Mission</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          At <strong>SyntexStory</strong>, we bring unique insights into various topics, including tech trends, lifestyle tips, and in-depth guides to enhance your daily life.
        </p>
      </section>
      
      <section className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Why SyntexStory?</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          We believe in the power of words and stories to inspire, provoke thought, and build a community. Whether you seek practical advice, the latest trends, or an engaging read, <strong>SyntexStory</strong> is here for you.
        </p>
      </section>

      <section className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Features</h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed">
          <li><strong>Like:</strong> Show appreciation for your favorite blogs.</li>
          <li><strong>Comment:</strong> Engage in discussions and share your thoughts.</li>
          <li><strong>Share:</strong> Easily share articles on social media.</li>
          <li><strong>Read & Filter:</strong> Discover content by category and preference.</li>
          <li><strong>Write & Edit:</strong> Create and refine your own blogs with ease.</li>
        </ul>
      </section>

      <section className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Meet the Author</h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Hi, I'm <strong>[Your Name]</strong>, the founder and chief writer behind <strong>SyntexStory</strong>. My passion for technology and storytelling led me to create this platform, aiming to share knowledge and experiences that make an impact.
        </p>
      </section>

      <section className="mt-10 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-gray-600 text-lg leading-relaxed">
          <li><strong>Quality Content:</strong> Thoughtfully researched and well-written articles.</li>
          <li><strong>Creativity:</strong> Embracing new ideas and unique perspectives.</li>
          <li><strong>Community:</strong> Building an engaged and supportive readership.</li>
        </ul>
      </section>

      <div className="text-center mt-12">
        <p className="text-xl font-medium text-gray-700">Thank you for visiting <strong>SyntexStory</strong>! Join our community and explore more amazing content.</p>
      </div>
    </div>
  );
};

export default About;
