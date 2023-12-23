import React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectDictionary } from '@/slice/language'

export default function Content() {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('md'))
    const dict = useSelector(selectDictionary)
    const title = dict.Index?.title ?? ''

    return (
        <>
            <Box
                sx={{
                    width: '60vw',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'flex-end',
                    justifySelf: 'flex-start',
                    height: '70vh',
                }}
            >
                <Typography
                    variant={isMobile ? 'h4' : 'h3'}
                    style={{ fontFamily: 'Cambria' }}
                >
                    {title}
                </Typography>
            </Box>
        </>
    )
}

// <Card style={cardStyle}>
//   <CardMedia
//     component="img"
//     style={cardMediaStyle}
//     image="/flags/uk.webp"
//     alt="Live from space album cover"
//   />
//   <Slider
//     slidesData={[
//       <>
//         <CardContent style={cardContentStyle}>
//           <Typography component="div" variant="h5">
//             Benvenuto sul mio sito! Mi chiamo Munni!
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             color="text.secondary"
//             component="div"
//           >
//             Sono una mediatrice culturale professionale con 10 anni di
//             esperienza ed aiuto a creare ponti tra culture diverse, fornendo
//             supporto e facilitando la comunicazione. Posseggo una solida
//             comprensione delle culture, delle lingue e delle dinamiche
//             interculturali, particolarmente quelle sud asiatiche visto le
//             mie origini. La mia abilità nella mediazione culturale aiuta a
//             fare comprendere prevenire malintesi e a promuovere la
//             comprensione e la collaborazione tra le parti interessate. Ho
//             esperienza
//           </Typography>
//         </CardContent>
//       </>,
//       '',
//     ]}
//   />
// <Box
//   sx={{
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   }}
// />
// </Card>
