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
import { motion, useAnimationControls } from 'framer-motion'
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
    const bounceControls = useAnimationControls()
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
        bounceControls.set({ scale: 0.97 })
        bounceControls.start({
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 260,
                damping: 18,
            },
        })
    }, [bounceControls, count])

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.activeIndex !== count) {
            // Swiper will choose direction based on the new index; set a smooth duration.
            swiperRef.current.slideTo(count, 600)
        }
    }, [count])

    return (
        <>
            <motion.div
                initial={{ scale: 1 }}
                animate={bounceControls}
                style={{ borderRadius: '18px' }}
            >
                <Swiper
                    slidesPerView={1}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => handleChange(swiper.activeIndex)}
                    style={{
                        height: isMobile ? '100svh' : '100vh',
                        backgroundImage: `url(/countries/${count}.webp)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: isMobile ? '10% 1rem' : '9% 1.5rem',
                        alignItems: 'center',
                        transformOrigin: '0 0',
                        borderRadius: '18px',
                        border: '1px solid rgba(255,255,255,0.12)',
                        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
                        overflow: 'hidden',
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
            </motion.div>
        </>
    )
}

export default CenteredTabs
