import React from 'react'
import Header from './Header'
import { Box } from '@mui/material'
import car from '../Images/topabout.png'

function About() {
  return (
    <>
    <Box sx={{
      width: '100%',
       
        backgroundColor: '#171717',

        gap: '20px',
    }}>

      <Header/>
      <Box
        sx={{
            paddingTop: '50px',
            width: '85%',
            margin: 'auto',
            justifyContent: 'right',
            display: 'flex',
        }}>
            <img src={car} alt=""  />
        </Box>
    </Box>
    </>
  )
}

export default About
