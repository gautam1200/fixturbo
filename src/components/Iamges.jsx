import React, { useState, useEffect } from 'react';
import Header from './Header';
import ScrollToTop from './Scrollbuteon';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import Righticon from '@mui/icons-material/ChevronRight';
import car from '../Images/topabout.png';
import Footers from './Footer';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Images = () => {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get('https://generateapi.onrender.com/api/gallery', {
      headers: {
        Authorization: 'J0qXPNCpYKFocI8Z',
      },
    })
      .then((res) => {
        console.log("API response received");
        setDatas(res.data.Data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []); // empty dependency array to run only once on mount

  return (
    <>
      <Header />
      <ScrollToTop />
      <Box
        data-aos="zoom-in-up"
        sx={{
          width: '100%',
          backgroundColor: '#171717',
          gap: '20px',
        }}
      >
        <Box
          sx={{
            paddingTop: '80px',
            width: '85%',
            margin: 'auto',
            justifyContent: 'right',
            display: 'flex',
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              width: { xs: '100%', sm: '100%', md: '50%' },
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: '26px', sm: '32px', md: '36px' },
                fontWeight: 'bold',
                color: 'white',
                fontFamily: 'math',
              }}
            >
              Gallery
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: '18px', sm: '18px', md: '20px' },
                color: 'white',
                fontFamily: 'math',
                margin: '10px 0',
              }}
            >
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: { xs: '18px', sm: '18px', md: '20px' },
                }}
              >
                Home &nbsp;
              </Link>
              <Righticon sx={{ fontSize: '24px', verticalAlign: 'middle' }} />
              &nbsp; Gallery
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: '100%', sm: '100%', md: '50%' },
            }}
          >
            <img src={car} alt="car" width="100%" />
          </Box>
        </Box>
      </Box>

      <Box
        data-aos="zoom-in-up"
        sx={{
          width: '100%',
          padding: '50px 0 100px 0',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',

        }}
      >
        <Box
          data-aos="zoom-in-up"
          sx={{
            width: { xs: '80%', sm: '80%', md: '60%', lg: '50%' },
            margin: 'auto',
            textAlign: 'center',
          }}>
          
          <Typography sx={
            {
              fontSize: { xs: '31px', sm: '46px', md: '56px' },
              fontWeight: 'bold',
              textAlign: 'center',
              lineHeight: '1.1',
              fontFamily: 'math',
              '&:hover': {
                color: 'red',
                transition: '0.5s',
              }
            }
          }>All Image</Typography>
        </Box>
      <Box
        data-aos="zoom-in-up"
        sx={{
          width: '85%',
          display: 'flex',
          margin: 'auto',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          padding: '30px 0',
          rowGap: '15px',
        }}
      >
        {datas.map((item, index) => (
          <Box
            data-aos="zoom-in-up"
            key={index}
            className="Gallery-box"
            sx={{
              width: { xs: '100%', sm: '32%', lg: '32%' },
        
              overflow: 'hidden',
              boxSizing: 'border-box',
              position: 'relative',
              borderRadius: '30px',

            }}
          >
            <img className="Galleryimg" src={item.image[0]} alt="" width="100%" height={"100%"}   backgroundSize={'cover'} />
            <VisibilityIcon
              className="Galleryimg-icon"
              sx={{
                padding: '10px',
                backgroundColor: 'white',
                borderRadius: '50%',
                color: 'red',
                fontSize: '30px',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 5,
                transition: 'all 0.5s',
                display: 'none',
              }}
            />
          </Box>
        ))}
      </Box>
    
      </Box>

      <Box data-aos="zoom-in-up">
        <Footers />
      </Box>
    </>
  );
};

export default Images;
