import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{
      sx: {          
         height: '100%',
         borderRadius:'25px',
         zIndex:'+1'
      }
    }}  />
))();

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }: any) => ({
  textTransform: 'none',
  fontWeight: theme.typography.fontWeightRegular,
  fontSize: theme.typography.pxToRem(15),
  color: 'black',
  '&.Mui-selected': {
    color: '#fff',
    zIndex:'2'
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'grey',
  },
}));

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);
  const languages = ['Italiano','English','বাংলা','اردو','हिन्दी']

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
      <Box zIndex={1}>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
          sx={{backgroundColor:'white',padding:'2px',borderRadius:'25px'}}
        >
  {languages.map((language, index) => (
            <StyledTab key={index} label={language} />
          ))}

        </StyledTabs>
      </Box>
    </div>
  );
}
