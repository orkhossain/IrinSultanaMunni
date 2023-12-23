'use client'
import React from 'react'
import Profile from '@/components/About/Profile'
import TextSection from './TextSection'

function Home() {
    return (
        <>
            <TextSection />
            <div style={{ position: 'relative', top: '-5vh', width: '100vw' }}>
                <Profile />
            </div>
        </>
    )
}

export default Home
