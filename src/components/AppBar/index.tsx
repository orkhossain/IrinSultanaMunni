'use client'

import React from 'react'
import { AppBar, Toolbar, Slide } from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import ListItems from './ListItems'

interface Props {
  window?: () => Window
  children?: React.ReactElement
}

function HideOnScroll(props: Props) {
  const { children, window } = props

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true, // Ensures immediate hiding/showing on scroll
    threshold: 0, // Adjust as needed; 0 means trigger on any scroll movement
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
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
            <Toolbar>
              <ListItems />
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </header>
    </>
  )
}
