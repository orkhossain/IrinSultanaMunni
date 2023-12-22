import React from 'react'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import ScrollAnimation from 'react-animate-on-scroll'
import CustomCursor from '../CustomCursor'

const QuoteComponent = () => {
  return (
    <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut">
      <section>
        {/* <CustomCursor /> */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="50vh"
          padding={'30px'}
          className={'container'}
          cursor-class="arrow"
        >
          <Typography
            variant="h3"
            className="image-container"
            sx={{
              fontFamily: "'Parisienne', cursive, 'Pinyon Script', cursive", // Applying 'Parisienne' and fallback 'Pinyon Script'
            }}
          >
            &quot;To have another language <br></br> &nbsp; &nbsp; &nbsp; &nbsp;
            is to possess a second soul.&quot; &nbsp;<br></br> &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;- &nbsp; Charlemagne
          </Typography>
        </Box>
      </section>
    </ScrollAnimation>
  )
}

export default QuoteComponent
