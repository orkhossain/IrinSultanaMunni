'use client'
import React from 'react'
import Profile from '@/components/About/Profile'
import TextSection from './TextSection'

function Home() {
    return (
        <div>
            <TextSection />
           <div style={{ margin: '0 auto', maxWidth: '1400px' }}>
            <Profile />
        </div>
        </div>
    )
}

export default Home
