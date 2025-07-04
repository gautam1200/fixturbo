import { Avatar, Box, Button, colors, Grid, Rating, Stack, Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import heroImage from '../Images/hero_bg.png';
import hero1 from '../Images/hero_1.png'
import hero2 from '../Images/hero_2.png'
import count1 from '../Images/counter-icon_1.svg'
import count2 from '../Images/counter-icon_2.svg'
import count3 from '../Images/counter-icon_3.svg'
import count4 from '../Images/counter-icon_4.svg'
import count5 from '../Images/icon-05.png'
import count6 from '../Images/icon-06.png'
import count7 from '../Images/icon-07.png'
import phone from '../Images/phone-1.svg'
import Header from './Header';
import trues from '@mui/icons-material/ArrowForward';
import about1 from '../Images/about-01.jpg'
import about2 from '../Images/about-02.jpg'
import about3 from '../Images/about-03.jpg'
import about5 from '../Images/icon_5.svg'
import about6 from '../Images/icon_6.svg'
import about7 from '../Images/icon_7.svg'
import about8 from '../Images/icon_9.svg'
import about9 from '../Images/icon_8.svg'
import about10 from '../Images/icon_10.svg'
import wcu3 from '../Images/wcu-3.png'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import shape1 from '../Images/shape1.svg'
import shape2 from '../Images/shape2.svg'
import wcu1 from '../Images/wcu-1.png'
import wcu2 from '../Images/wcu-2.png'
import DoneAllIcon from '@mui/icons-material/DoneAll';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Resizable from './Slaider';
import axios from 'axios';
import Footers from './Footer';
import Sliders from './Slaider';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import ScrollToTop from './Scrollbuteon';

Aos.init();



function Herosection() {

    const boxs = [
        {
            title: "2k+",
            text: "Winning Award",
            iconClass: count1,
        },
        {
            title: "8k+",
            text: "Happy Clients",
            iconClass: count2,
        },
        {
            title: "200k+",
            text: "Team Member",
            iconClass: count3,
        },
        {
            title: "9k+",
            text: "Project Done",
            iconClass: count4,
        }
    ];
    const Washing = [
        {
            title: "Modern Workshop",
            text: "A car wash shop is a foundation where cars are fixed and wash via car technicians and experts.",
            iconClass: count4,
        },
        {
            title: "Talented Workers",
            text: "A car wash shop is a foundation where cars are fixed and wash via car technicians and experts.",
            iconClass: count5,
        },
        {
            title: "Best Price",
            text: "A car wash shop is a foundation where cars are fixed and wash via car technicians and experts.",
            iconClass: count6,
        }
    ];
    const Advantages = [
        {
            title: 'Quick Service Times',
            iconClass: <DoneAllIcon />,
        },
        {
            title: 'Low Price Guarantee',
            iconClass: <DoneAllIcon />,
        },
        {
            title: 'Free Trade Appraisal',
            iconClass: <DoneAllIcon />,
        },
        {
            title: 'Trained Technicians',
            iconClass: <DoneAllIcon />,
        },
        {
            title: 'Genuine spare parts',
            iconClass: <DoneAllIcon />,
        },
        {
            title: 'Life-Time Warranty',
            iconClass: <DoneAllIcon />,
        },
        {
            title: 'Unbeatable savings!',
            iconClass: <DoneAllIcon />,
        },
        {
            title: 'Automated testing lanes',
            iconClass: <DoneAllIcon />,
        },
    ];
    const solutions = [
        {
            title: 'Auto Fixers',
            text: 'A car repair is a service provided to fix any issues or damages with y vehicle It involves diagnosing',
            icon: about5,
        },
        {
            title: 'Mechanic Masters',
            text: 'A car repair is a service provided to fix any issues or damages with y vehicle It involves diagnosing',
            icon: about6,
        },
        {
            title: 'Car Care Clinic',
            text: 'A car repair is a service provided to fix any issues or damages with y vehicle It involves diagnosing',
            icon: about7,
        },
    ]
    const solution = [
        {
            title: 'Precision Auto Works',
            text: 'A car repair is a service provided to fix any issues or damages with y vehicle It involves diagnosing',
            icon: about8,
        },
        {
            title: 'Drive-In Garage',
            text: 'A car repair is a service provided to fix any issues or damages with y vehicle It involves diagnosing',
            icon: about9,
        },
        {
            title: 'Speedy Auto Repair',
            text: 'A car repair is a service provided to fix any issues or damages with y vehicle It involves diagnosing',
            icon: about10,
        },
    ]
    const [data, setdata] = useState([])
    // const key = 'NpBEIMw8WujB8YXy';
    const Products = () => {
        axios.get('https://generateapi.onrender.com/api/cart', {
            headers: {
                Authorization: 'NpBEIMw8WujB8YXy',
            }
        })
            .then((res) => {
                console.log(res.data.Data);
                setdata(res.data.Data)

            })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        Products()
    }, [])
    const [datas, setdatas] = useState([])
    const Gallerys = () => {
        axios.get('https://generateapi.onrender.com/api/gallery', {
            headers: {
                Authorization: 'J0qXPNCpYKFocI8Z',
            }
        })
            .then((res) => {
                console.log("hyy");
                setdatas(res.data.Data)

            })
            .catch((error) => {
                console.log(error);
            })
    }
    useEffect(() => {
        Gallerys()
    }, [])





    return (

        <>
            <ScrollToTop />
            <Box
                sx={{
                    position: 'fixed',
                    top: '0',
                    left: '0',
                    width: '1240px',
                    zIndex: 99,
                }}>

                <Header />
            </Box>

            <Box
                data-aos="zoom-in-up"
                sx={{
                    position: 'relative',
                    height: {
                        xs: '760px',
                        sm: '760px',
                        md: '550px',
                        lg: '710px',

                    },
                    backgroundImage: `url(${heroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                }}>
                <Box
                    sx={{
                        width: '85%',
                        zIndex: 2,
                        color: 'white',
                        margin: 'auto',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: { xs: '100px 0 0 0', md: '132px 0 0 0 ', lg: '230px 0 0 0' },
                        flexWrap: 'wrap'
                    }}>
                    <Box
                        sx={{
                            width: { xs: '100%', sm: '80%', md: '45%' },
                            display: 'flex',
                            alignItems: 'end',
                            justifyContent: 'center'
                        }}>
                        <img src={hero1} alt="" width={'100%'} />
                    </Box>
                    <Box
                        sx={{ width: { xs: '100%', sm: '80%', md: '45%' } }}>
                        <span className='lines' style={{ color: 'red' }} > Growth Accelerator</span>
                        <Typography
                            fontSize={{ xs: '34px', sm: '36px', md: '40px', lg: '54px', xl: '56px' }}
                            fontWeight="bold"
                            lineHeight="1.2"
                            sx={{
                                '&:hover': {
                                    color: 'red',
                                    transition: '0.5s',
                                },
                            }}

                        >
                            Gear Up For Great Quality Service
                        </Typography>
                        <span>Vestibulum rhoncus nisl ac gravida porta. Mauris eu sapien lacus</span>
                        <Box margin={'30px 0'}>
                            <Link to="/about" style={{ textDecoration: 'none' }}>
                                <Button
                                    sx={{
                                        color: 'white',
                                        backgroundColor: 'red',
                                        padding: { xs: '10px 15px', sm: '10px 15px', lg: '15px 25px' },
                                        fontSize: '16px',
                                        border: '1px solid transparent',
                                        marginRight: '15px',
                                        fontSize: { xs: '14px', sm: '16px' },
                                        "&:hover": {
                                            backgroundColor: "white",
                                            color: 'black',
                                            border: '1px solid white',
                                        }

                                    }}>LEARN ABOUT US</Button>
                            </Link>
                            <Button
                                sx={{
                                    color: 'white',
                                    backgroundColor: 'transparent',
                                    padding: { xs: '10px 15px', sm: '10px 15px', lg: '15px 25px' },
                                    fontSize: '16px',
                                    border: '1px solid white',
                                    fontSize: { xs: '14px', sm: '16px' },
                                    "&:hover": {
                                        backgroundColor: "white",
                                        color: 'black',
                                        border: '1px solid transparent',
                                    }
                                }}>OUR SERVICES</Button>
                        </Box>
                    </Box>
                </Box >
            </Box>

            <Box
                data-aos="zoom-in-up"
                sx={{
                    width: '85%',
                    display: 'flex',
                    margin: 'auto',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    marginTop: { xs: '-15%', sm: '-9%', lg: '-13%' },
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}>
                <Box
                    sx={{
                        width: { xs: '100%', sm: '80%', md: '50%' },
                        display: 'flex',
                        flexWrap: 'wrap',
                        padding: '20px',
                        backgroundColor: 'rgb(255, 255, 255)',
                        color: 'black',
                        zIndex: '1',
                        boxSizing: 'border-box'
                    }}>
                    {
                        boxs.map((card, index) => (
                            <>
                                <Box sx={{
                                    width: { xs: '70%', sm: '29%' },
                                    justifyContent: 'center',
                                    display: 'flex',
                                    flexDirection: 'column',
                                }} >
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '24px', sm: '30px', lg: '34px' },
                                            margin: '0',
                                            fontWeight: 'bold',
                                            lineHeight: '1.2',
                                        }}>{card.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: '16px', sm: '14px', lg: '18px' },
                                            margin: '5px 0',
                                            lineHeight: '1.2',
                                        }}
                                    >{card.text}</Typography>
                                </Box>
                                <Box sx={{
                                    width: { xs: '20%', sm: '15%' },
                                    margin: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    borderRadius: '50%',
                                }} >
                                    <img src={card.iconClass} alt=""
                                        style={{
                                            width: '35px',
                                            padding: '10px',
                                            backgroundColor: 'red',
                                            borderRadius: '50%',
                                        }} />
                                </Box>

                            </>
                        ))}
                </Box>
                <Box
                    sx={{
                        width: { xs: '100%', sm: '80%', md: '50%' },
                        position: 'relative',
                        overflow: 'hidden',
                        backgroundImage: `url(${hero2})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        padding: { xs: '20px', sm: '30px', md: '50px' },
                        color: 'white',
                        boxSizing: 'border-box'

                    }}
                >
                    <Box sx={{ position: 'relative', zIndex: 2 }}>

                        <Typography>1. We're Your Repair Superstore</Typography>
                        <Typography>2. Fueled by Expertise</Typography>
                        <Typography>3. Car Repair the best Services</Typography>
                        <Box sx={{
                            display: 'flex',
                            marginTop: '20px',
                            width: { xs: '80%', sm: '50%', md: '80%', lg: '65%' },
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}>
                            <Box >
                                <img src={phone} alt=""
                                    style={{
                                        width: '30px',
                                        padding: '15px  ',
                                        backgroundColor: 'red',
                                        borderRadius: '50%',
                                        margin: '0 auto',
                                        cursor: 'pointer',
                                    }} />
                            </Box>
                            <Box>
                                <Typography>Requesting A Call:</Typography>
                                <Typography sx={{
                                    fontSize: { xs: '22px', sm: '22px', md: '24px' },
                                    fontWeight: 'bold',
                                    '&:hover': {
                                        color: 'black',
                                        transition: '0.5s',
                                    },
                                }}>(629) 555-0129</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(90deg, rgba(255, 0, 0, 0.73) 0%, rgba(255, 0, 0, 0.38) 68%, rgba(255, 255, 255, 0) 100%)',
                            pointerEvents: 'none',
                            zIndex: 1,
                        }}
                    />
                </Box>
            </Box>

            <Box padding={'90px 0 30px 0'}>
                <Box
                    data-aos="zoom-in-up"
                    sx={{
                        width: '85%',
                        display: 'flex',
                        margin: 'auto',
                        borderRadius: '15px',
                        overflow: 'hidden',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                    }}>
                    <Box sx={{
                        width: { xs: '100%', sm: '80%', md: '50%' },
                        padding: { xs: '0', sm: '20px' },
                        boxSizing: 'border-box'
                    }}>
                        <Typography
                            sx={{
                                fontSize: { xs: '28px', sm: '36px', md: '40px' },
                                fontWeight: '900',
                                lineHeight: '1.2',
                                fontFamily: 'math',
                                '&:hover': {
                                    color: 'red',
                                    transition: '0.5s',
                                }
                            }}>
                            Professional Washing & Cleaning of Your Car
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: '16px', sm: '18px', md: '20px' },
                                margin: '5px 0',
                                lineHeight: '1.2',
                                fontFamily: 'math',
                                textAlign: 'justify'
                            }}>
                            We are an organization that has assembled its standing on dependable administrations for all seasons of vehicles in Manhattan
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-around',
                            alignItems: 'center',
                            cursor: 'pointer',
                            flexWrap: 'wrap',
                            margin: '20px 0',
                        }}>
                            {
                                Washing.map((item, index) => (
                                    <>
                                        <Box sx={{
                                            width: '20%',
                                            margin: '10px 0',
                                        }}>
                                            <img className="icon" src={item.iconClass} alt=""
                                                style={{
                                                    padding: '10px',
                                                    backgroundColor: 'red',
                                                    borderRadius: '50%',
                                                    cursor: 'pointer',
                                                }} />

                                        </Box>
                                        <Box sx={{
                                            width: '80%',
                                            margin: '10px 0'
                                        }}>
                                            <Link to="/about" style={{ color: 'black', textDecoration: 'none' }}>
                                                <Typography
                                                    sx={{
                                                        fontSize: { xs: '18px', sm: '18px', md: '26px' },
                                                        // margin: '5px 0',
                                                        lineHeight: '1.2',
                                                        fontFamily: 'math',
                                                        fontWeight: 'bold',
                                                        color: 'black',

                                                        '&:hover': {
                                                            color: 'red',
                                                            transition: '0.5s',
                                                        },
                                                    }}>

                                                    {item.title}
                                                </Typography>
                                            </Link>
                                            <Typography
                                                sx={{
                                                    fontSize: { xs: '16px', sm: '16px', md: '18px' },
                                                    lineHeight: '1.2',
                                                    fontFamily: 'emoji',
                                                }}>
                                                {item.text}
                                            </Typography>
                                        </Box>
                                    </>
                                ))
                            }
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            width: { xs: '100%', sm: '80%', md: '50%' },
                            boxSizing: 'border-box',
                            alignItems: 'center',
                            display: 'flex',
                        }}>
                        <Box
                            sx={{
                                gap: '10px',
                                display: 'flex',
                                flexWrap: 'wrap',

                            }}>
                            <Box width={'100%'}>
                                <img src={about1} alt="" width={'100%'} />
                            </Box>
                            <Box width={'48%'}>
                                <img src={about2} alt="" width={'100%'} />
                            </Box>
                            <Box width={'48%'}>
                                <img src={about3} alt="" width={'100%'} />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                data-aos="zoom-in-up"
                sx={{
                    width: '100%',
                    padding: '50px 0',
                    background: '#e1e1e1',

                }}>
                <Typography
                   
                    sx={{
                        fontSize: { xs: '34px', sm: '46px', md: '56px' },
                        fontWeight: 'bold',
                        textAlign: 'center',
                        lineHeight: '1.2',
                        fontFamily: 'math',
                        '&:hover': {
                            color: 'red',
                            transition: '0.5s',
                        },
                    }}>
                    Featured Products
                </Typography>

                <Box sx={{
                    width: '85%',
                    margin: 'auto',
                    display: 'flex',
                    justifyContent: 'space-around',
                    flexWrap: 'wrap',
                    gap: '20px 0',
                    padding: '30px 0',
                }}>
                    {
                        data.slice(0, 4).map((item, index) => (
                            <>
                                <Box
                                    sx={{
                                        width: { xs: '70%', sm: '43%', md: '30%', lg: '24%' },
                                        background: 'white',
                                        padding: '20px 10px',
                                        boxSizing: 'border-box',
                                        borderRadius: '10px'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            padding: '10px',
                                            boxSizing: 'border-box',
                                            backgroundColor: '#d8d8d8',
                                            borderRadius: '10px 10px 0 0',
                                        }}>

                                        <img src={item.image[0]} alt="" className='imgh' style={{
                                            width: '80%',
                                        }} />
                                    </Box>
                                    <Box>
                                        <Typography
                                            sx={{
                                                fontSize: { xs: '24px', sm: '22px', md: '21px' },
                                                fontWeight: '600',
                                                fontFamily: 'math',
                                                height: '60px',
                                                alignItems: 'center',
                                                display: 'flex',
                                                lineHeight: '1.2',
                                                color: 'black',
                                                '&:hover': {
                                                    color: 'red',
                                                    transition: '0.5s',
                                                },
                                            }}>{item.title}</Typography>
                                        {item.stars}
                                        <Typography
                                            sx={{
                                                verticalAlign: 'middle',

                                            }}>
                                            <Rating name="read-only" value={item.rating} readOnly />
                                        </Typography>
                                        <Typography>
                                            <del style={{
                                                color: '#7a7a7a',
                                                width: '0.8rem',
                                            }}>${item.price}
                                            </del>
                                            <span style={{
                                                color: 'red',
                                                fontWeight: 'bold',
                                                marginLeft: '10px',
                                                fontSize: '20px'
                                            }}>
                                                ${item.cutofprice}</span>
                                        </Typography>
                                        <Link to="/product" style={{ color: 'black', textDecoration: 'none' }}>
                                            <Button
                                                sx={{
                                                    alignItems: 'center',
                                                    fontSize: '18px',
                                                    display: 'flex',
                                                    background: 'none',
                                                    border: 'none',
                                                    padding: '10px 20px',
                                                    color: 'black',
                                                    marginTop: '10px',
                                                    '&:hover': {
                                                        backgroundColor: 'red',
                                                        color: 'white',
                                                        transition: '0.5s',
                                                    },
                                                }}>
                                                More Product
                                                <ArrowForwardIcon
                                                    sx={{
                                                        verticalAlign: 'top',
                                                    }} />

                                            </Button>
                                        </Link>
                                    </Box>
                                </Box>
                            </>
                        ))
                    }
                </Box>
            </Box>

            <Box
                sx={{
                    width: '100%',
                    padding: '50px 0',
                }}>
                <Box
                    data-aos="zoom-in-up"
                    sx={{
                        width: '85%',
                        display: 'flex',
                        margin: 'auto',
                        flexWrap: 'wrap',
                        padding: '30px 0',
                        justifyContent: 'space-between',
                        position: 'relative'
                    }}>
                    <img
                        src={shape1}
                        alt=""
                        style={{
                            width: '100px',
                            position: 'absolute',
                            zIndex: -1,
                            animation: 'spin 25s linear infinite',
                            opacity: '0.5',
                        }}
                    />
                    <img
                        src={shape2}
                        alt=""
                        style={{
                            width: '100px',
                            top: '100px',
                            left: '60px',
                            position: 'absolute',
                            zIndex: -2,
                            animation: 'spin 25s linear infinite',
                            opacity: '0.5',
                        }}
                    />
                    <Box
                        sx={{ width: { xs: '100%', sm: '80%', md: '45%' } }}>
                        <span className='line' style={{
                            color: 'red',
                            fontSize: '18px'

                        }}> WHY CHOOSE US</span>
                        <Typography sx={{
                            fontSize: { xs: '30px', sm: '34px', md: '38px', lg: '46px' },
                            fontWeight: '900',
                            lineHeight: '1.2',
                            fontFamily: 'math',
                            padding: '10px 0',
                            '&:hover': {
                                color: 'red',
                                transition: '0.5s',
                            }
                        }}>
                            Our Best Advantages
                        </Typography>
                        <span>Et purus duis sollicitudin dignissim habitant. Egestas nulla quis venenatis cras sed eu massa eu faucibus. Urna fusce</span>

                        <Box
                            sx={{

                                display: 'flex',
                                flexWrap: 'wrap',
                                width: '95%',
                                justifyContent: 'space-between',
                                padding: '20px 0',
                            }}>
                            {
                                Advantages.map((item, index) => (
                                    <>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                gap: '10px',
                                                width: { xs: '100%', sm: '50%', md: '50%' },
                                                padding: '10px 0',

                                            }}>

                                            <DoneAllIcon />
                                            <Typography
                                                sx={{
                                                    fontSize: { xs: '20px', sm: '18px' },
                                                    fontFamily: 'math',
                                                    color: 'black',
                                                    fontWeight: 'bold',
                                                    '&:hover': {
                                                        color: 'red',
                                                        transition: '0.5s',
                                                    },
                                                }}>
                                                {item.title}
                                            </Typography>
                                        </Box>
                                    </>
                                ))
                            }
                        </Box>
                        <Link to="/services" style={{ color: 'black', textDecoration: 'none' }}>
                            <Button
                                sx={{
                                    color: 'white',
                                    backgroundColor: 'red',
                                    padding: { xs: '10px 15px', sm: '10px 15px', lg: '15px 25px' },
                                    fontSize: '16px',
                                    border: '2px solid transparent',
                                    marginRight: '15px',
                                    fontSize: { xs: '14px', sm: '16px' },
                                    "&:hover": {
                                        backgroundColor: "white",
                                        color: 'black',
                                        border: '2px solid black',
                                    }
                                }}>LEARN ABOUT US</Button>
                        </Link>

                    </Box>
                    <Box
                        sx={{
                            width: { xs: '100%', sm: '100%', md: '50%' },
                            boxSizing: 'border-box',
                            display: 'flex',
                            gap: '20px',
                            flexWrap: 'wrap',
                            margin: { xs: '20px 0', sm: '20px 0' },
                        }}>
                        <Box sx={{
                            width: { xs: '100%', sm: '47%', md: '47%' },
                            display: 'flex',
                            alignItems: 'self-start',

                        }}>
                            <img src={wcu1} alt="" width={'100%'} />
                        </Box>
                        <Box sx={{
                            width: { xs: '100%', sm: '47%', md: '47%' },
                            display: { sm: 'flex', xs: 'none' },
                            alignItems: 'self-end'
                        }}>
                            <img src={wcu2} alt="" width={'100%'} />
                        </Box>
                    </Box>
                </Box>
            </Box>

            <Box
                data-aos="zoom-in-up"
                sx={{
                    width: '100%',
                    padding: '50px 0',
                    background: '#e1e1e1',
                }}>
                <Box
                    data-aos="fade-up"
                    sx={{
                        width: { xs: '87%', sm: '70%', md: '65%', lg: '50%' },
                        margin: 'auto',
                        textAlign: 'center',
                    }}>
                    <Typography sx={
                        {
                            fontSize: { xs: '34px', sm: '46px', md: '56px' },
                            fontWeight: 'bold',
                            textAlign: 'center',
                            lineHeight: '1.2',
                            fontFamily: 'math',
                            '&:hover': {
                                color: 'red',
                                transition: '0.5s',
                            },
                        }
                    }>Dependable Car Repair The Solutions</Typography>
                </Box>
                <Box
                    data-aos="fade-up"

                    sx={{
                        width: '85%',
                        display: 'flex',
                        margin: 'auto',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        padding: '30px 0',

                    }}>
                    <Box sx={{
                        width: { xs: '100%', sm: '50%', md: '35%' },
                        boxSizing: 'border-box',
                        padding: '15px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',


                    }}>
                        {
                            solutions.map((item, index) => (
                                <>
                                    <Box
                                        sx={{
                                            width: '75%',
                                            margin: '20px 0',
                                        }}>


                                        <Link to="/services" style={{ color: 'black', textDecoration: 'none' }}>
                                            <Typography
                                                sx={{
                                                    fontSize: '24px',
                                                    fontFamily: 'math',
                                                    color: 'black',
                                                    fontWeight: 'bold',
                                                    '&:hover': {
                                                        color: 'red',
                                                        transition: '0.5s',
                                                    },
                                                }}>{item.title}
                                            </Typography>
                                        </Link>

                                        <Typography
                                            sx={{
                                                fontSize: '16px',
                                                color: 'black',
                                                textAlign: 'justify'
                                            }}>{item.text}
                                        </Typography>
                                    </Box>
                                    <Box
                                        sx={{
                                            width: '20%',
                                            margin: '10px 0',
                                            img: {
                                                padding: '10px',
                                                backgroundColor: '#ff34345e',
                                                borderRadius: '50%',
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
                                        <img src={item.icon} alt="" />
                                    </Box>
                                </>
                            ))
                        }
                    </Box>


                    <Box sx={{
                        width: { xs: '100%', sm: '50%', md: '30%' },
                        boxSizing: 'border-box',
                        padding: '15px',
                        overflow: 'hidden',
                        // borderRadius:'60%'

                    }}>
                        <img src={wcu3} alt="" width={'100%'}
                            style={{
                                borderRadius: '250px',

                            }} />
                    </Box>
                    <Box sx={{
                        width: { xs: '100%', sm: '70%', md: '35%' },
                        boxSizing: 'border-box',
                        padding: '15px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between'
                    }}>
                        {
                            solution.map((item, index) => (
                                <>
                                    <Box
                                        sx={{
                                            width: '20%',
                                            margin: '10px 0',
                                            img: {
                                                padding: '10px',
                                                backgroundColor: '#ff34345e',
                                                borderRadius: '50%',
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
                                        <img src={item.icon} alt="" />
                                    </Box>
                                    <Box
                                        sx={{
                                            width: '75%',
                                            margin: '10px 0',
                                        }}>
                                        <Link to="/services" style={{ color: 'black', textDecoration: 'none' }}>
                                        <Typography
                                            sx={{
                                                fontSize: '24px',
                                                fontFamily: 'math',
                                                color: 'black',
                                                fontWeight: 'bold',
                                                '&:hover': {
                                                    color: 'red',
                                                    transition: '0.5s',
                                                },
                                            }}>{item.title}
                                        </Typography>
                                        </Link>
                                        <Typography
                                            sx={{
                                                fontSize: '16px',
                                                color: 'black',
                                                textAlign: 'justify'
                                            }}>{item.text}
                                        </Typography>
                                    </Box>
                                </>
                            ))
                        }
                    </Box>
                </Box>
            </Box>


            <Box
                sx={{
                    width: '100%',
                    padding: '50px 0',

                }}>
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
                        }}> Our Work </span>
                    <Typography sx={
                        {
                            fontSize: { xs: '31px', sm: '46px', md: '56px' },
                            fontWeight: 'bold',
                            textAlign: 'center',
                            lineHeight: '1.2',
                            fontFamily: 'math',
                            '&:hover': {
                                color: 'red',
                                transition: '0.5s',
                            }
                        }
                    }>Our Featured Gallery</Typography>
                    <Typography
                        sx={{
                            fontSize: { xs: '14px', sm: '16px', md: '18px' }
                        }}>Our technicians are ASE-certified, each service is documented in a digital record for transparency, and we rotate key maintenance tasks to prevent unexpected failures.</Typography>
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
                    {
                        datas.slice(0, 6).map((item, index) => (
                            <>
                                <Box className="Gallery-box"
                                    sx={{
                                        width: { xs: '100%', sm: '32%', lg: '32%' },
                                        overflow: 'hidden',
                                        boxSizing: 'border-box',
                                        position: 'relative',
                                        borderRadius: '30px'
                                    }}
                                >
                                    <img className="Galleryimg" src={item.image[0]} alt="" width="100%" />
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

                            </>
                        ))}
                </Box>


            </Box>


            <Box
                data-aos="zoom-in-up">
                <Footers />
            </Box>



        </>
    );
}

export default Herosection;



