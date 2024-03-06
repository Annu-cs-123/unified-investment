import React from 'react'
import Hero from './pages/Hero'
import Invest from './pages/Invest'
import Blog from './pages/Blog'
import Business from './pages/Business'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'

function Home() {
  return (
    <div>
      <Hero />
      <Invest />
      <Blog />
      <Business />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default Home
