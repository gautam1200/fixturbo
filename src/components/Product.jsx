import React, { useEffect, useState } from 'react'
import Header from './Header'
import ScrollToTop from './Scrollbuteon'
import { Box, Button, Rating, Typography } from '@mui/material'
import Righticon from '@mui/icons-material/ChevronRight';
import car from '../Images/topabout.png'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Sliders from './Slaider';
import Footers from './Footer';
import Productditels from './Productditels';

function Product() {

    const key = 'NpBEIMw8WujB8YXy';

    const [data, setdata] = useState([])

    const navigate = useNavigate()

    const Products = () => {
        axios.get('https://generateapi.onrender.com/api/cart', {
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

    const Productditels = (item) => {
        navigate(`/product/${item._id}`,{state : {item}})
    }

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
                                Shop Details
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
                                &nbsp; Shop Details
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

            <Box sx={{
                width: '100%',
                paddingTop: '50px',
                paddingBottom: '50px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
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
                        data.map((item, index) => (
                            <>
                                <Box
                                    sx={{
                                        width: { xs: '70%', sm: '43%', md: '30%', lg: '24%' },
                                        background: 'white',
                                        padding: '20px 10px',
                                        boxSizing: 'border-box',
                                        borderRadius: '10px',
                                        backgroundColor: '#efefef',
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            padding: '10px',
                                            boxSizing: 'border-box',
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
                                        <Button
                                        onClick={() => Productditels(item)}
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

                                            Add to cart
                                            <ArrowForwardIcon
                                                sx={{
                                                    verticalAlign: 'top',
                                                }} />

                                        </Button>
                                        
                                    </Box>
                                </Box>
                            </>
                        ))
                    }
                </Box>
            </Box>


            
            <Box
                data-aos="zoom-in-up">
                <Footers />
            </Box>
        </>
    )
}

export default Product
