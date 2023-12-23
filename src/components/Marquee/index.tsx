import React from 'react'
import Image from 'next/image'
import Image1 from 'public/logos/Image1.webp'
import Image2 from 'public/logos/Image2.webp'
import Image3 from 'public/logos/Image3.webp'
import Image4 from 'public/logos/Image4.webp'
import Image5 from 'public/logos/Image5.webp'
import Image6 from 'public/logos/Image6.webp'
import Image7 from 'public/logos/Image7.webp'
import Image8 from 'public/logos/Image8.webp'
import Image9 from 'public/logos/Image9.webp'
import Image10 from 'public/logos/Image10.webp'
import Image11 from 'public/logos/Image11.webp'
import Image12 from 'public/logos/Image12.webp'
import Image13 from 'public/logos/Image13.webp'
import Image14 from 'public/logos/Image14.webp'
import Image15 from 'public/logos/Image15.webp'
import Image16 from 'public/logos/Image16.webp'
import Image17 from 'public/logos/Image17.webp'
import Image18 from 'public/logos/Image18.webp'
import Image19 from 'public/logos/Image19.webp'
import Image20 from 'public/logos/Image20.webp'
import Image21 from 'public/logos/Image21.webp'
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
        <div>
            <ScrollAnimation
                animateIn="slideInRight"
                animateOut="slideOutLeft"
                // animateOnce={true}
            >
                <Marquee speed={200}>
                    {imageUrls.map((imageUrl, index) => (
                        <div key={index} style={{ padding: '5vh 0vh 5vh 0vh' }}>
                            <Image
                                src={imageUrl}
                                alt={`Image${index + 1}`}
                                style={{ padding: '20px' }}
                                height={'150'}
                            />
                        </div>
                    ))}
                </Marquee>
            </ScrollAnimation>
            <ScrollAnimation
                animateIn="slideInLeft"
                animateOut="slideOutRight"
                // animateOnce={true}
            >
                <Marquee direction="right" speed={200}>
                    {imageUrls2.map((imageUrl, index) => (
                        <div key={index} style={{ padding: '5vh 0vh 5vh 0vh' }}>
                            <Image
                                src={imageUrl}
                                alt={`Image${index + 1}`}
                                style={{ padding: '20px' }}
                                height={'150'}
                            />
                        </div>
                    ))}
                </Marquee>
            </ScrollAnimation>
        </div>
    )
}

export default CompanyMarquee
