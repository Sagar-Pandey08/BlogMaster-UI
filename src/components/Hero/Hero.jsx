import React from 'react'
import { TypeAnimation } from 'react-type-animation'
const Hero = () => {
    return (
        <div
            className="hero lg:h-[500px] bg-cover mt-16 "
            style={{
                backgroundImage: "url(https://i.ibb.co.com/604gSjQf/bg.jpg)",
            }}>
            <div className="hero-overlay "></div>
            <div className="hero-content text-white text-center">
                <div className="max-w-md">
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed once, initially
                            'Share Your Ideas, Inspire the World',
                            1000,
                            'Express Your Innovation, Inspire the World',
                            1000,
                            'Learn More Earn More , Learn More Earn More',
                            1000,
                        ]}
                        speed={50}
                        style={{ fontSize: '2em' }}
                        repeat={Infinity}
                    />
                    <p className="mb-5 text-lg">
                        Share your unique ideas, stories, and perspectives with the world.
                        Connect with like-minded individuals and make an impact through your words.
                    </p>
                    <div className='flex justify-center gap-4'>
                        <button className="px-3 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md">Write a Blog</button>
                        <button className="px-3 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md">Read Blogs</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero