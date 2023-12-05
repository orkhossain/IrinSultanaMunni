import React from 'react'
import { Tabs, Tab } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledTabs = styled((props: any) => (
  <Tabs
    {...props}
    TabIndicatorProps={{
      style: {
        height: '100%',
        borderRadius: '25px',
        zIndex: '+1',
      },
    }}
  />
))()

const StyledTab = styled((props: any) => <Tab disableRipple {...props} />)(
  ({ theme }: any) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    color: 'grey',
    '&.Mui-selected': {
      color: '#fff',
      zIndex: '2',
    },
    '&.Mui-focusVisible': {
      backgroundColor: 'grey',
    },
    '&:hover': {
      color: 'black',
    },
  }),
)

export { StyledTabs, StyledTab }
