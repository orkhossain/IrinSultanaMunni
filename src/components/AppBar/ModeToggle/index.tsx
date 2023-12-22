import * as React from 'react'
import { IconButton } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'

const ModeToggle = () => {
  const [darkMode, setDarkMode] = React.useState(false)

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <IconButton onClick={handleDarkModeToggle}>
        {darkMode ? (
          <Brightness4Icon sx={{ color: 'black' }} />
        ) : (
          <Brightness7Icon sx={{ color: 'grey' }} />
        )}
      </IconButton>
    </>
  )
}

export default ModeToggle
