import React, { useEffect, useState } from 'react'
import Navbar from '@/components/AppBar'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'
import Banner from '@/components/Banner'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import About from '@/components/About'
import CustomCursor from '@/components/CustomCursor'
import 'animate.css/animate.compat.css'
import { Provider, useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'

function Home() {
    return (
        <>
            <CustomCursor />
            <Navbar />
            <Banner />

            <div id="about">
                <About />
            </div>

            <div id="service">
                <Services />
            </div>

            <Marquee></Marquee>
            <Contact />
            <Footer />
        </>
    )
}

export default Home
