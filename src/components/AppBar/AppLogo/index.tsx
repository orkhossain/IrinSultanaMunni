import React, { useState, useRef } from 'react'
import { Box, Slide, Typography } from '@mui/material'

const AppLogo = () => {
    const [hovered, setHovered] = useState(false)
    const containerRef = useRef<HTMLElement>(null)

    return (
        <Box
            width="auto"
            display="flex"
            justifyContent="space-between"
            alignItems={'center'}
            ref={containerRef}
        >
            <Typography
                fontWeight={500}
                color="black"
                fontFamily="'Times New Roman', Times, serif"
                variant="h5"
                component="div"
                sx={{ flexGrow: 1 }}
            >
                <span
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    @Irin
                </span>
            </Typography>

            <Slide
                direction="right"
                container={containerRef.current}
                in={hovered}
                style={{ zIndex: -1 }}
            >
                <Typography
                    fontWeight={500}
                    color="black"
                    fontFamily="'Times New Roman', Times, serif"
                    variant="h5"
                    component="div"
                    sx={{ flexGrow: 1, marginLeft: 1 }}
                >
                    <span> Sultana Munni</span>
                </Typography>
            </Slide>
        </Box>
    )
}

export default AppLogo
