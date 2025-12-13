import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination } from 'swiper/modules'

export default function Slider(props: any) {
    const { slidesData } = props

    return (
        <Swiper
            style={{ width: '100%', height: '100%', display: 'flex' }}
            modules={[Navigation, Pagination]}
            pagination={{ clickable: true }}
            className="mySwiper"
        >
            {slidesData.map((content: any, index: number) => (
                <SwiperSlide key={index}>{content}</SwiperSlide>
            ))}
        </Swiper>
    )
}
