import React from 'react'

import Blog from './pages/Blog'
import Hero from './pages/Hero'
import Invest from './pages/Invest'
import Contact from './pages/Contact'
import Business from './pages/Business'
import Testimonials from './pages/Testimonials'


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
