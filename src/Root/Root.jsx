import React from 'react'
import Header from '../components/Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const Root = () => {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        < Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Root