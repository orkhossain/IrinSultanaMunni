'use client'
import React, { useRef, useState } from 'react'

import { Pagination, Navigation, EffectFade } from 'swiper/modules'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import { selectCount, setValue } from '@/slice/count'
import { useSelector, useDispatch } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import CustomTabPanel from '../TabContent'
import Content from '../TabContent/Content'
const AutoPlaySwipeableViewsComponent = SwipeableViews

function CenteredTabs() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const languages = !isMobile
    ? ['Italiano', 'English', 'বাংলা', 'اردو', 'हिन्दी']
    : ['🇮🇹', '🇬🇧', '🇧🇩', '🇵🇰', '🇮🇳']

  const handleChange = (newValue: number) => {
    dispatch(setValue(newValue))
  }

  return (
    <>
      <AutoPlaySwipeableViewsComponent
        axis={'x'}
        resistance={true}
        index={count}
        enableMouseEvents={true}
        onChangeIndex={handleChange}
        style={{
          minWidth: '90vw',
          display: 'block',
          height: '100vh',
          justifyContent: 'center',
          backgroundImage: `url(/countries/${count}.webp)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '10% 2vh',
          transition: ' background 100ms ease-in-out 300ms',
          alignItems: 'center',
          transformOrigin: '0 0',
        }}
      >
        {languages.map((language, index) => (
          <CustomTabPanel value={count} index={index} key={index}>
            <Content />
          </CustomTabPanel>
        ))}
      </AutoPlaySwipeableViewsComponent>
    </>
  )
}

export default CenteredTabs
