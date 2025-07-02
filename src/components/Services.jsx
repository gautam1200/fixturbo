import { Box, Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'
import Righticon from '@mui/icons-material/ChevronRight';
import car from '../Images/topabout.png'
import Servicess from './Servicess';
import axios from 'axios';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footers from './Footer';
import Sliders from './Slaider';
import ScrollToTop from './Scrollbuteon';



const key = ' PwkRtdydOfBZmgE2';
function Services() {
    const [data, setdata] = useState([])

    const Products = () => {
        axios.get('https://generateapi.onrender.com/api/service', {
            headers: {
                Authorization: key,
            }
        })
            .then((res) => {
                console.log("hyy");
                setdata(res.data.Data)

            })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        Products()
    }, [])
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
                }}>

                <Box
                    sx={{
                        paddingTop: '80px',
                        width: '85%',
                        margin: 'auto',
                        justifyContent: 'right',
                        display: 'flex',
                        flexWrap: 'wrap',
                    }}>
                    <Box sx={
                        {
                            width: { xs: '100%', sm: '100%', md: '50%' },
                            color: 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                        }
                    }>
                        <Box >

                            <Typography
                                sx={{
                                    fontSize: { xs: '26px', sm: '32px', md: '36px' },
                                    fontWeight: 'bold',
                                    color: 'white',
                                    fontFamily: 'math',
                                }}>
                                Service Details
                            </Typography>
                            <Typography
                                sx={{
                                    fontSize: { xs: '18px', sm: '18px', md: '20px' },
                                    color: 'white',
                                    fontFamily: 'math',
                                    margin: '10px 0',
                                }}>
                                <Link
                                    to="/"
                                    style={{
                                        textDecoration: 'none',
                                        color: 'white',
                                        fontSize: { xs: '18px', sm: '18px', md: '20px' },

                                    }}>
                                    Home  &nbsp;
                                </Link>
                                <Righticon sx={{ fontSize: '24px', verticalAlign: 'middle' }} />
                                &nbsp; Service Details
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{
                        width: { xs: '100%', sm: '100%', md: '50%' },
                    }}>
                        <img src={car} alt="" width={'100%'} />
                    </Box>
                </Box>
            </Box>

            <Box
                data-aos="zoom-in-up"
                sx={{
                    width: '100%',
                    backgroundColor: 'white',
                    padding: '40px 0',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',

                }}>

                <Box
                    data-aos="zoom-in-up"
                    sx={{
                        width: '85%',
                        margin: 'auto',
                        padding: '20px 0',
                        fontFamily: 'math',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexWrap: "wrap",
                    }}>

                    {
                        data.map((data, index) => (

                            <Box
                                data-aos="zoom-in-up"
                                sx={{
                                    width: { xs: '100%', sm: '48%', md: '32%' },
                                    margin: '10px 0',
                                    overflow: 'hidden',
                                    boxSizing: 'border-box',
                                    backgroundColor: '#eeeeeebf',
                                    borderRadius: '15px',
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.22)',

                                }}>
                                <Box
                                    sx={{
                                        padding: '20px',
                                        margin: '0',
                                    }}>
                                    <Box
                                        sx={{
                                            width: '20%',
                                            margin: '10px 0',
                                            img: {
                                                padding: '10px',
                                                backgroundColor: 'red',
                                                borderRadius: '10px',
                                                margin: '0 auto',
                                                cursor: 'pointer',
                                                width: '75%',
                                                transition: 'transform 0.3s ease-in-out',
                                                '&:hover': {
                                                    transform: 'scaleX(-1)',
                                                },
                                            },
                                        }}
                                    >
                                        <img src={data.icon} alt="" />
                                    </Box>
                                    <Typography
                                        sx={{
                                            fontSize: '24px',
                                            fontWeight: 'bold',
                                            color: '#000',
                                            fontFamily: 'math',
                                            margin: '10px 0',
                                        }}>
                                        {data.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: '16px',
                                            color: '#000',
                                            fontFamily: 'math',
                                            margin: '10px 0',
                                        }}>
                                        {data.text}

                                    </Typography>
                                    <Button
                                        sx={{
                                            alignItems: 'center',
                                            fontSize: '18px',
                                            display: 'flex',
                                            background: 'none',
                                            border: 'none',
                                            padding: '10px 20px',
                                            color: 'black',
                                            margin: '10px 0',

                                            '&:hover': {
                                                backgroundColor: 'red',
                                                color: 'white',
                                                transition: '0.5s',
                                            },
                                        }}>
                                        Add to Cart
                                        <ArrowForwardIcon
                                            sx={{
                                                verticalAlign: 'top',
                                            }} />

                                    </Button>
                                    <Box
                                    sx={{
                                        boxSizing: 'border-box',
                                        width: '100%',
                                        overflow: 'hidden',
                                        borderRadius: '0 0 15px 15px',
                                    }}>

                                    <img src={data.image} alt="" className='imgh' width={'100%'} style={{
                                        borderRadius: '0 0 15px 15px',
                                        
                                    }} />
                                    </Box>
                                </Box>
                            </Box>
                        ))

                    }
                </Box>
            </Box>


            <Box
                sx={{
                    width: '100%',
                    padding: '50px 0 100px 0',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    background: '#e1e1e1',

                }}
            >
                <Box
                    data-aos="zoom-in-up"
                    sx={{
                        width: { xs: '80%', sm: '80%', md: '60%', lg: '50%' },
                        margin: 'auto',
                        textAlign: 'center',
                    }}>
                    <span className='line'
                        style={{
                            color: 'red',
                            textAlign: 'center',
                            fontSize: '18px'
                        }}> Team Member </span>
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
                    }>Car Repair <br /> The Best Services</Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: '14px', sm: '16px', md: '18px' }
                        }}>A car repair is a service provided to fix any issues or a damages with your vehicle. It a involves diagnosing the problem, repairing or replacing</Typography>
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
                    }}>

                </Box>
                <Sliders />
            </Box>


            <Box
                data-aos="zoom-in-up">
                <Footers />
            </Box>

            {/* <Servicess /> */}
        </>
    )
}

export default Services
