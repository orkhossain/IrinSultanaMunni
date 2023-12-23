'use client'
import React, { useRef, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import { selectCount, setValue } from '@/slice/count'
import { useSelector, useDispatch } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import CustomTabPanel from '../TabContent'
import Content from '../TabContent/Content'
import exportData from '@/global/objects/languages'
import { selectLanguage, setDictionary, setLanguage } from '@/slice/language'
import { getDictionary } from '@/get-dictionary'

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

    return (
        <>
            <AutoPlaySwipeableViewsComponent
                axis={'x'}
                resistance={true}
                index={count}
                enableMouseEvents={true}
                onChangeIndex={handleChange}
                style={{
                    height: '100vh',
                    backgroundImage: `url(/countries/${count}.webp)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    padding: '10% 2vh',
                    transition: ' background 100ms ease-in-out 300ms',
                    alignItems: 'center',
                    transformOrigin: '0 0',
                }}
            >
                {array.map((language, index) => (
                    <CustomTabPanel value={count} index={index} key={index}>
                        <Content />
                    </CustomTabPanel>
                ))}
            </AutoPlaySwipeableViewsComponent>
        </>
    )
}

export default CenteredTabs
