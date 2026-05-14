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
                        'linear-gradient(90deg, rgba(239,246,236,0.98) 0%, rgba(239,246,236,0.68) 7%, rgba(239,246,236,0.16) 18%, rgba(239,246,236,0) 28%), linear-gradient(270deg, rgba(239,246,236,0.98) 0%, rgba(239,246,236,0.68) 7%, rgba(239,246,236,0.16) 18%, rgba(239,246,236,0) 28%)',
                    zIndex: 2,
                }}
            />
            <div className="marqueeHeader">
                <div className="marqueeKicker" />
                <div className="marqueeTitle">{marqueeTitle}</div>
                <div className="marqueeSubtitle">{marqueeSubtitle}</div>
            </div>
            <div className="marqueeRows">
                <Marquee
                    speed={marqueeSpeed}
                    pauseOnHover
                    pauseOnClick
                    gradient={false}
                    autoFill
                >
                    {imageUrls.map((imageUrl, index) => (
                        <div key={index} className="companyItem" tabIndex={0}>
                            <span className="companyLogoWrap">
                                <Image
                                    src={imageUrl}
                                    alt={`Collaboration logo ${index + 1}`}
                                    height={logoHeight}
                                />
                            </span>
                        </div>
                    ))}
                </Marquee>
                <Marquee
                    direction="right"
                    speed={marqueeSpeed}
                    pauseOnHover
                    pauseOnClick
                    gradient={false}
                    autoFill
                >
                    {imageUrls2.map((imageUrl, index) => (
                        <div key={index} className="companyItem" tabIndex={0}>
                            <span className="companyLogoWrap">
                                <Image
                                    src={imageUrl}
                                    alt={`Collaboration logo ${index + 11}`}
                                    height={logoHeight}
                                />
                            </span>
                        </div>
                    ))}
                </Marquee>
            </div>
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
                        rgba(239, 246, 236, 0) 0%,
                        rgba(213, 229, 205, 0.42) 20%,
                        rgba(229, 239, 222, 0.72) 52%,
                        rgba(213, 229, 205, 0.42) 82%,
                        rgba(239, 246, 236, 0) 100%
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
                    background: rgba(61, 103, 67, 0.34);
                    margin: 0 auto;
                }
                .marqueeTitle {
                    font-family: 'Fancy Cut Pro', 'Cambria', 'Georgia', serif;
                    font-weight: 600;
                    font-style: italic;
                    letter-spacing: -0.02em;
                    color: #17351f;
                    font-size: 4.1rem;
                    line-height: 1.15;
                }
                .marqueeSubtitle {
                    font-family: 'Fancy Cut Pro', 'Cambria', 'Georgia', serif;
                    font-weight: 400;
                    font-style: italic;
                    letter-spacing: 0.005em;
                    color: rgba(47, 70, 52, 0.9);
                    font-size: 1.25rem;
                    line-height: 1.6;
                    max-width: 780px;
                    margin: 0 auto;
                }
                .marqueeRows {
                    position: relative;
                    z-index: 1;
                    display: grid;
                    gap: 14px;
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
                    padding: 18px 22px;
                    margin: 0 10px;
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 14px;
                    outline: none;
                    position: relative;
                    min-width: 190px;
                    min-height: 126px;
                    background: rgba(250, 253, 248, 0.82);
                    border: 1px solid rgba(72, 112, 76, 0.12);
                    box-shadow: 0 14px 34px rgba(34, 68, 42, 0.07);
                    transform: translateZ(0);
                    will-change: transform;
                    transition:
                        transform 220ms ease,
                        border-color 220ms ease,
                        box-shadow 220ms ease,
                        background-color 220ms ease;
                }
                .companyItem:focus-visible {
                    box-shadow: 0 0 0 3px rgba(65, 99, 68, 0.22);
                }
                @media (max-width: 600px) {
                    .companyItem {
                        padding: 14px 18px;
                        min-width: 148px;
                        min-height: 96px;
                    }
                }
                .companyLogoWrap {
                    display: inline-flex;
                    transform-origin: center;
                    will-change: transform, filter;
                    transition:
                        transform 240ms ease,
                        filter 240ms ease;
                }
                .companyItem:hover {
                    z-index: 3;
                    transform: translateY(-3px);
                    background: rgba(255, 255, 255, 0.95);
                    border-color: rgba(61, 103, 67, 0.2);
                    box-shadow: 0 18px 42px rgba(34, 68, 42, 0.12);
                }
                .companyItem:hover .companyLogoWrap {
                    transform: scale(1.06);
                    filter: drop-shadow(0 10px 18px rgba(34, 68, 42, 0.14));
                }
                .companyItem:focus-visible .companyLogoWrap {
                    transform: scale(1.04);
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
