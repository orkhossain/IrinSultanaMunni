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
            <ScrollAnimation
                // animateIn="fadeInLeftBig"
                // animateOut="fadeOutRightBig"
                animateIn="rollIn"
                animateOut="rollOut"
            >
                <div
                    style={{
                        position: 'relative',
                        top: '-5vh',
                        width: '100vw',
                    }}
                >
                    <Profile />
                </div>
            </ScrollAnimation>
        </>
    )
}

export default Home
