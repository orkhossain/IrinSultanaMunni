'use client'
import React from 'react'
import Navbar from '@/components/AppBar'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'
import Banner from '@/components/Banner'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import About from '@/components/About'
import CustomCursor from '@/components/CustomCursor'
import 'animate.css/animate.compat.css'

import store from '../../store'
import { Provider } from 'react-redux'
function Home() {
    return (
        <>
            <Provider store={store}>
                <CustomCursor />
                <Navbar />
                <Banner />
                <About />
                <Services />
                <Marquee></Marquee>
                <Contact />
                <Footer />
            </Provider>
        </>
    )
}

export default Home
