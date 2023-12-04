import React from 'react';
import { SwipeableDrawer, Box, List, ListItem, ListItemText } from '@mui/material';
import Image from 'next/image';
import Image1 from '@/assets/loghi/Image1.webp'
import Image2 from '@/assets/loghi/Image2.webp'
import Image3 from '@/assets/loghi/Image3.webp'
import Image4 from '@/assets/loghi/Image4.webp'
import Image5 from '@/assets/loghi/Image5.webp'
import Image6 from '@/assets/loghi/Image6.webp'
import Image7 from '@/assets/loghi/Image7.webp'
import Image8 from '@/assets/loghi/Image8.webp'
import Image9 from '@/assets/loghi/Image9.webp'
import Image10 from '@/assets/loghi/Image10.webp'
import Marquee from "react-fast-marquee";


const imageUrls = [
    Image1 ,
    Image2 ,
    Image3 ,
    Image4 ,
    Image5 ,
    Image6 ,
    Image7 ,
    Image8 ,
    Image9 ,
    Image10 
]
const CompanyMarquee = () => {
  return (
    <>
    <Marquee
    speed={200}
    >
    {imageUrls.map((imageUrl, index) => (
        <div key={index}>       
         <Image src={imageUrl} alt={`Image${index + 1}`} style={{ padding: '20px' }}  height={'150'}/>
        </div>
          ))}
  </Marquee>
  <Marquee
  direction='right'
    speed={200}
    >
    {imageUrls.map((imageUrl, index) => (
        <div key={index}>       
         <Image src={imageUrl} alt={`Image${index + 1}`} style={{ padding: '20px' }}  height={'150'}/>
        </div>
          ))}
  </Marquee>

    </>

  );
};

export default CompanyMarquee;
