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
            >
                <TextSection />
            </ScrollAnimation>

            <div
                style={{
                    position: 'relative',
                    top: '-5vh',
                    width: '100vw',
                }}
            >
                <Profile />
            </div>
        </>
    )
}

export default Home
