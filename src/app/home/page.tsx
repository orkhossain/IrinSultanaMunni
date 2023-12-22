'use client'
import React from 'react'
import Navbar from '@/components/AppBar'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'
import Banner from '@/components/Banner'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import TextSection from '@/components/TextSection'
import store from '../../store'
import { Provider } from 'react-redux'
import 'animate.css/animate.compat.css'
import CustomCursor from '@/components/CustomCursor'

function Home() {
  return (
    <>
      <Provider store={store}>
        <CustomCursor />

        <Navbar />
        <Banner />
        <TextSection />
        <Services />
        <Marquee></Marquee>
        <Contact />
        <Footer />
      </Provider>
    </>
  )
}

export default Home
