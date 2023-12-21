'use client'
import React from 'react'
import Navbar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'
import Banner from '@/components/Tab'
import Services from '@/components/Services'
import Contact from '@/components/Contact'

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <div style={{ position: 'relative', top: '-20vh' }}>
        <Marquee />

        <Services />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default Home
