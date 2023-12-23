import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Pagination, Navigation } from 'swiper/modules'

import { Scrollbar } from 'swiper/modules'

export default function Slider(props: any) {
    const { slidesData } = props

    return (
        <Swiper
            // pagination={{
            //   type: 'progressbar',
            //   clickable: true,
            // }}
            scrollbar={{
                hide: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation, Scrollbar]}
            className="mySwiper"
        >
            {slidesData.map((content: any, index: number) => (
                <SwiperSlide key={index}>{content}</SwiperSlide>
            ))}
        </Swiper>
    )
}
