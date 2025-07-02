import React from 'react'
import Header from './Header'
import ScrollToTop from './Scrollbuteon'
import { Box, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import Righticon from '@mui/icons-material/ChevronRight';
import car from '../Images/topabout.png'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import Sliders from './Slaider'
import Footers from './Footer'

function Contact() {
    const con = [{
        title: 'Address',
        icon: <LocationOnIcon />,
        contact: 'Old city Street,USA',
        contact1: '1212 New york-3500',
    },
    {
        title: 'Phone Number',
        contact: '(+888) 123 456 765',
        contact1: '(629) 555-0129',
        icon: <LocalPhoneIcon />,

    },
    {
        title: 'Opening',
        contact: 'Sun-10 AM To 5 PM',
        contact1: 'Thurs-9AM To 8PM',
        icon: <AccessTimeIcon />,

    },
    {
        title: 'E-mail',
        contact: 'fixturbo@mail.com',
        contact1: 'fixturbo123@mail.com',
        icon: <EmailIcon />,
    },
    ]
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
                                Contact
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
                                &nbsp; Contact
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
                    padding: '60px 0',
                    display: 'flex',

                    // alignItems: 'center',
                }}>
                <Box
                    data-aos="zoom-in-up"
                    sx={{
                        width: '85%',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        margin: 'auto',
                        gap: '20px',
                    }}>
                    {
                        con.map((item, index) => (

                            <Box sx={{
                                width: { xs: '80%', sm: '45%', md: '30%' },
                                display: 'flex',
                                flexDirection: 'column',
                                padding: '20px',
                                boxSizing: 'border-box',
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                                color: 'black',
                                borderBottom: '  3px solid black',
                                borderRadius: '10px',
                                '&:hover': {
                                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                                    transform: 'scale(1.02)',
                                    transition: 'transform 0.3s ease-in-out',
                                    backgroundColor: '#f0f0f0',
                                    borderBottom: '3px solid #ff0000',

                                }
                            }}>

                                <Box sx={{
                                    color: '#ff0000',
                                    width: 'max-content',
                                    backgroundColor: '#ff000030',
                                    padding: '15px',
                                    borderRadius: '50%',
                                    transition: 'transform 0.3s ease-in-out',
                                    '&:hover': {
                                        transform: 'scaleX(-1)',
                                    },
                                }}>
                                    {item.icon}
                                </Box>
                                <Typography
                                    sx={{
                                        fontSize: { xs: '20px', sm: '22px', md: '24px' },
                                        fontWeight: 'bold',
                                        margin: '10px 0',
                                        color: 'black',
                                        fontFamily: 'math',
                                        '&:hover': {
                                            color: '#ff0000',
                                            textDecoration: 'underline',
                                        }
                                    }}>{item.title}</Typography>
                                <Typography>
                                    {item.contact}
                                    <br />
                                    {item.contact1}
                                </Typography>


                            </Box>
                        ))}
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
        </>
    )
}

export default Contact
