import React from 'react'
import { Tabs, Tab } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledTabs = styled(({ ...props }: any) => (
    <Tabs
        {...props}
        TabIndicatorProps={{
            style: {
                height: '100%',
                borderRadius: '25px',
                zIndex: '+1',
                backgroundColor: 'white',
            },
        }}
    />
))({}) /* Pass an empty object as a default argument if necessary */

const StyledTab = styled(({ ...props }: any) => (
    <Tab disableRipple {...props} />
))(({ theme }) => ({
    height: '1rem',
    textTransform: 'none',
    minWidth: '0px',
    fontWeight: theme.typography.fontWeightRegular,
    padding: 15,
    fontSize: theme.typography.pxToRem(14),
    boxShadow: '2px black',
    '&.Mui-selected': {
        color: 'black',
        zIndex: '+2',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'grey',
    },
    '&:hover': {
        color: 'black',
    },
}))

export { StyledTabs, StyledTab }
