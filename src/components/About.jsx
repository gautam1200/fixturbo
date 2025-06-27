import React from 'react'
import Header from './Header'
import { Box, Typography } from '@mui/material'
import car from '../Images/topabout.png'
import Righticon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <Box
      data-aos="zoom-in-up"
      sx={{
        width: '100%',

        backgroundColor: '#171717',

        gap: '20px',
      }}>

        <Header />
        <Box
          sx={{
            paddingTop: '80px',
            width: '85%',
            margin: 'auto',
            justifyContent: 'right',
            display: 'flex',
          }}>
          <Box sx={
            {
              width: '50%',
              color: 'white',

              display: 'flex',
              flexDirection: 'column',  
              justifyContent: 'center',
            }
          }>
            <Box sx={{

            }}>

            <Typography
              sx={{
                fontSize: '36px',
                fontWeight: 'bold',
                color: 'white',
                fontFamily: 'math',
              }}>
              About Us
            </Typography>
            <Typography
              sx={{
                fontSize: '20px',
                color: 'white',
                fontFamily: 'math',
                margin: '10px 0',
              }}>
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  fontSize: '20px',

                }}>
                Home  &nbsp;
              </Link>
              <Righticon sx={{ fontSize: '24px', verticalAlign: 'middle' }} />
              &nbsp; About Us
            </Typography>
            </Box>
          </Box>
          <Box sx={{
            width: '50%',
          }}>
            <img src={car} alt="" width={'100%'} />
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default About
