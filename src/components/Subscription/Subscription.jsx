import React, { useState } from "react";

const Subscription = () => {
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            setMessage("Thank you for subscribing! 🎉");
            setEmail("");
        } else {
            setMessage("Please enter a valid email.");
        }
    };

    return (
        <div className="flex items-center justify-center px-6">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">📬 Newsletter Subscription</h2>
                <p className="text-gray-600 mb-6">
                    Subscribe to our newsletter and get exclusive content, updates, and special offers straight to your inbox!
                </p>
                <form onSubmit={handleSubscribe} className="flex flex-col space-y-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Subscribe Now
                    </button>
                </form>
                {message && <p className="mt-4 text-green-600 font-semibold">{message}</p>}
            </div>
        </div>
    );
};

export default Subscription;
