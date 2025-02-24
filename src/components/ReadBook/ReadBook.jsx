import React from "react";

const ReabBook = () => {
  return (
    <div className="min-h-screen p-8 flex justify-center items-center">
      <div className=" w-full bg-white shadow-2xl rounded-lg p-10 space-y-8">
        <h1 className="text-4xl font-bold text-center text-gray-900">📖 Build an Everyday Reading Habit</h1>
        
        {/* How to Build a Reading Habit */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">📌 How to Read Every Day</h2>
          <ul className="list-disc text-gray-700 space-y-2 pl-6">
            <li>Start small: Read for 5-10 minutes daily.</li>
            <li>Choose books you enjoy to stay motivated.</li>
            <li>Set a dedicated reading time (morning or night).</li>
            <li>Use audiobooks or eBooks when on the go.</li>
            <li>Join reading groups or track progress on apps.</li>
          </ul>
        </section>

        {/* Benefits of Reading */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">🎯 Benefits of Reading</h2>
          <div className="grid grid-cols-2 gap-4 text-gray-700">
            <p>📌 Enhances brain function and cognitive skills.</p>
            <p>📌 Reduces stress and improves mental health.</p>
            <p>📌 Expands knowledge and vocabulary.</p>
            <p>📌 Boosts creativity and problem-solving abilities.</p>
            <p>📌 Improves communication and analytical thinking.</p>
          </div>
        </section>

        {/* Recommended Books */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2 mb-4">📚 Recommended Books</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-medium text-gray-900">🔬 Science & Technology</h3>
              <ul className="list-disc text-gray-700 pl-6">
                <li><em>A Brief History of Time</em> - Stephen Hawking</li>
                <li><em>The Selfish Gene</em> - Richard Dawkins</li>
                <li><em>Thinking, Fast and Slow</em> - Daniel Kahneman</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-gray-900">🧠 Psychology & Mindset</h3>
              <ul className="list-disc text-gray-700 pl-6">
                <li><em>Atomic Habits</em> - James Clear</li>
                <li><em>The Power of Habit</em> - Charles Duhigg</li>
                <li><em>Grit</em> - Angela Duckworth</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-medium text-gray-900">🗣️ Communication & Leadership</h3>
              <ul className="list-disc text-gray-700 pl-6">
                <li><em>How to Win Friends and Influence People</em> - Dale Carnegie</li>
                <li><em>Never Split the Difference</em> - Chris Voss</li>
                <li><em>Crucial Conversations</em> - Al Switzler & Kerry Patterson</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReabBook;
