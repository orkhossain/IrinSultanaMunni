import React from 'react'
import { Tabs, Tab } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledTabs = styled(Tabs)(({ theme }) => ({
    position: 'relative',
    minHeight: 52,
    borderRadius: '9999px',
    padding: '6px',
    overflow: 'hidden',
    background:
        'linear-gradient(145deg, rgba(255,255,255,0.28), rgba(255,255,255,0.10) 48%, rgba(255,255,255,0.20))',
    border: '1px solid rgba(255, 255, 255, 0.32)',
    boxShadow:
        'inset 0 1px 0 rgba(255,255,255,0.45), inset 0 -1px 0 rgba(255,255,255,0.10), 0 18px 50px rgba(0, 0, 0, 0.20)',
    backdropFilter: 'blur(24px) saturate(1.35)',
    WebkitBackdropFilter: 'blur(24px) saturate(1.35)',
    '& .MuiTabs-indicator': {
        display: 'none',
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
    color: 'rgba(255, 255, 255, 0.78)',
    fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
    borderRadius: '9999px',
    transition:
        'background-color 180ms ease, color 180ms ease, box-shadow 180ms ease, transform 180ms ease',
    '&.Mui-selected': {
        color: '#ffffff',
        background:
            'linear-gradient(145deg, rgba(255,255,255,0.30), rgba(255,255,255,0.13))',
        boxShadow:
            'inset 0 1px 0 rgba(255,255,255,0.48), inset 0 -1px 0 rgba(255,255,255,0.12), 0 8px 22px rgba(0, 0, 0, 0.18)',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(255, 255, 255, 0.18)',
    },
    '&:hover': {
        color: '#ffffff',
        backgroundColor: 'rgba(255, 255, 255, 0.16)',
        borderRadius: '9999px',
        transform: 'translateY(-1px)',
    },
    [theme.breakpoints.down('sm')]: {
        padding: '9px 14px',
        fontSize: theme.typography.pxToRem(12.5),
    },
}))

export { StyledTabs, StyledTab }
