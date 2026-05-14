'use client'
import React, { useRef, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import { selectCount, setValue } from '@/slice/count'
import { useSelector, useDispatch } from 'react-redux'
import CustomTabPanel from './TabContent'
import Content from './TabContent/Content'
import HeroThreeEffect from '../HeroThreeEffect'
import exportData from '@/global/objects/languages'
import { selectLanguage, setDictionary, setLanguage } from '@/slice/language'
import { getDictionary } from '@/i18n/get-dictionary'
import {
    AnimatePresence,
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'

function CenteredTabs() {
    const heroRef = useRef<HTMLDivElement | null>(null)
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
    const shouldReduceMotion = useReducedMotion()
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    })
    const sceneY = useTransform(scrollYProgress, [0, 1], [0, 120])
    const sceneScale = useTransform(scrollYProgress, [0, 1], [1.03, 1.14])
    const sceneOpacity = useTransform(scrollYProgress, [0, 0.82], [1, 0.42])
    const contentY = useTransform(scrollYProgress, [0, 1], [0, -72])
    const contentScale = useTransform(scrollYProgress, [0, 1], [1, 0.94])
    const contentOpacity = useTransform(scrollYProgress, [0, 0.72], [1, 0])

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
            <motion.div>
                <div
                    ref={heroRef}
                    style={{
                        position: 'relative',
                        height: isMobile ? '100svh' : '100vh',
                        borderRadius: 0,
                        overflow: 'hidden',
                        border: 'none',
                        boxShadow: 'none',
                    }}
                >
                    <AnimatePresence mode="sync" initial={false}>
                        <motion.div
                            key={count}
                            initial={
                                shouldReduceMotion ? false : { opacity: 0 }
                            }
                            animate={{ opacity: 1 }}
                            exit={
                                shouldReduceMotion ? undefined : { opacity: 0 }
                            }
                            transition={{
                                duration: shouldReduceMotion ? 0 : 0.18,
                                ease: 'easeInOut',
                            }}
                            style={{
                                position: 'absolute',
                                inset: '-8%',
                                backgroundImage: `url(/countries/${count}.webp)`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundColor: '#f7f8fb',
                                y: shouldReduceMotion ? 0 : sceneY,
                                scale: shouldReduceMotion ? 1 : sceneScale,
                                opacity: shouldReduceMotion ? 1 : sceneOpacity,
                                willChange: shouldReduceMotion
                                    ? 'auto'
                                    : 'transform, opacity',
                            }}
                        />
                    </AnimatePresence>
                    <motion.div
                        aria-hidden="true"
                        style={{
                            position: 'absolute',
                            inset: 0,
                            background:
                                'linear-gradient(90deg, rgba(4,18,9,0.72) 0%, rgba(4,18,9,0.34) 48%, rgba(4,18,9,0.14) 100%)',
                            opacity: shouldReduceMotion ? 1 : sceneOpacity,
                            pointerEvents: 'none',
                        }}
                    />
                    <HeroThreeEffect />
                    <motion.div
                        style={{
                            height: '100%',
                            position: 'relative',
                            zIndex: 2,
                            y: shouldReduceMotion ? 0 : contentY,
                            scale: shouldReduceMotion ? 1 : contentScale,
                            opacity: shouldReduceMotion ? 1 : contentOpacity,
                            willChange: shouldReduceMotion
                                ? 'auto'
                                : 'transform, opacity',
                        }}
                    >
                        <Swiper
                            slidesPerView={1}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            onSlideChange={(swiper) =>
                                handleChange(swiper.activeIndex)
                            }
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
                                            initial={
                                                shouldReduceMotion
                                                    ? false
                                                    : {
                                                          scale: 0.96,
                                                          opacity: 0.9,
                                                      }
                                            }
                                            animate={{ scale: 1, opacity: 1 }}
                                            transition={{
                                                type: 'spring',
                                                stiffness: shouldReduceMotion
                                                    ? 1000
                                                    : 240,
                                                damping: shouldReduceMotion
                                                    ? 100
                                                    : 18,
                                                duration: shouldReduceMotion
                                                    ? 0
                                                    : undefined,
                                            }}
                                        >
                                            <Content />
                                        </motion.div>
                                    </CustomTabPanel>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
}

export default CenteredTabs
