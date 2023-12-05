import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Typography color="black">{children}</Typography>
        </Box>
      )}
    </div>
  )
}

export default CustomTabPanel
