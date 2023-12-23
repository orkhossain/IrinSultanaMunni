'use client'
import React, { useEffect } from 'react'
import Navbar from '@/components/AppBar'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'
import Banner from '@/components/Banner'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import TextSection from '@/components/Profile/TextSection'
import CustomCursor from '@/components/CustomCursor'
import Profile from '@/components/Profile'

import store from '../../store'
import { Provider } from 'react-redux'
function Home() {
    return (
        <>
            <Provider store={store}>
                <CustomCursor />
                <Navbar />
                <Banner />
                <TextSection />
                <div style={{ position: 'relative', top: '-5vh' }}>
                    <Profile />
                </div>
                <Services />
                <Marquee></Marquee>
                <Contact />
                <Footer />
            </Provider>
        </>
    )
}

export default Home
