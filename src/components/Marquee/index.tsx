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
    return (
        <div
            style={{
                position: 'relative',
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #f6f1e7, #f9f4ea)',
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '20px 0',
                borderRadius: '20px',
            }}
        >
            <div
                style={{
                    pointerEvents: 'none',
                    position: 'absolute',
                    inset: 0,
                    background:
                        'linear-gradient(90deg, rgba(246,241,231,0.9) 0%, rgba(246,241,231,0.6) 4%, rgba(246,241,231,0.2) 10%, rgba(246,241,231,0) 18%), linear-gradient(270deg, rgba(246,241,231,0.9) 0%, rgba(246,241,231,0.6) 4%, rgba(246,241,231,0.2) 10%, rgba(246,241,231,0) 18%)',
                    zIndex: 2,
                }}
            />
            <ScrollAnimation
                animateIn="slideInRight"
                animateOut="slideOutLeft"
                animateOnce={true}
            >
                <Marquee speed={200}>
                    {imageUrls.map((imageUrl, index) => (
                        <div key={index} style={{ padding: '18px 0' }}>
                            <Image
                                src={imageUrl}
                                alt={`Image${index + 1}`}
                                style={{ padding: '20px' }}
                                height={'110'}
                            />
                        </div>
                    ))}
                </Marquee>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn="slideInLeft"
                animateOut="slideOutRight animateOnce={true}"
            >
                <Marquee direction="right" speed={200}>
                    {imageUrls2.map((imageUrl, index) => (
                        <div key={index} style={{ padding: '18px 0' }}>
                            <Image
                                src={imageUrl}
                                alt={`Image${index + 1}`}
                                style={{ padding: '20px' }}
                                height={'110'}
                            />
                        </div>
                    ))}
                </Marquee>
            </ScrollAnimation>
        </div>
    )
}

export default CompanyMarquee
