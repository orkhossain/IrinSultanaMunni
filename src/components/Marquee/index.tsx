import React from 'react'
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
import { useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'

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
const CompanyMarquee = () => {
    const dict = useSelector(selectDictionary)
    const marqueeTitle = dict.Index?.marqueeTitle ?? 'My collaborations'
    const marqueeSubtitle =
        dict.Index?.marqueeSubtitle ??
        "Partners, NGOs, and organizations I've worked with"

    return (
        <div
            className="marqueeWrap"
            style={{
                position: 'relative',
                overflow: 'hidden',
                background: 'transparent',
                width: '100%',
                margin: '5rem 0',
            }}
        >
            <div
                style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    inset: 0,
                    background:
                        'linear-gradient(90deg, rgba(244,239,233,0.96) 0%, rgba(244,239,233,0.60) 6%, rgba(244,239,233,0.18) 14%, rgba(244,239,233,0) 24%), linear-gradient(270deg, rgba(244,239,233,0.96) 0%, rgba(244,239,233,0.60) 6%, rgba(244,239,233,0.18) 14%, rgba(244,239,233,0) 24%), linear-gradient(180deg, rgba(244,239,233,0.92) 0%, rgba(244,239,233,0.35) 12%, rgba(244,239,233,0) 30%), linear-gradient(0deg, rgba(244,239,233,0.92) 0%, rgba(244,239,233,0.35) 12%, rgba(244,239,233,0) 30%)',
                    zIndex: 2,
                }}
            />
            <div className="marqueeHeader">
                <div className="marqueeKicker" />
                <div className="marqueeTitle">{marqueeTitle}</div>
                <div className="marqueeSubtitle">{marqueeSubtitle}</div>
            </div>
            <ScrollAnimation
                animateIn="slideInRight"
                animateOut="slideOutLeft"
                animateOnce={true}
            >
                <Marquee
                    speed={marqueeSpeed}
                    pauseOnHover
                    pauseOnClick
                    gradient={false}
                >
                    {imageUrls.map((imageUrl, index) => (
                        <div key={index} className="companyItem" tabIndex={0}>
                            <span className="companyLogoWrap">
                                <Image
                                    src={imageUrl}
                                    alt={`Image${index + 1}`}
                                    height={logoHeight}
                                />
                            </span>
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
                    pauseOnHover
                    pauseOnClick
                    gradient={false}
                >
                    {imageUrls2.map((imageUrl, index) => (
                        <div key={index} className="companyItem" tabIndex={0}>
                            <span className="companyLogoWrap">
                                <Image
                                    src={imageUrl}
                                    alt={`Image${index + 1}`}
                                    height={logoHeight}
                                />
                            </span>
                        </div>
                    ))}
                </Marquee>
            </ScrollAnimation>
            <style jsx>{`
                .marqueeWrap {
                    padding: 88px 0 84px;
                }
                .marqueeWrap::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(
                        180deg,
                        rgba(244, 239, 233, 0) 0%,
                        rgba(231, 211, 185, 0.28) 18%,
                        rgba(234, 219, 197, 0.48) 52%,
                        rgba(231, 211, 185, 0.28) 82%,
                        rgba(244, 239, 233, 0) 100%
                    );
                    z-index: 0;
                    pointer-events: none;
                }
                .marqueeHeader {
                    position: relative;
                    z-index: 3;
                    max-width: 1200px;
                    margin: 0 auto 34px;
                    padding: 0 24px;
                    display: grid;
                    gap: 14px;
                    text-align: center;
                }
                .marqueeKicker {
                    width: 56px;
                    height: 2px;
                    border-radius: 999px;
                    background: rgba(19, 16, 13, 0.18);
                    margin: 0 auto;
                }
                .marqueeTitle {
                    font-family: 'Fancy Cut Pro', 'Cambria', 'Georgia', serif;
                    font-weight: 600;
                    font-style: italic;
                    letter-spacing: -0.02em;
                    color: rgba(19, 16, 13, 0.9);
                    font-size: 4.1rem;
                    line-height: 1.15;
                }
                .marqueeSubtitle {
                    font-family: 'Fancy Cut Pro', 'Cambria', 'Georgia', serif;
                    font-weight: 400;
                    font-style: italic;
                    letter-spacing: 0.005em;
                    color: rgba(57, 48, 38, 0.9);
                    font-size: 1.25rem;
                    line-height: 1.6;
                    max-width: 780px;
                    margin: 0 auto;
                }
                @media (max-width: 600px) {
                    .marqueeWrap {
                        padding: 64px 0 58px;
                    }
                    .marqueeHeader {
                        margin-bottom: 22px;
                        gap: 10px;
                    }
                    .marqueeTitle {
                        font-size: 2.35rem;
                    }
                    .marqueeSubtitle {
                        font-size: 1rem;
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
                    position: relative;
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
                .companyLogoWrap {
                    display: inline-flex;
                    transform-origin: center;
                    will-change: transform, filter;
                    transition: transform 240ms ease, filter 240ms ease;
                }
                .companyItem:hover {
                    z-index: 3;
                }
                .companyItem:hover .companyLogoWrap {
                    transform: scale(1.18);
                    filter: drop-shadow(0 10px 18px rgba(19, 16, 13, 0.18));
                }
                .companyItem:focus-visible .companyLogoWrap {
                    transform: scale(1.12);
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
