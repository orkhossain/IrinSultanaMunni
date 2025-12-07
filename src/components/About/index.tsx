'use client'
import React from 'react'
import Profile from '@/components/About/Profile'
import TextSection from './TextSection'
import ScrollAnimation from 'react-animate-on-scroll'

function Home() {
    return (
        <>
            <ScrollAnimation
                animateOut="fadeOutRightBig"
                animateIn="fadeInLeftBig"
                animateOnce={true}
            >
                <TextSection />
            </ScrollAnimation>


                <Profile />
        </>
    )
}

export default Home
