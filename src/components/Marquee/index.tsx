import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Image1 from '@/assets/logos/Image1.webp'
import Image2 from '@/assets/logos/Image2.webp'
import Image3 from '@/assets/logos/Image3.webp'
import Image4 from '@/assets/logos/Image4.webp'
import Image5 from '@/assets/logos/Image5.webp'
import Image6 from '@/assets/logos/Image6.webp'
import Image7 from '@/assets/logos/Image7.webp'
import Image8 from '@/assets/logos/Image8.webp'
import Image9 from '@/assets/logos/Image9.webp'
import Image10 from '@/assets/logos/Image10.webp'
import Image11 from '@/assets/logos/Image11.webp'
import Image12 from '@/assets/logos/Image12.webp'
import Image13 from '@/assets/logos/Image13.webp'
import Image14 from '@/assets/logos/Image14.webp'
import Image15 from '@/assets/logos/Image15.webp'
import Image16 from '@/assets/logos/Image16.webp'
import Image17 from '@/assets/logos/Image17.webp'
import Image18 from '@/assets/logos/Image18.webp'
import Image19 from '@/assets/logos/Image19.webp'
import Image20 from '@/assets/logos/Image20.webp'
import Image21 from '@/assets/logos/Image21.webp'
import ScrollAnimation from 'react-animate-on-scroll'

import Marquee from 'react-fast-marquee'

const marqueeSpeed = 32
const logoHeight = 140

const imageUrls = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
]

const imageUrls2 = [
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
]
const CompanyMarquee = ({ children }: any) => {
    const [isTopPaused, setIsTopPaused] = useState(false)
    const [isBottomPaused, setIsBottomPaused] = useState(false)
    const topUnpauseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
    const bottomUnpauseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

    const pauseTop = () => {
        if (topUnpauseTimeout.current) clearTimeout(topUnpauseTimeout.current)
        topUnpauseTimeout.current = null
        setIsTopPaused(true)
    }

    const pauseBottom = () => {
        if (bottomUnpauseTimeout.current)
            clearTimeout(bottomUnpauseTimeout.current)
        bottomUnpauseTimeout.current = null
        setIsBottomPaused(true)
    }

    const unpauseTop = () => {
        if (topUnpauseTimeout.current) clearTimeout(topUnpauseTimeout.current)
        topUnpauseTimeout.current = setTimeout(() => setIsTopPaused(false), 90)
    }

    const unpauseBottom = () => {
        if (bottomUnpauseTimeout.current)
            clearTimeout(bottomUnpauseTimeout.current)
        bottomUnpauseTimeout.current = setTimeout(() => setIsBottomPaused(false), 90)
    }

    return (
        <div
            className="marqueeWrap"
            style={{
                position: 'relative',
                overflow: 'hidden',
                background:
                    'linear-gradient(180deg, #f3eadf 0%, #eadbc5 55%, #e7d3b9 100%)',
                width: '100%',
                margin: 0,
            }}
        >
            <div
                style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    inset: 0,
                    background:
                        'linear-gradient(90deg, rgba(231,211,185,0.92) 0%, rgba(231,211,185,0.65) 4%, rgba(231,211,185,0.22) 10%, rgba(231,211,185,0) 18%), linear-gradient(270deg, rgba(231,211,185,0.92) 0%, rgba(231,211,185,0.65) 4%, rgba(231,211,185,0.22) 10%, rgba(231,211,185,0) 18%), linear-gradient(180deg, rgba(231,211,185,0.92) 0%, rgba(231,211,185,0.35) 10%, rgba(231,211,185,0) 26%), linear-gradient(0deg, rgba(231,211,185,0.92) 0%, rgba(231,211,185,0.35) 10%, rgba(231,211,185,0) 26%)',
                    zIndex: 2,
                }}
            />
            <ScrollAnimation
                animateIn="slideInRight"
                animateOut="slideOutLeft"
                animateOnce={true}
	            >
                <Marquee speed={marqueeSpeed} play={!isTopPaused} gradient={false}>
                    {imageUrls.map((imageUrl, index) => (
	                        <div
	                            key={index}
	                            className="companyItem"
	                            onMouseEnter={pauseTop}
	                            onMouseLeave={unpauseTop}
	                            onFocus={pauseTop}
	                            onBlur={unpauseTop}
	                            tabIndex={0}
	                        >
	                            <Image
	                                src={imageUrl}
	                                alt={`Image${index + 1}`}
	                                className="companyLogo"
	                                height={logoHeight}
	                            />
	                        </div>
	                    ))}
	                </Marquee>
	            </ScrollAnimation>
            <ScrollAnimation
                animateIn="slideInLeft"
                animateOut="slideOutRight"
                animateOnce={true}
	            >
	                <Marquee
	                    direction="right"
	                    speed={marqueeSpeed}
	                    play={!isBottomPaused}
	                    gradient={false}
	                >
	                    {imageUrls2.map((imageUrl, index) => (
	                        <div
	                            key={index}
	                            className="companyItem"
	                            onMouseEnter={pauseBottom}
	                            onMouseLeave={unpauseBottom}
	                            onFocus={pauseBottom}
	                            onBlur={unpauseBottom}
	                            tabIndex={0}
	                        >
	                            <Image
	                                src={imageUrl}
	                                alt={`Image${index + 1}`}
	                                className="companyLogo"
	                                height={logoHeight}
	                            />
	                        </div>
	                    ))}
	                </Marquee>
	            </ScrollAnimation>
            <style jsx>{`
                .marqueeWrap {
                    padding: 64px 0;
                }
                @media (max-width: 600px) {
                    .marqueeWrap {
                        padding: 56px 0;
                    }
                }
	                .companyItem {
	                    padding: 40px;
	                    display: inline-flex;
	                    align-items: center;
	                    justify-content: center;
	                    cursor: pointer;
	                    border-radius: 16px;
	                    outline: none;
	                    transform: translateZ(0);
	                    will-change: transform;
	                }
	                .companyItem:focus-visible {
	                    box-shadow: 0 0 0 3px rgba(19, 16, 13, 0.18);
	                }
	                @media (max-width: 600px) {
	                    .companyItem {
	                        padding: 16px 36px;
	                    }
	                }
	                .companyLogo {
	                    transition: transform 240ms ease, filter 240ms ease;
	                    transform-origin: center;
	                    will-change: transform;
	                }
	                .companyItem:hover .companyLogo {
	                    transform: scale(1.18);
	                    filter: drop-shadow(0 10px 18px rgba(19, 16, 13, 0.18));
	                }
	            `}</style>
            <style jsx global>{`
                .rfm-marquee-container {
                    transform: translate3d(0, 0, 0);
                    will-change: transform;
                }
                .rfm-marquee {
                    transform: translate3d(0, 0, 0);
                    will-change: transform;
                    backface-visibility: hidden;
                }
                .rfm-initial-child-container {
                    transform: translate3d(0, 0, 0);
                }
            `}</style>
        </div>
    )
}

export default CompanyMarquee
