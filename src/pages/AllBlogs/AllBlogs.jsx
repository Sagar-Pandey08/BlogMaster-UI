import React from 'react'
import RightSide from '../../components/RightSide/RightSide'
import LeftSideBlogs from '../../components/LeftSideBlogs/LeftSideBlogs'

const AllBlogs = () => {
    return (
        <div className='mt-28'>
            <div className='mt-5'>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Interactive Blog Engagement with Likes & Comments</h2>
                <p className='text-sm text-center'>Enhance your blog platform with interactive features! Implement a like button that toggles between like and unlike, dynamically updating the count. Additionally, add a comment section that appears when users click the comment icon and hides when clicked again. This creates a seamless and engaging user experience, similar to LinkedIn. 🚀</p>
                <br />
                <div className='lg:flex justify-between gap-4 lg:m-5'>
                    < LeftSideBlogs />
                    <div className='lg:w-[400px] lg:mt-0 mt-5'>
                        <RightSide />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AllBlogs