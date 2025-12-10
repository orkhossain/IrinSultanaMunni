import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'

const ContactMeChat = () => {
    const handleMailClick = () => {
        window.location.href = 'mailto:irin.munni78@gmail.com'
    }

    const dict = useSelector(selectDictionary)
    const contact = dict.Index?.contact ?? ''
    const question = dict.Index?.question ?? ''

    return (
        <>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: { xs: 'flex-start', md: 'center' },
                    justifyContent: 'space-between',
                    gap: { xs: 2, md: 3 },
                    px: { xs: 3, md: 6 },
                    py: { xs: 3, md: 3.5 },
                    background:
                        'linear-gradient(135deg, rgba(245,237,223,0.94), rgba(234,215,190,0.9))',
                    borderTop: '1px solid rgba(145,80,50,0.12)',
                    borderBottom: '1px solid rgba(145,80,50,0.12)',
                }}
            >
                <Typography
                    variant="h6"
                    sx={{
                        fontFamily: "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
                        fontWeight: 500,
                        color: '#241a14',
                        letterSpacing: '-0.01em',
                    }}
                >
                    {question}
                </Typography>
                <Button
                    variant="contained"
                    onClick={handleMailClick}
                    endIcon={<EmailOutlinedIcon />}
                    sx={{
                        backgroundColor: '#241a14',
                        color: '#fff',
                        borderRadius: '12px',
                        px: { xs: 2.5, md: 3 },
                        py: 1,
                        textTransform: 'none',
                        fontWeight: 600,
                        letterSpacing: '0.02em',
                        boxShadow: '0 12px 30px rgba(0,0,0,0.14)',
                        '&:hover': { backgroundColor: '#1a120d' },
                    }}
                >
                    {contact}
                </Button>
            </Box>
        </>
    )
}

export default ContactMeChat
