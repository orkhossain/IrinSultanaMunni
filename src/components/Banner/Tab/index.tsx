'use client'
import React, { useRef, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import { selectCount, setValue } from '@/slice/count'
import { useSelector, useDispatch } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import CustomTabPanel from './TabContent'
import Content from './TabContent/Content'
import exportData from '@/global/objects/languages'
import { selectLanguage, setDictionary, setLanguage } from '@/slice/language'
import { getDictionary } from '@/i18n/get-dictionary'
import { motion, useAnimationControls } from 'framer-motion'

const AutoPlaySwipeableViewsComponent = SwipeableViews

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
        bounceControls.start({
            scale: [0.97, 1.02, 1],
            transition: {
                duration: 0.55,
                type: 'spring',
                stiffness: 260,
                damping: 18,
            },
        })
    }, [bounceControls, count])

    return (
        <>
            <motion.div
                initial={{ scale: 1 }}
                animate={bounceControls}
                style={{ borderRadius: '18px' }}
            >
                <AutoPlaySwipeableViewsComponent
                    axis={'x'}
                    resistance={true}
                    index={count}
                    enableMouseEvents={true}
                    onChangeIndex={handleChange}
                    style={{
                        height: isMobile ? '100svh' : '100vh',
                        backgroundImage: `url(/countries/${count}.webp)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: isMobile ? '10% 1rem' : '9% 1.5rem',
                        transition: 'background 260ms ease-in-out',
                        alignItems: 'center',
                        transformOrigin: '0 0',
                        borderRadius: '18px',
                        border: '1px solid rgba(255,255,255,0.12)',
                        boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.06)',
                        overflow: 'hidden',
                    }}
                >
                    {array.map((language, index) => (
                        <CustomTabPanel value={count} index={index} key={index}>
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
                    ))}
                </AutoPlaySwipeableViewsComponent>
            </motion.div>
        </>
    )
}

export default CenteredTabs
