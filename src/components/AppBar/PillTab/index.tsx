'use client'
import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { setValue, selectCount } from '../../../slice/count'
import { selectLanguage, setLanguage } from '@/slice/language'
import exportData from '@/global/objects/languages'
import { fetchDictionary } from '@/slice/language/fetch'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import { useNavLight } from '@/hooks/useNavLight'

export default function PillTab() {
    const { languages, flags } = exportData
    const count = useSelector(selectCount)
    const dispatch = useDispatch()
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const isLight = useNavLight()

    const flagArray = Object.keys(flags)
    const languageArray = Object.keys(languages)
    const array = isMobile ? flagArray : languageArray

    const lan = useSelector(selectLanguage)
    useEffect(() => {
        dispatch(fetchDictionary(lan))
    }, [dispatch, lan])

    const handleChange = (index: number) => {
        dispatch(setValue(index))
        dispatch(setLanguage(flags[array[index]] || languages[array[index]]))
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
                style={{
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    background:
                        'linear-gradient(145deg, rgba(255,255,255,0.18), rgba(255,255,255,0.07) 48%, rgba(255,255,255,0.12))',
                    backdropFilter: 'blur(32px) saturate(1.5)',
                    WebkitBackdropFilter: 'blur(32px) saturate(1.5)',
                    border: '1px solid rgba(255,255,255,0.28)',
                    borderRadius: '9999px',
                    padding: isMobile ? '5px' : '6px',
                    boxShadow:
                        'inset 0 1.5px 0 rgba(255,255,255,0.35), 0 12px 40px rgba(0,0,0,0.18)',
                    gap: 0,
                }}
            >
                {array.map((label, index) => (
                    <button
                        key={label}
                        onClick={() => handleChange(index)}
                        style={{
                            position: 'relative',
                            zIndex: 1,
                            cursor: 'pointer',
                            border: 'none',
                            background: 'transparent',
                            borderRadius: '9999px',
                            padding: isMobile ? '8px 13px' : '10px 20px',
                            color:
                                index === count
                                    ? (isLight ? '#ffffff' : '#0f2518')
                                    : (isLight ? 'rgba(255,255,255,0.48)' : 'rgba(15,37,24,0.42)'),
                            fontFamily:
                                "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                            fontSize: isMobile ? '13px' : '14.5px',
                            letterSpacing: '0.02em',
                            fontWeight: 400,
                            transition: 'color 220ms ease',
                            whiteSpace: 'nowrap',
                            lineHeight: 1,
                        }}
                    >
                        {index === count && (
                            <motion.span
                                layoutId="lang-pill"
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    borderRadius: '9999px',
                                    background: isLight
                                        ? 'linear-gradient(145deg, rgba(255,255,255,0.32), rgba(255,255,255,0.14))'
                                        : 'rgba(15,37,24,0.09)',
                                    boxShadow: isLight
                                        ? 'inset 0 1px 0 rgba(255,255,255,0.50), inset 0 -1px 0 rgba(255,255,255,0.12), 0 6px 18px rgba(0,0,0,0.16)'
                                        : 'inset 0 1px 0 rgba(255,255,255,0.6), 0 2px 8px rgba(0,0,0,0.06)',
                                    zIndex: -1,
                                }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 300,
                                    damping: 30,
                                    mass: 0.8,
                                }}
                            />
                        )}
                        {label}
                    </button>
                ))}
            </div>
        </div>
    )
}
