import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery } from '@mui/material';
import Contact from './Contact';
import './Gallery.css';
import Logo from "../assert/Logo.jpeg";

// Define your theme
const theme = createTheme();

export default function Gallery() {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const rowHeight = 350;

  return (
    <ThemeProvider theme={theme}>
      <div >
        <div className='Gallery' id="gallery" style={{ paddingTop: "80px" }}>
          <ImageList sx={{ width: '100%', height: 900 }} cols={isSmallScreen ? 1 : 4} rowHeight={rowHeight}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  style={{ cursor: 'pointer', objectFit: 'cover' }}
                  onMouseOver={(e) => e.currentTarget.style.filter = 'brightness(0.6)'}
                  onMouseOut={(e) => e.currentTarget.style.filter = 'brightness(1)'}
                />
              </ImageListItem>
            ))}
          </ImageList>
        </div>
        <Contact />
      </div>
    </ThemeProvider>
  );
}
const itemData = [
 
  {
    img: 'https://thumbs.dreamstime.com/b/visiting-friend-sick-hospital-room-male-female-medical-care-treatment-vector-96494925.jpg',
    title: 'Hospital Visit',
  },
  {
    img: 'https://faithgateway.com/cdn/shop/articles/FG_Blog_900x680_size-praying-hands.png?v=1683744070',
    title: 'Prayer',
  },
  {
    img: 'https://nohofumc.org/wp-content/uploads/2019/08/h2-img-2.jpg',
    title: 'Bible',
  },
  {
    img: 'https://lead.thyrocare.com/wp-content/uploads/2021/07/Corporate.png',
    title: 'Charity',
  },
  {
    img: 'https://billelliff.org/cdn/shop/articles/Praying_group_2048x.jpg?v=1631884312',
    title: 'Prayer',
  },
  {
    img: 'https://thumbs.dreamstime.com/b/charity-word-cloud-heart-concept-56405290.jpg',
    title: 'Heart',
  },
  {
    img: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC47KLgtzYFOVQeEi_yXMPNKq_gxVha9eA0A&s',
    title: 'Logo',
  },
 
  {
    img: 'https://dl0.creation.com/fpimages/10648.jpg',
    title: 'Crown',
  },
  {
    img: 'https://t4.ftcdn.net/jpg/04/55/95/09/360_F_455950995_rYNmzNeMBeBNtuC46Ed85dP9vwoSdyp1.jpg',
    title: 'Awareness',
  },
  {
    img: 'https://static.vecteezy.com/system/resources/thumbnails/022/864/702/small_2x/a-wooden-cross-on-the-top-of-mountain-ai-generated-artwork-photo.jpg',
    title: 'Cross',
  },

];
