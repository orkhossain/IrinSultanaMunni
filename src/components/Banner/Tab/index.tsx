'use client'
import React, { useRef, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import { selectCount, setValue } from '@/slice/count'
import { useSelector, useDispatch } from 'react-redux'
import CustomTabPanel from './TabContent'
import Content from './TabContent/Content'
import exportData from '@/global/objects/languages'
import { selectLanguage, setDictionary, setLanguage } from '@/slice/language'
import { getDictionary } from '@/i18n/get-dictionary'
import { AnimatePresence, motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'


function CenteredTabs() {
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const { languages, flags } = exportData

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))

    const flagArray = Object.keys(flags)
    const languagArray = Object.keys(languages)
    const lan = useSelector(selectLanguage)

    const array = isMobile ? flagArray : languagArray
    const swiperRef = useRef<SwiperType | null>(null)

    const handleChange = (newValue: number) => {
        dispatch(setValue(newValue))
        dispatch(
            setLanguage(flags[array[newValue]] || languages[array[newValue]])
        )
    }

    useEffect(() => {
        async function fetchDictionary() {
            try {
                const dictionary = await getDictionary(lan)
                dispatch(setDictionary(dictionary))
            } catch (error) {
                console.error('Error fetching dictionary:', error)
            }
        }

        fetchDictionary()
    }, [dispatch, lan])

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.activeIndex !== count) {
            // Swiper will choose direction based on the new index; set a smooth duration.
            swiperRef.current.slideTo(count, 600)
        }
    }, [count])

    return (
        <>
            <motion.div style={{ borderRadius: '18px' }}>
                <div
                    style={{
                        position: 'relative',
                        height: isMobile ? '100svh' : '100vh',
                        borderRadius: '18px',
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.12)',
                        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
                        backgroundColor: '#f7f8fb',
                    }}
                >
                    <AnimatePresence mode="sync" initial={false}>
                        <motion.div
                            key={count}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.18, ease: 'easeInOut' }}
                            style={{
                                position: 'absolute',
                                inset: 0,
                                backgroundImage: `url(/countries/${count}.webp)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundColor: '#f7f8fb',
                            }}
                        />
                    </AnimatePresence>
                    <Swiper
                        slidesPerView={1}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        onSlideChange={(swiper) => handleChange(swiper.activeIndex)}
                        style={{
                            height: '100%',
                            padding: isMobile ? '10% 1rem' : '9% 1.5rem',
                            alignItems: 'center',
                            transformOrigin: '0 0',
                            position: 'relative',
                        }}
                    >
                        {array.map((language, index) => (
                            <SwiperSlide key={index}>
                                <CustomTabPanel value={count} index={index}>
                                    <motion.div
                                        initial={{ scale: 0.96, opacity: 0.9 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 240,
                                            damping: 18,
                                        }}
                                    >
                                        <Content />
                                    </motion.div>
                                </CustomTabPanel>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </motion.div>
        </>
    )
}

export default CenteredTabs
