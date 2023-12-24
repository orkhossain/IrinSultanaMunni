import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Scrollbar, Navigation } from 'swiper/modules'
import { useMediaQuery, useTheme } from '@mui/material'

export default function Slider(props: any) {
    const { slidesData } = props
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'))

    return (
        <Swiper
            width={isMobile ? (isSmall ? 500 : 800) : 1000}
            height={200}
            modules={[Navigation]}
            className="mySwiper"
        >
            {slidesData.map((content: any, index: number) => (
                <SwiperSlide key={index}>{content}</SwiperSlide>
            ))}
        </Swiper>
    )
}
