import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './styles.css'
import { Pagination, Navigation } from 'swiper/modules'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'

export default function Slider(props: any) {
  const { slidesData } = props

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Swiper
      pagination={{
        type: 'progressbar',
        clickable: true,
      }}
      allowTouchMove={false}
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
