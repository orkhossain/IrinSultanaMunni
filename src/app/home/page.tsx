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
      <Services />
      <Marquee />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
