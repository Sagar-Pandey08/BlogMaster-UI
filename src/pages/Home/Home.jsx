import React from 'react'
import Hero from '../../components/Hero/Hero'
import LatestPost from '../../components/LatestPost/LatestPost'
import FeaturedBlogs from '../../components/FeaturedBlogs/FeaturedBlogs'
import Categories from '../../components/Categories/Categories'
import Author from '../../components/Author/Author'
import Testimonials from '../../components/Testimonials/Testimonials'
import Subscription from '../../components/Subscription/Subscription'

const Home = () => {
  return (
    <div className="p-4 min-h-screen">
      <Hero />
      <LatestPost />
      <FeaturedBlogs/>
      <Categories/>
      <Author/>
      <Testimonials/>
      <Subscription/>
    </div>
  )
}

export default Home