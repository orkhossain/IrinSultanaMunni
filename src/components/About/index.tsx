'use client'
import React from 'react'
import Profile from '@/components/About/Profile'
import TextSection from './TextSection'

function Home() {
    return (
        <div style={{ margin: '0 auto', padding: '0 24px', maxWidth: '1400px' }}>
            <TextSection />
            <Profile />
        </div>
    )
}

export default Home
