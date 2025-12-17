import React from 'react'
import { Tabs, Tab } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledTabs = styled(({ ...props }: any) => (
    <Tabs
        {...props}
        TabIndicatorProps={{
            style: {
                height: 'calc(100% - 8px)',
                top: '4px',
                borderRadius: '9999px',
                zIndex: 1,
                background:
                    'linear-gradient(120deg, rgba(255,255,255,0.5), rgba(255,255,255,0.18))',
                boxShadow:
                    '0 10px 30px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.35)',
                backdropFilter: 'blur(12px)',
            },
        }}
    />
))(({ theme }) => ({
    position: 'relative',
    minHeight: 52,
    borderRadius: '9999px',
    padding: '6px',
    background: 'rgba(255,255,255,0.07)',
    border: '1px solid rgba(255,255,255,0.16)',
    boxShadow: '0 18px 50px rgba(0,0,0,0.28)',
    backdropFilter: 'blur(16px)',
    '& .MuiTabs-indicator': {
        transition:
            'left 360ms cubic-bezier(0.22, 1, 0.36, 1), width 360ms cubic-bezier(0.22, 1, 0.36, 1), transform 360ms cubic-bezier(0.22, 1, 0.36, 1), opacity 200ms ease, background 200ms ease',
        willChange: 'left, width, transform, opacity',
    },
    '&:hover .MuiTabs-indicator': {
        opacity: 0.35,
        background:
            'linear-gradient(120deg, rgba(255,255,255,0.28), rgba(255,255,255,0.08))',
    },
    '& .MuiTabs-flexContainer': {
        gap: '8px',
    },
    [theme.breakpoints.down('sm')]: {
        minHeight: 44,
        padding: '6px',
        '& .MuiTabs-flexContainer': {
            gap: '6px',
        },
    },
}))

const StyledTab = styled(({ ...props }: any) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    height: '1rem',
    textTransform: 'none',
    minWidth: '0px',
    fontWeight: 400,
    letterSpacing: '0.02em',
    padding: '12px 18px',
    fontSize: theme.typography.pxToRem(13.5),
    color: 'rgba(0,0,0,0.82)',
    fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
    borderRadius: '9999px',
    transition: 'background-color 180ms ease, color 180ms ease',
    '&.Mui-selected': {
        color: '#0f172a',
        zIndex: 2,
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(255,255,255,0.08)',
    },
    '&:hover': {
        color: '#0f172a',
        backgroundColor: 'rgba(255,255,255,0.16)',
        borderRadius: '9999px',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '9px 14px',
        fontSize: theme.typography.pxToRem(12.5),
    },
}))

export { StyledTabs, StyledTab }
