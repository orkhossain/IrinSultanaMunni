import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

export default function VerticalSlider() {
    return (
        <>
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper2"
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 1</SwiperSlide>
            </Swiper>
        </>
    )
}
