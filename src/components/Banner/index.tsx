'use client'
import React from 'react'
import TabStepper from './Stepper'
import CenteredTabs from './Tab'
import ScrollAnimation from 'react-animate-on-scroll'

function Banner() {
    return (
        <>
            <ScrollAnimation animateIn="fadeInDown" animateOnce>
            <CenteredTabs />
            <TabStepper />
            </ScrollAnimation>
        </>
    )
}

export default Banner
