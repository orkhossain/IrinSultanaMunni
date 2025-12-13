import React from 'react'
import NextLink from 'next/link'
import Image from 'next/image'
import { Box } from '@mui/material'
import logo from '@/assets/logo.png'

const AppLogo = () => {
    return (
        <Box
            component={NextLink}
            href="/"
            sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                lineHeight: 0,
            }}
        >
            <Image
                src={logo}
                alt="Irin Sultana Munni logo"
                width={455}
                height={549}
                priority
                style={{
                    height: '170px',
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                    margin: -10,
                }}
            />
        </Box>
    )
}

export default AppLogo
