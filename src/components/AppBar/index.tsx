'use client'

import React from 'react'
import { AppBar, Toolbar, Slide } from '@mui/material'
import ListItems from './ListItems'

interface Props {
  window?: () => Window
  children?: React.ReactElement
}

function HideOnScroll(props: Props) {
  const { children } = props
  const [show, setShow] = React.useState(true)
  const lastY = React.useRef(0)

  React.useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY
      const nearTop = current < 12
      const scrollingUp = current < lastY.current
      setShow(scrollingUp || nearTop)
      lastY.current = current
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Slide appear={false} direction="down" in={show}>
      {children!}
    </Slide>
  )
}

export default function HideAppBar(props: Props) {
  return (
    <>
      <header>
        <HideOnScroll {...props}>
          <AppBar sx={{ boxShadow: 'none', backgroundColor: 'transparent' }}>
            <Toolbar
              sx={{
                fontFamily:
                  "'Fancy Cut Pro', 'Cambria', 'Georgia', serif",
              }}
            >
              <ListItems />
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </header>
    </>
  )
}
