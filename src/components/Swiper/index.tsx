import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './styles.css'
import { Pagination, Navigation } from 'swiper/modules'

export default function Slider(props: any) {
  const { slidesData } = props
  return (
    <Swiper
      pagination={{
        type: 'progressbar',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      {slidesData.map((content: any, index: number) => (
        <SwiperSlide key={index}>{content}</SwiperSlide>
      ))}
    </Swiper>
  )
}
