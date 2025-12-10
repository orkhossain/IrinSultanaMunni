import React from 'react'
import Footer from '@/components/Footer'
import Marquee from '@/components/Marquee'
import Banner from '@/components/Banner'
import Services from '@/components/Services'
import About from '@/components/About'
import 'animate.css/animate.compat.css'
import { Provider, useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'

function Home() {
    return (
        <>
            <Banner />

            <div  id="about">
                <About />
            </div>

            <div id="service">
                <Services />
            </div>

            <Marquee></Marquee>
            <Footer />
        </>
        
    )
}

export default Home
